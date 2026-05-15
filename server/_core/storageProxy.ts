import type { Express } from "express";

/**
 * Storage proxy — désactivé (migré hors de Manus).
 * Remplacer par AWS S3, Cloudflare R2, ou tout autre service de stockage.
 */
export function registerStorageProxy(_app: Express) {
  // Aucune configuration de stockage — à implémenter si nécessaire
}
