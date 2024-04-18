import { AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET } from "$env/static/private"
import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"
import jwt from "jsonwebtoken"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Google({clientId: AUTH_GOOGLE_ID, clientSecret: AUTH_GOOGLE_SECRET,})
  ],
  callbacks: {
    jwt({token, user}) {
      if (user) {
        token.id = user.id
      }
      return token
    },

    session({session, token}) {
      session.user.id = token.id as string
      return session
    },
  },
  pages: {
    signIn: "/login",
  }
}); 