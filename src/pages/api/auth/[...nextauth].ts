import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authOptions = {
    // Configure one or more authentication providers

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ? process.env.GITHUB_CLIENT_ID : "undefined",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ? process.env.GITHUB_CLIENT_SECRET : "undefined",
            authorization: "read:user"

        }),

        // ...add more providers here
    ],
}

export default NextAuth(authOptions)