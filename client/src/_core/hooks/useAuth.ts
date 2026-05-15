import { useCallback } from "react";

// AUTH BYPASS — à remplacer par la vraie auth quand le .env sera configuré
const DEV_USER = {
  id: 1,
  name: "Admin Bonnassieux",
  email: "admin@bonnassieux.fr",
  role: "admin" as const,
};

export function useAuth(_options?: { redirectOnUnauthenticated?: boolean; redirectPath?: string }) {
  const logout = useCallback(async () => {
    // no-op en mode bypass
  }, []);

  return {
    user: DEV_USER,
    loading: false,
    error: null,
    isAuthenticated: true,
    refresh: () => {},
    logout,
  };
}
