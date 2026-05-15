import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { sdk } from "./sdk";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

const DEV_USER = {
  id: 1,
  openId: "dev-bypass",
  name: "Admin Bonnassieux",
  email: "admin@bonnassieux.fr",
  passwordHash: null,
  loginMethod: "dev",
  role: "admin" as const,
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  // AUTH BYPASS — à réactiver quand le .env sera configuré
  return { req: opts.req, res: opts.res, user: DEV_USER as User };
}
