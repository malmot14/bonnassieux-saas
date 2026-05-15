import { describe, it, expect, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock user context
const mockUser = {
  id: 1,
  openId: "test-user",
  email: "test@example.com",
  name: "Test User",
  loginMethod: "manus",
  role: "user" as const,
  createdAt: new Date(),
  updatedAt: new Date(),
  lastSignedIn: new Date(),
};

const mockContext: TrpcContext = {
  user: mockUser,
  req: {
    protocol: "https",
    headers: {},
  } as TrpcContext["req"],
  res: {} as TrpcContext["res"],
};

describe("leads router", () => {
  let caller: ReturnType<typeof appRouter.createCaller>;

  beforeEach(() => {
    caller = appRouter.createCaller(mockContext);
  });

  it("should list leads for authenticated user", async () => {
    // This test will return an empty array if database is not available
    const result = await caller.leads.list();
    expect(Array.isArray(result)).toBe(true);
  });

  it("should reject unauthorized access to leads", async () => {
    const unauthedContext: TrpcContext = {
      user: null,
      req: {} as any,
      res: {} as any,
    };

    const unauthedCaller = appRouter.createCaller(unauthedContext);
    
    try {
      await unauthedCaller.leads.list();
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.code).toBe("UNAUTHORIZED");
    }
  });

  it("should have proper router structure", () => {
    expect(caller.leads).toBeDefined();
    expect(caller.leads.list).toBeDefined();
    expect(caller.leads.get).toBeDefined();
    expect(caller.leads.create).toBeDefined();
    expect(caller.leads.update).toBeDefined();
    expect(caller.leads.delete).toBeDefined();
  });
});
