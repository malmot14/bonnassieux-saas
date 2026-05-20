import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

export function useAuth(_options?: { redirectOnUnauthenticated?: boolean; redirectPath?: string }) {
  const [, setLocation] = useLocation();
  const { data: user, isLoading } = trpc.auth.me.useQuery(undefined, { retry: false });

  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      setLocation("/login");
    },
  });

  const logout = () => logoutMutation.mutate();

  return {
    user: user ?? null,
    loading: isLoading,
    error: null,
    isAuthenticated: !!user,
    refresh: () => {},
    logout,
  };
}
