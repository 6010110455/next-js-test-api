const dev = process.env.NODE_ENV !== "production";

export const API_SERVER = dev
  ? "https://kittipoomhill.eaccom.net/admin/api/v1"
  : "https://kittipoomhill.eaccom.net/admin/api/v1";
