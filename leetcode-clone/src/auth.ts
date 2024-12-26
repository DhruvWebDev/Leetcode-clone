import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma client
const prisma = new PrismaClient();

export const handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // Called during the sign-in process
    async signIn({ user }) {
      try {
        // Check if the user exists in the database
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        // If the user doesn't exist, create a new user
        if (!existingUser) {
          const createdUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image, // Optionally, store the profile image
            },
          });

          // Assign the created user ID to the user object
          user.id = createdUser.id;
        } else {
          // Assign the existing user ID to the user object
          user.id = existingUser.id;
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error("Error in sign-in callback:", error);
        return false; // Reject sign-in on error
      }
    },
    // Called when the session is created or updated
    async session({ session, user }) {
      // Add user ID to session for access throughout the app
      session.user.id = user.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in", // Optional: Custom sign-in page
  },
});
