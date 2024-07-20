import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const option = {
  providers: [
    GitHubProvider({
      //add roles
      profile(profile) {
        console.log("profile GitHub: ", profile);

        let userRole = "Github User";
        if (profile?.email == "gshort@shortfam.com") {
          userRole = "admin";

          return {
            ...profile,
            role: userRole,
          };
        }
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
    GoogleProvider({
      //add roles
      profile(profile) {
        console.log("profile Google: ", profile);

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
