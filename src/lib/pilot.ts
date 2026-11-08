// Where the Clarivance pilot app lives (hosted on Railway). Override with VITE_PILOT_URL, e.g. for a staging app.
export const PILOT_URL: string =
  (import.meta.env.VITE_PILOT_URL as string | undefined)?.replace(/\/$/, "") || "https://app.clarivanceai.co.uk";
export const PILOT_REGISTER = `${PILOT_URL}/register`;
export const PILOT_SIGNIN = `${PILOT_URL}/signin`;
