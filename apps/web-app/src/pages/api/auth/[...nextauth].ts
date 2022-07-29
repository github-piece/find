import NextAuth, { type NextAuthOptions } from "next-auth";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";

// Providers
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: "process.env.GOOGLE_CLIENT_ID",
      clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
    }),
    GitHubProvider({
      clientId: "process.env.GITHUB_CLIENT_ID",
      clientSecret: "process.env.GITHUB_CLIENT_SECRET",
    }),
  ],
};

export default NextAuth(authOptions);
