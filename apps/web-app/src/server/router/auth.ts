import { createRouter } from "./context";
import { z } from "zod";
import bcrypt from 'bcrypt'

export const authRouter = createRouter()
  .mutation("register", {
    input: z
      .object({
        email: z.string().email(),
        password: z.string()
      }),
    async resolve({ input, ctx }) {
      try {
        const { email, password } = input
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await ctx.prisma.user.update({
          where: { email },
          data: {
            password: hashPassword
          }        
        })
        return user
      } catch (err) {
        console.log('create password error:', err)
        return null
      }
    }
  })