import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/auth?response_type=code&prompt=consent&access_type=offline",
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirect URL:", url);
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
};
export const getAuthSession = () => getServerSession(authOptions);
