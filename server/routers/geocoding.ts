import { publicProcedure } from "../_core/trpc";
import { z } from "zod";
import { geocodeAddress, geocodeAddresses } from "../geocoding";

export const geocodingRouter = {
  /**
   * Géocoder une adresse unique
   */
  geocodeAddress: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(async ({ input }: any) => {
      const result = await geocodeAddress(input.address);
      return result;
    }),

  /**
   * Géocoder plusieurs adresses
   */
  geocodeAddresses: publicProcedure
    .input(z.object({ addresses: z.array(z.string()) }))
    .query(async ({ input }: any) => {
      const results = await geocodeAddresses(input.addresses);
      return results;
    }),

  /**
   * Enrichir des prospects avec les coordonnées GPS
   */
  enrichProspectsWithCoordinates: publicProcedure
    .input(
      z.object({
        prospects: z.array(
          z.object({
            id: z.number(),
            name: z.string(),
            address: z.string(),
          })
        ),
      })
    )
    .query(async ({ input }: any) => {
      const enriched = await Promise.all(
        input.prospects.map(async (prospect: any) => {
          const geo = await geocodeAddress(prospect.address);
          return {
            ...prospect,
            latitude: geo?.lat || 0,
            longitude: geo?.lng || 0,
          };
        })
      );
      return enriched;
    }),
};
