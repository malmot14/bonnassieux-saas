import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { users, leads, prospectsPotentiels } from "./drizzle/schema.ts";

config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const db = drizzle(pool);

try {
  console.log("=== USERS ===");
  const allUsers = await db.select().from(users);
  console.log(JSON.stringify(allUsers, null, 2));
  
  console.log("\n=== LEADS (total) ===");
  const allLeads = await db.select().from(leads);
  console.log("Count:", allLeads.length);
  if (allLeads.length > 0) console.log("By userId:", allLeads.reduce((acc, l) => ({ ...acc, [l.userId]: (acc[l.userId] || 0) + 1 }), {}));
  
  console.log("\n=== PROSPECTS (total) ===");
  const allProspects = await db.select().from(prospectsPotentiels);
  console.log("Count:", allProspects.length);
  
  await pool.end();
  process.exit(0);
} catch (e) {
  console.error("Error:", e.message);
  await pool.end();
  process.exit(1);
}
