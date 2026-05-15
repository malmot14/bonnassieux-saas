export const ENV = {
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  isProduction: process.env.NODE_ENV === "production",
  // Google Maps — clé directe (plus de proxy Manus)
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY ?? "",
  // Admin créé automatiquement au 1er démarrage si ces vars sont définies
  adminEmail: process.env.ADMIN_EMAIL ?? "",
  adminPassword: process.env.ADMIN_PASSWORD ?? "",
};