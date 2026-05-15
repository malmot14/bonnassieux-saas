/**
 * SDK simplifié — auth email/password avec sessions JWT.
 * Le SDK Manus OAuth a été supprimé.
 */
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import { ForbiddenError } from "@shared/_core/errors";
import { parse as parseCookieHeader } from "cookie";
import type { Request } from "express";
import { SignJWT, jwtVerify } from "jose";
import type { User } from "../../drizzle/schema";
import * as db from "../db";
import { ENV } from "./env";

export type SessionPayload = {
  openId: string;
  name: string;
};

const isNonEmptyString = (v: unknown): v is string =>
  typeof v === "string" && v.length > 0;

class SDKServer {
  private getSecret() {
    return new TextEncoder().encode(ENV.cookieSecret);
  }

  async createSessionToken(
    openId: string,
    options: { name?: string; expiresInMs?: number } = {}
  ): Promise<string> {
    const expiresInMs = options.expiresInMs ?? ONE_YEAR_MS;
    const exp = Math.floor((Date.now() + expiresInMs) / 1000);
    return new SignJWT({ openId, name: options.name ?? "" })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setExpirationTime(exp)
      .sign(this.getSecret());
  }

  async verifySession(
    cookie: string | undefined | null
  ): Promise<SessionPayload | null> {
    if (!cookie) return null;
    try {
      const { payload } = await jwtVerify(cookie, this.getSecret(), {
        algorithms: ["HS256"],
      });
      const { openId, name } = payload as Record<string, unknown>;
      if (!isNonEmptyString(openId)) return null;
      return { openId, name: isNonEmptyString(name) ? name : "" };
    } catch {
      return null;
    }
  }

  async authenticateRequest(req: Request): Promise<User> {
    const cookies = parseCookieHeader(req.headers.cookie ?? "");
    const session = await this.verifySession(cookies[COOKIE_NAME]);
    if (!session) throw ForbiddenError("Session invalide");
    const user = await db.getUserByOpenId(session.openId);
    if (!user) throw ForbiddenError("Utilisateur introuvable");
    return user;
  }
}

export const sdk = new SDKServer();
