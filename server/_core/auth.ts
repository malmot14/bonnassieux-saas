/**
 * Routes d'authentification email/password.
 * Remplace l'ancien système OAuth Manus.
 */
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Express, Request, Response } from "express";
import { randomUUID } from "node:crypto";
import { scrypt, randomBytes, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import * as db from "../db";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";
import { ENV } from "./env";

const scryptAsync = promisify(scrypt);

// Hachage sécurisé avec scrypt (built-in Node.js, pas de dépendance externe)
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = await scryptAsync(password, salt, 64) as Buffer;
  return `${salt}:${derivedKey.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string
): Promise<boolean> {
  try {
    const [salt, hash] = stored.split(":");
    const derivedKey = await scryptAsync(password, salt, 64) as Buffer;
    const storedBuf = Buffer.from(hash, "hex");
    return timingSafeEqual(derivedKey, storedBuf);
  } catch {
    return false;
  }
}

export function registerAuthRoutes(app: Express) {
  // POST /api/auth/login
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    const { email, password } = req.body ?? {};
    if (!email || !password) {
      res.status(400).json({ error: "Email et mot de passe requis" });
      return;
    }

    const user = await db.getUserByEmail(email.toLowerCase().trim());
    if (!user || !user.passwordHash) {
      res.status(401).json({ error: "Identifiants incorrects" });
      return;
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: "Identifiants incorrects" });
      return;
    }

    await db.updateLastSignedIn(user.openId);

    const token = await sdk.createSessionToken(user.openId, {
      name: user.name ?? "",
      expiresInMs: ONE_YEAR_MS,
    });

    const cookieOptions = getSessionCookieOptions(req);
    res.cookie(COOKIE_NAME, token, { ...cookieOptions, maxAge: ONE_YEAR_MS });
    res.json({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  });

  // POST /api/auth/register (protégé par ADMIN_PASSWORD si défini)
  app.post("/api/auth/register", async (req: Request, res: Response) => {
    const { email, password, name, adminKey } = req.body ?? {};

    // Si ADMIN_PASSWORD est défini, exiger la clé pour créer un compte
    if (ENV.adminPassword && adminKey !== ENV.adminPassword) {
      res.status(403).json({ error: "Clé admin requise pour créer un compte" });
      return;
    }

    if (!email || !password || !name) {
      res.status(400).json({ error: "Email, mot de passe et nom requis" });
      return;
    }

    const existing = await db.getUserByEmail(email.toLowerCase().trim());
    if (existing) {
      res.status(409).json({ error: "Cet email est déjà utilisé" });
      return;
    }

    const passwordHash = await hashPassword(password);
    const openId = randomUUID();

    await db.createUser({
      openId,
      name,
      email: email.toLowerCase().trim(),
      passwordHash,
      loginMethod: "email",
      role: "user",
    });

    const user = await db.getUserByEmail(email.toLowerCase().trim());
    if (!user) {
      res.status(500).json({ error: "Erreur lors de la création du compte" });
      return;
    }

    const token = await sdk.createSessionToken(user.openId, {
      name: user.name ?? "",
      expiresInMs: ONE_YEAR_MS,
    });

    const cookieOptions = getSessionCookieOptions(req);
    res.cookie(COOKIE_NAME, token, { ...cookieOptions, maxAge: ONE_YEAR_MS });
    res.json({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  });
}

// Seed : crée le compte admin au 1er démarrage si ADMIN_EMAIL + ADMIN_PASSWORD définis
export async function seedAdminIfNeeded() {
  if (!ENV.adminEmail || !ENV.adminPassword) return;
  const existing = await db.getUserByEmail(ENV.adminEmail);
  if (existing) return;

  const passwordHash = await hashPassword(ENV.adminPassword);
  await db.createUser({
    openId: randomUUID(),
    name: "Admin Bonnassieux",
    email: ENV.adminEmail,
    passwordHash,
    loginMethod: "email",
    role: "admin",
  });
  console.log(`[Auth] Compte admin créé : ${ENV.adminEmail}`);
}
