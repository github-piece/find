import { createRouter } from './context';
import { stripe } from '../../utils/stripe';
import { z } from 'zod';

export const paymentRouter = createRouter().mutation('plan', {
  input: z.object({
    name: z.string(),
    amount: z.number(),
  }),
  async resolve({ input, ctx }) {
    try {
      const { amount, name } = input;
      let plan = await ctx.prisma.plan.findFirst({
        where: { amount, name },
      });
      let planId = plan?.id;
      if (!planId) {
        const product = await stripe.products.create({ name });
        const plan = await stripe.plans.create({
          product: product.id,
          amount: amount * 100,
          currency: 'usd',
          interval: 'month',
        });
        await ctx.prisma.plan.create({
          data: {
            id: plan.id,
            name,
            amount,
          },
        });
        planId = plan.id;
      }
      return {
        success: true,
        id: planId,
      };
    } catch (err) {
      console.log('ererererer', err);
      return {
        success: false,
      };
    }
  },
});
