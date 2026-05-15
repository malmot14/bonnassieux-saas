import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { leads } from "./drizzle/schema.ts";

config();

console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ présent" : "✗ absent");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

try {
  const db = drizzle(pool);
  const result = await db.select().from(leads).limit(10);
  console.log("✓ Connexion DB réussie");
  console.log("✓ Leads trouvés:", result.length);
  if (result.length > 0) {
    console.log("Premier lead:", {
      id: result[0].id,
      name: result[0].name,
      userId: result[0].userId,
      latitude: result[0].latitude,
      longitude: result[0].longitude
    });
  }
} catch (e) {
  console.error("✗ Erreur DB:", e.message);
} finally {
  await pool.end();
}
