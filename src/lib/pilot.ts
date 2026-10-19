// Where the Clarivance pilot app lives. Override with VITE_PILOT_URL (e.g. a custom app.clarivanceai.co.uk domain).
export const PILOT_URL: string =
  (import.meta.env.VITE_PILOT_URL as string | undefined)?.replace(/\/$/, "") || "https://clarivance-prototype.onrender.com";
export const PILOT_REGISTER = `${PILOT_URL}/register`;
export const PILOT_SIGNIN = `${PILOT_URL}/signin`;
