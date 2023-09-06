import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    callbacks: {
        async signIn({account, profile}) {
            if (account.provider === "google") {
                return profile.email_verified && ( profile.email.endsWith("@bodytechcorp.com") || profile.email.endsWith("@athleticgym.com.co")) 
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