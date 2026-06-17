/**
 * Clarivance AI — Waitlist proxy (Render Web Service).
 *
 * The marketing site is deployed as a static site on Render and has no server of
 * its own. This tiny Node service is the one trusted place that holds the Airtable
 * personal-access token: the browser POSTs the form here, and this service writes
 * the row to Airtable. The token is a Render environment variable and never ships
 * to the client.
 *
 * Zero dependencies — uses only the Node standard library and global fetch (Node 18+).
 */

import http from "node:http";

const PORT = process.env.PORT || 8787;
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || "Waitlist";
// Comma-separated list of allowed site origins, e.g.
// "https://clarivance.ai,https://clarivance-ai.onrender.com". Use "*" to allow any.
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS || "*";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stripSlash = (s) => s.replace(/\/+$/, "");

function corsHeaders(origin) {
  // Normalize trailing slashes: browsers send Origin without one, but a value
  // pasted into config may include it. Compare and echo back without slashes.
  const allowed = ALLOWED_ORIGINS.split(",").map((o) => stripSlash(o.trim())).filter(Boolean);
  const allowAny = allowed.includes("*");
  const reqOrigin = origin ? stripSlash(origin) : "";
  const allowOrigin = allowAny ? "*" : reqOrigin && allowed.includes(reqOrigin) ? reqOrigin : allowed[0] || "";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function send(res, status, body, headers) {
  const payload = JSON.stringify(body);
  res.writeHead(status, { "Content-Type": "application/json", ...headers });
  res.end(payload);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    let tooBig = false;
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1e6) {
        tooBig = true;
        req.destroy();
      }
    });
    req.on("end", () => {
      if (tooBig) return reject(new Error("Payload too large"));
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || null;
  const cors = corsHeaders(origin);

  // Simple health check for Render.
  if (req.method === "GET" && (req.url === "/health" || req.url === "/")) {
    return send(res, 200, { ok: true, service: "clarivance-waitlist", version: "1.1.0" }, cors);
  }

  if (req.method === "OPTIONS") {
    res.writeHead(204, cors);
    return res.end();
  }

  if (req.method !== "POST") {
    return send(res, 405, { error: "Method not allowed" }, cors);
  }

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    console.error(`[${new Date().toISOString()}] Missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID env var.`);
    return send(res, 500, { error: "Server is not configured yet." }, cors);
  }

  let data;
  try {
    data = await readJson(req);
  } catch {
    return send(res, 400, { error: "Invalid request body." }, cors);
  }

  const firstName = String(data.firstName || "").trim();
  const lastName = String(data.lastName || "").trim();
  const email = String(data.email || "").trim();

  if (!firstName || !lastName) {
    return send(res, 400, { error: "First and last name are required." }, cors);
  }
  if (!EMAIL_RE.test(email)) {
    return send(res, 400, { error: "A valid email address is required." }, cors);
  }

  // Field names must match the Airtable column names exactly (case-sensitive).
  const fields = { "First name": firstName, "Last name": lastName, "Business email": email };
  if (data.businessName) fields["Business name"] = String(data.businessName).trim();
  if (data.businessType) fields["Business type"] = String(data.businessType);
  if (data.income) fields["Annual income"] = String(data.income);
  if (data.software) fields["Accounting software"] = String(data.software);
  if (data.message) fields["Message (optional)"] = String(data.message).trim();

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`;

  try {
    const airtableRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      // typecast lets Airtable create single-select options on the fly.
      body: JSON.stringify({ fields, typecast: true }),
    });

    if (!airtableRes.ok) {
      const detail = await airtableRes.text();
      console.error(`[${new Date().toISOString()}] Airtable error`, airtableRes.status, detail);
      return send(res, 502, { error: "Could not save your submission. Please try again." }, cors);
    }
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Airtable request failed`, err);
    return send(res, 502, { error: "Could not save your submission. Please try again." }, cors);
  }

  return send(res, 200, { ok: true }, cors);
});

server.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Waitlist proxy listening on :${PORT} (Node ${process.version})`);
});
