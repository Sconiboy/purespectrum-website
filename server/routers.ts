import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
  system: systemRouter,

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

  contact: router({
    submit: publicProcedure
      .input(z.object({
        companyName: z.string().min(1),
        contactName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        businessType: z.string().optional(),
        currentProducts: z.string().optional(),
        estimatedVolume: z.string().optional(),
        state: z.string().optional(),
        inquiryType: z.enum(["wholesale", "white_label", "general"]),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { createContactSubmission } = await import("./db");
        const { notifyOwner } = await import("./_core/notification");
        
        const id = await createContactSubmission(input);
        
        // Notify owner of new submission
        await notifyOwner({
          title: `New ${input.inquiryType} inquiry from ${input.companyName}`,
          content: `Contact: ${input.contactName}\nEmail: ${input.email}\nCompany: ${input.companyName}\nType: ${input.inquiryType}\n\nMessage: ${input.message || "No message provided"}`,
        });
        
        return { success: true, id };
      }),
  }),
});

export type AppRouter = typeof appRouter;
