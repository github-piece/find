// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  IS_WAITLIST: z.string().optional(),
  IS_PRODUCTION: z.string().optional()
});
