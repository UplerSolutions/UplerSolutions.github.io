import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
const GOOGLE_ID = process.env.GOOGLE_ID
const GOOGLE_SECRET = process.env.GOOGLE_SECRET
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET
    })
  ],
  session: {
    strategy: 'jwt'
  }
}
export default NextAuth(authOptions)
