import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  session: {
    jwt: true
  },
  callbacks: {
    async signIn(user, account, profile) {
      // Almacena información adicional en la sesión del usuario
      user.email = profile.email
      return true
    },
    async session(session, user) {
      // Almacena información adicional en la sesión del usuario
      session.user.email = user.email || null
      return session
    },
    async jwt(token, user) {
      // Almacena información adicional en el token JWT
      if (user) {
        token.email = user.email || null
      }
      return token
    }
  }
})
