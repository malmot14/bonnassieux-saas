import {
  integer, pgEnum, pgTable, text, timestamp, varchar, boolean, decimal, serial
} from "drizzle-orm/pg-core";

// ─── Enums ────────────────────────────────────────────────────────────────────
export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);
export const leadSectorEnum = pgEnum("lead_sector", ["artisans", "restaurants", "sport/bien-être", "BTP", "autre"]);
export const leadStatusEnum = pgEnum("lead_status", ["À visiter", "En cours", "Signé", "Perdu"]);
export const leadPriorityEnum = pgEnum("lead_priority", ["haute", "moyenne", "basse"]);
export const leadTypeEnum = pgEnum("lead_type", ["CM", "Coaching Mental"]);
export const interactionTypeEnum = pgEnum("interaction_type", ["appel", "visite", "email", "message", "autre"]);
export const interactionOutcomeEnum = pgEnum("interaction_outcome", ["positif", "neutre", "négatif"]);
export const scriptSectorEnum = pgEnum("script_sector", ["artisans", "restaurants", "sport/bien-être", "BTP"]);
export const appointmentStatusEnum = pgEnum("appointment_status", ["planifié", "confirmé", "complété", "annulé"]);
export const prospectStatusEnum = pgEnum("prospect_status", ["nouveau", "contacté", "intéressé", "converti", "ignoré"]);

// ─── Tables ───────────────────────────────────────────────────────────────────
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }).unique(),
  passwordHash: varchar("passwordHash", { length: 255 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: userRoleEnum("role").notNull().default("user"),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).notNull().defaultNow(),
  lastSignedIn: timestamp("lastSignedIn", { withTimezone: true }).notNull().defaultNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  sector: leadSectorEnum("sector").notNull(),
  address: text("address"),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 320 }),
  website: varchar("website", { length: 500 }),
  status: leadStatusEnum("status").notNull().default("À visiter"),
  priority: leadPriorityEnum("priority").notNull().default("moyenne"),
  problemDescription: text("problemDescription"),
  salesPitch: text("salesPitch"),
  leadType: leadTypeEnum("leadType").notNull().default("CM"),
  region: varchar("region", { length: 100 }),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).notNull().defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;

export const interactions = pgTable("interactions", {
  id: serial("id").primaryKey(),
  leadId: integer("leadId").notNull(),
  userId: integer("userId").notNull(),
  type: interactionTypeEnum("type").notNull(),
  notes: text("notes"),
  outcome: interactionOutcomeEnum("outcome"),
  nextAction: varchar("nextAction", { length: 255 }),
  nextActionDate: timestamp("nextActionDate", { withTimezone: true }),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
});

export type Interaction = typeof interactions.$inferSelect;
export type InsertInteraction = typeof interactions.$inferInsert;

export const salesScripts = pgTable("salesScripts", {
  id: serial("id").primaryKey(),
  sector: scriptSectorEnum("sector").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  isDefault: boolean("isDefault").default(false),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).notNull().defaultNow(),
});

export type SalesScript = typeof salesScripts.$inferSelect;
export type InsertSalesScript = typeof salesScripts.$inferInsert;

export const diagnostics = pgTable("diagnostics", {
  id: serial("id").primaryKey(),
  leadId: integer("leadId").notNull(),
  website: varchar("website", { length: 500 }).notNull(),
  seoScore: integer("seoScore"),
  mobileScore: integer("mobileScore"),
  socialMediaScore: integer("socialMediaScore"),
  speedScore: integer("speedScore"),
  diagnosis: text("diagnosis"),
  recommendations: text("recommendations"),
  generatedPitch: text("generatedPitch"),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
});

export type Diagnostic = typeof diagnostics.$inferSelect;
export type InsertDiagnostic = typeof diagnostics.$inferInsert;

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  leadId: integer("leadId").notNull(),
  userId: integer("userId").notNull(),
  assignedToUserId: integer("assignedToUserId"),
  scheduledDate: timestamp("scheduledDate", { withTimezone: true }).notNull(),
  duration: integer("duration").notNull().default(30),
  notes: text("notes"),
  status: appointmentStatusEnum("status").notNull().default("planifié"),
  location: varchar("location", { length: 255 }),
  reminderSent: boolean("reminderSent").default(false),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).notNull().defaultNow(),
});

export type Appointment = typeof appointments.$inferSelect;
export type InsertAppointment = typeof appointments.$inferInsert;

export const messageTemplates = pgTable("messageTemplates", {
  id: serial("id").primaryKey(),
  type: text("type").$type<"email" | "whatsapp">().notNull(),
  sector: text("sector").notNull(),
  subject: varchar("subject", { length: 255 }),
  content: text("content").notNull(),
  isDefault: boolean("isDefault").default(false),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).notNull().defaultNow(),
});

export type MessageTemplate = typeof messageTemplates.$inferSelect;
export type InsertMessageTemplate = typeof messageTemplates.$inferInsert;

export const prospectsPotentiels = pgTable("prospectsPotentiels", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  sector: leadSectorEnum("sector").notNull(),
  address: text("address"),
  city: varchar("city", { length: 100 }).default("Caen"),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 320 }),
  website: varchar("website", { length: 500 }),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  score: integer("score").default(0),
  webVisibilityScore: integer("webVisibilityScore").default(0),
  hasWebsite: boolean("hasWebsite").default(false),
  hasActiveWebsite: boolean("hasActiveWebsite").default(false),
  hasSocialMedia: boolean("hasSocialMedia").default(false),
  reviewCount: integer("reviewCount").default(0),
  rating: decimal("rating", { precision: 3, scale: 1 }),
  websiteType: text("websiteType").$type<"none" | "amateur" | "aggregator" | "pro">().default("none"),
  notes: text("notes"),
  status: prospectStatusEnum("status").notNull().default("nouveau"),
  lastContactDate: timestamp("lastContactDate", { withTimezone: true }),
  createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: true }).notNull().defaultNow(),
});

export type ProspectPotentiel = typeof prospectsPotentiels.$inferSelect;
export type InsertProspectPotentiel = typeof prospectsPotentiels.$inferInsert;
