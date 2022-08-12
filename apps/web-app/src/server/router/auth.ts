import { createRouter } from "./context";
import { z } from "zod";

export const authRouter = createRouter()
  .mutation("hello", {
    input: z
      .object({
        email: z.string().email(),
      }),
    resolve({ input, ctx }) {
      return {
        success: true,
      };
    },
  })
