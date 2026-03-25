import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token }: { token: JWT }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email ?? "unknown",
        },
      });
      if(!dbUser?.isActive) {
        return null;
      }
      token.roles = dbUser?.roles ?? ["unknown"];
      token.id = dbUser?.id ?? "unknown";
      token.isActive = dbUser?.isActive ?? false;
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.roles = token.roles;
        session.user.isActive = token.isActive;
      }
      return session;
    },
  },
};
const handler = NextAuth(authOptions as AuthOptions);
export { handler as GET, handler as POST };
