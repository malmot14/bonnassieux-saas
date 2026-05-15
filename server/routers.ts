import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { getLeadsByUser, getLeadById, createLead, updateLead, deleteLead, getInteractionsByLead, createInteraction, deleteInteraction, getAppointmentsByLead, createAppointment, updateAppointment, deleteAppointment, getProspectsPotentiels, getProspectPotentielById, createProspectPotentiel, updateProspectPotentiel, deleteProspectPotentiel, convertProspectToLead, bulkInsertProspects } from "./db";
import { geocodingRouter } from "./routers/geocoding";

export const appRouter = router({
  system: systemRouter,
  geocoding: router(geocodingRouter),
  
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    list: protectedProcedure.query(({ ctx }) => {
      return getLeadsByUser(ctx.user.id);
    }),
    
    get: protectedProcedure
      .input((val: unknown) => {
        if (typeof val === 'object' && val !== null && 'id' in val && typeof (val as any).id === 'number') {
          return (val as { id: number }).id;
        }
        throw new Error('Invalid input');
      })
      .query(({ input }) => {
        return getLeadById(input);
      }),
    
    create: protectedProcedure
      .input((val: unknown) => val as any)
      .mutation(({ ctx, input }) => {
        return createLead({
          ...input,
          userId: ctx.user.id,
        });
      }),
    
    update: protectedProcedure
      .input((val: unknown) => val as any)
      .mutation(({ input }) => {
        const { id, ...updates } = input;
        return updateLead(id, updates);
      }),
    
    delete: protectedProcedure
      .input((val: unknown) => {
        if (typeof val === 'object' && val !== null && 'id' in val && typeof (val as any).id === 'number') {
          return (val as { id: number }).id;
        }
        throw new Error('Invalid input');
      })
      .mutation(({ input }) => {
        return deleteLead(input);
      }),
  }),

  appointments: router({
    list: protectedProcedure
      .input((val: unknown) => {
        if (typeof val === 'object' && val !== null && 'leadId' in val && typeof (val as any).leadId === 'number') {
          return (val as { leadId: number }).leadId;
        }
        throw new Error('Invalid input');
      })
      .query(({ input }) => {
        return getAppointmentsByLead(input);
      }),
    
    create: protectedProcedure
      .input((val: unknown) => val as any)
      .mutation(({ ctx, input }) => {
        return createAppointment({
          ...input,
          userId: ctx.user.id,
        });
      }),
    
    update: protectedProcedure
      .input((val: unknown) => val as any)
      .mutation(({ input }) => {
        return updateAppointment(input.id, input);
      }),
    
    delete: protectedProcedure
      .input((val: unknown) => {
        if (typeof val === 'object' && val !== null && 'id' in val && typeof (val as any).id === 'number') {
          return (val as { id: number }).id;
        }
        throw new Error('Invalid input');
      })
      .mutation(({ input }) => {
        return deleteAppointment(input);
      }),
  }),

  interactions: router({
    list: protectedProcedure
      .input((val: unknown) => {
        if (typeof val === 'object' && val !== null && 'leadId' in val && typeof (val as any).leadId === 'number') {
          return (val as { leadId: number }).leadId;
        }
        throw new Error('Invalid input');
      })
      .query(({ input }) => {
        return getInteractionsByLead(input);
      }),
    
    create: protectedProcedure
      .input((val: unknown) => val as any)
      .mutation(({ ctx, input }) => {
        return createInteraction({
          ...input,
          userId: ctx.user.id,
        });
      }),
  }),

  prospects: router({
    list: protectedProcedure.query(({ ctx }) => {
      return getProspectsPotentiels(ctx.user.id);
    }),
  }),

  prospectsPotentiels: router({
    list: protectedProcedure.query(({ ctx }) => {
      return getProspectsPotentiels(ctx.user.id);
    }),

    get: protectedProcedure
      .input((val: unknown) => {
        if (typeof val === 'object' && val !== null && 'id' in val && typeof (val as any).id === 'number') {
          return (val as { id: number }).id;
        }
        throw new Error('Invalid input');
      })
      .query(({ input }) => {
        return getProspectPotentielById(input);
      }),

    create: protectedProcedure
      .input((val: unknown) => val as any)
      .mutation(({ input }) => {
        return createProspectPotentiel(input);
      }),

    bulkInsert: protectedProcedure
      .input((val: unknown) => val as any[])
      .mutation(async ({ input }) => {
        if (!Array.isArray(input) || input.length === 0) {
          throw new Error('Invalid input: expected non-empty array');
        }
        await bulkInsertProspects(input);
        return { success: true, count: input.length };
      }),

    update: protectedProcedure
      .input((val: unknown) => val as any)
      .mutation(({ input }) => {
        const { id, ...updates } = input;
        return updateProspectPotentiel(id, updates);
      }),

    delete: protectedProcedure
      .input((val: unknown) => {
        if (typeof val === 'object' && val !== null && 'id' in val && typeof (val as any).id === 'number') {
          return (val as { id: number }).id;
        }
        throw new Error('Invalid input');
      })
      .mutation(({ input }) => {
        return deleteProspectPotentiel(input);
      }),

    convertToLead: protectedProcedure
      .input((val: unknown) => {
        if (typeof val === 'object' && val !== null && 'prospectId' in val && typeof (val as any).prospectId === 'number') {
          return (val as { prospectId: number }).prospectId;
        }
        throw new Error('Invalid input');
      })
      .mutation(({ ctx, input }) => {
        return convertProspectToLead(input, ctx.user.id);
      }),
  }),

});

export type AppRouter = typeof appRouter;
