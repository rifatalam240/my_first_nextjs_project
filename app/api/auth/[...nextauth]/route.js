import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Authentication config
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // চাইলে Email/Password credential provider-ও যোগ করতে পারবেন
  ],
  pages: {
    signIn: "/login", // custom login page
  },
  secret: process.env.NEXTAUTH_SECRET, // must add in .env.local
};

// Next.js App Router handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
