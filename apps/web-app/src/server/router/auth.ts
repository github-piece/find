import { createRouter } from './context';
import { z } from 'zod';

export const authRouter = createRouter()
  .mutation('isWaitlist', {
    input: z.object({
      email: z.string().email(),
    }),
    async resolve({ input, ctx }) {
      const { email } = input;
      const user = await ctx.prisma.waitlist.findFirst({ where: { email } });
      return !!(user && user.allowRedeem);
    },
  })
  .mutation('waitlist', {
    input: z.object({
      email: z.string().email(),
    }),
    async resolve({ input, ctx }) {
      const { email } = input;
      await ctx.prisma.waitlist.upsert({
        where: {
          email,
        },
        update: {
          email,
        },
        create: {
          email,
        },
      });
      return {
        success: true,
      };
    },
  });
