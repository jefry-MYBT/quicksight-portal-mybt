import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    pages: {
        error: '/login'
    },
    callbacks: {
        async signIn({account, profile, callbackUrl}) {
            if (account.provider === "google") {
                return profile.email_verified && ( profile.email.endsWith("@bodytechcorp.com") || profile.email.endsWith("@athleticgym.com.co") || profile.email.endsWith("@fitnessmarket.com.co")) 
            }
        },
    },
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
});