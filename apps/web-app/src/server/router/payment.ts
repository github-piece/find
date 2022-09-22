import { createRouter } from './context';
import { stripe } from '../../utils/stripe';
import { z } from 'zod';

export const paymentRouter = createRouter()
  .mutation('plan', {
    input: z.object({
      name: z.string(),
      amount: z.number(),
    }),
    async resolve({ input, ctx }) {
      try {
        const { amount, name } = input;
        let currentPlan = await ctx.prisma.plan.findFirst({
          where: { amount, name },
        });
        let planId = currentPlan?.id;
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
        return {
          success: false,
        };
      }
    },
  })
  .mutation('connect', {
    input: z.object({
      id: z.string(),
      plan: z.string(),
      customer: z.string(),
      paymentIntent: z.string(),
    }),
    async resolve({ input, ctx }) {
      try {
        const { id, plan, customer, paymentIntent } = input;
        const user = await ctx.prisma.user.update({
          where: { id },
          data: {
            stripeCustomerId: customer,
          },
        });

        if (!user) {
          return {
            success: false,
            message: 'User does not exist!',
          };
        }

        await ctx.prisma.order.create({
          data: {
            planId: plan,
            userId: id,
            paymentIntent,
          },
        });

        return {
          success: true,
        };
      } catch (err: any) {
        return {
          success: false,
          message: err?.message,
        };
      }
    },
  });
