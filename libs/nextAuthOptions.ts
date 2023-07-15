import type { AuthOptions } from 'next-auth'
import LineProvider from 'next-auth/providers/line'

export const nextAuthOptions: AuthOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
  },
}
