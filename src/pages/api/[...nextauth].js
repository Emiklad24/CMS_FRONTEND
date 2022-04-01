import NextAuth from "next-auth";
// import { Providers } from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CIENT_ID,
      clientSecret: proccess.env.GOOGLE_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CIENT_ID,
      clientSecret: proccess.env.LINKEDIN_CLIENT_SECRET,
    }),
  ],
});