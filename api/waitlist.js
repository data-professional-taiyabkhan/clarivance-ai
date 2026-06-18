export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || 'Waitlist';

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    console.error(`[${new Date().toISOString()}] Missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID env var.`);
    return res.status(500).json({ error: 'Server is not configured yet.' });
  }

  const data = req.body || {};
  
  const firstName = String(data.firstName || '').trim();
  const lastName = String(data.lastName || '').trim();
  const email = String(data.email || '').trim();

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'First and last name are required.' });
  }
  
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  // Field names must match the Airtable column names exactly (case-sensitive).
  const fields = { 'First name': firstName, 'Last name': lastName, 'Business email': email };
  if (data.businessName) fields['Business name'] = String(data.businessName).trim();
  if (data.businessType) fields['Business type'] = String(data.businessType);
  if (data.income) fields['Annual income'] = String(data.income);
  if (data.software) fields['Accounting software'] = String(data.software);
  if (data.message) fields['Message (optional)'] = String(data.message).trim();

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`;

  try {
    const airtableRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      // typecast lets Airtable create single-select options on the fly.
      body: JSON.stringify({ fields, typecast: true }),
    });

    if (!airtableRes.ok) {
      const detail = await airtableRes.text();
      console.error(`[${new Date().toISOString()}] Airtable error`, airtableRes.status, detail);
      return res.status(502).json({ error: 'Could not save your submission. Please try again.' });
    }
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Airtable request failed`, err);
    return res.status(502).json({ error: 'Could not save your submission. Please try again.' });
  }

  return res.status(200).json({ ok: true });
}
