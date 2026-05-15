import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { leads } from "./drizzle/schema.ts";

config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const db = drizzle(pool);

const testLeads = [
  { userId: 1, name: "Boulangerie Leclerc", sector: "artisans", latitude: "49.183", longitude: "-0.367", status: "À visiter", priority: "moyenne", address: "Caen", leadType: "CM" },
  { userId: 1, name: "Salon coiffure Chic", sector: "artisans", latitude: "49.185", longitude: "-0.365", status: "À visiter", priority: "moyenne", address: "Caen", leadType: "CM" },
  { userId: 1, name: "Restaurant Le Normand", sector: "restaurants", latitude: "49.182", longitude: "-0.368", status: "Signé", priority: "haute", address: "Caen", leadType: "CM" },
  { userId: 1, name: "Gym Fitness Club", sector: "sport/bien-être", latitude: "49.175", longitude: "-0.375", status: "Perdu", priority: "basse", address: "Caen", leadType: "CM" },
  { userId: 1, name: "Plomberie Bernard", sector: "BTP", latitude: "49.188", longitude: "-0.362", status: "En cours", priority: "haute", address: "Caen", leadType: "CM" },
  { userId: 1, name: "Boutique mode Élégance", sector: "artisans", latitude: "49.180", longitude: "-0.370", status: "À visiter", priority: "moyenne", address: "Caen", leadType: "CM" },
];

try {
  const result = await db.insert(leads).values(testLeads);
  console.log("Inserted test leads:", testLeads.length);
  await pool.end();
  process.exit(0);
} catch (e) {
  console.error("Error:", e.message);
  await pool.end();
  process.exit(1);
}
