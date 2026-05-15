import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import {
  InsertUser, users, leads, InsertLead, interactions, InsertInteraction,
  diagnostics, InsertDiagnostic, appointments, InsertAppointment, Appointment,
  prospectsPotentiels, InsertProspectPotentiel, ProspectPotentiel
} from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }, // Requis pour Supabase
      });
      _db = drizzle(pool);
    } catch (error) {
      console.warn("[Database] Échec de connexion:", error);
      _db = null;
    }
  }
  return _db;
}

// ─── Users ────────────────────────────────────────────────────────────────────

export async function upsertUser(user: Partial<InsertUser> & { openId: string }): Promise<void> {
  const db = await getDb();
  if (!db) { console.warn("[DB] upsertUser: base non disponible"); return; }

  await db.insert(users)
    .values({ ...user, lastSignedIn: user.lastSignedIn ?? new Date() })
    .onConflictDoUpdate({
      target: users.openId,
      set: {
        ...(user.name !== undefined && { name: user.name }),
        ...(user.email !== undefined && { email: user.email }),
        ...(user.loginMethod !== undefined && { loginMethod: user.loginMethod }),
        ...(user.role !== undefined && { role: user.role }),
        lastSignedIn: user.lastSignedIn ?? new Date(),
        updatedAt: new Date(),
      },
    });
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result[0];
}

export async function createUser(user: {
  openId: string; name: string; email: string;
  passwordHash: string; loginMethod: string; role: "user" | "admin";
}) {
  const db = await getDb();
  if (!db) throw new Error("Base de données non disponible");
  await db.insert(users).values({ ...user, lastSignedIn: new Date() });
}

export async function updateLastSignedIn(openId: string) {
  const db = await getDb();
  if (!db) return;
  await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.openId, openId));
}

// ─── Leads ────────────────────────────────────────────────────────────────────

export async function getLeadsByUser(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(leads).where(eq(leads.userId, userId));
}

export async function getLeadById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(leads).where(eq(leads.id, id)).limit(1);
  return result[0];
}

export async function createLead(lead: InsertLead) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  const result = await db.insert(leads).values(lead).returning();
  return result[0];
}

export async function updateLead(id: number, updates: Partial<InsertLead>) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  const result = await db.update(leads).set({ ...updates, updatedAt: new Date() }).where(eq(leads.id, id)).returning();
  return result[0];
}

export async function deleteLead(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  await db.delete(leads).where(eq(leads.id, id));
  return { success: true };
}

// ─── Interactions ─────────────────────────────────────────────────────────────

export async function getInteractionsByLead(leadId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(interactions).where(eq(interactions.leadId, leadId));
}

export async function createInteraction(interaction: InsertInteraction) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  const result = await db.insert(interactions).values(interaction).returning();
  return result[0];
}

export async function deleteInteraction(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  await db.delete(interactions).where(eq(interactions.id, id));
  return { success: true };
}

// ─── Appointments ─────────────────────────────────────────────────────────────

export async function getAppointmentsByLead(leadId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(appointments).where(eq(appointments.leadId, leadId));
}

export async function createAppointment(appt: InsertAppointment) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  const result = await db.insert(appointments).values(appt).returning();
  return result[0];
}

export async function updateAppointment(id: number, updates: Partial<InsertAppointment>) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  const result = await db.update(appointments).set({ ...updates, updatedAt: new Date() }).where(eq(appointments.id, id)).returning();
  return result[0];
}

export async function deleteAppointment(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  await db.delete(appointments).where(eq(appointments.id, id));
  return { success: true };
}

// ─── Prospects Potentiels ─────────────────────────────────────────────────────

export async function getProspectsPotentiels(_userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(prospectsPotentiels);
}

export async function getProspectPotentielById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(prospectsPotentiels).where(eq(prospectsPotentiels.id, id)).limit(1);
  return result[0];
}

export async function createProspectPotentiel(prospect: InsertProspectPotentiel) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  const result = await db.insert(prospectsPotentiels).values(prospect).returning();
  return result[0];
}

export async function updateProspectPotentiel(id: number, updates: Partial<InsertProspectPotentiel>) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  const result = await db.update(prospectsPotentiels).set({ ...updates, updatedAt: new Date() }).where(eq(prospectsPotentiels.id, id)).returning();
  return result[0];
}

export async function deleteProspectPotentiel(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  await db.delete(prospectsPotentiels).where(eq(prospectsPotentiels.id, id));
  return { success: true };
}

export async function bulkInsertProspects(prospects: InsertProspectPotentiel[]) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  await db.insert(prospectsPotentiels).values(prospects);
}

export async function convertProspectToLead(prospectId: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Base non disponible");
  const [prospect] = await db.select().from(prospectsPotentiels).where(eq(prospectsPotentiels.id, prospectId)).limit(1);
  if (!prospect) throw new Error("Prospect introuvable");
  const result = await db.insert(leads).values({
    userId,
    name: prospect.name,
    sector: prospect.sector,
    address: prospect.address ?? undefined,
    phone: prospect.phone ?? undefined,
    email: prospect.email ?? undefined,
    website: prospect.website ?? undefined,
    latitude: prospect.latitude ?? undefined,
    longitude: prospect.longitude ?? undefined,
    status: "À visiter",
    priority: "moyenne",
    leadType: "CM",
  }).returning();
  return result[0];
}
