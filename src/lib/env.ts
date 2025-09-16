export function getAppUrl() {
  if (process.env.NODE_ENV === "production") {
    return "https://kam-ui.vercel.app";
  }

  return "http://localhost:3000";
}
