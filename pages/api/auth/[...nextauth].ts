import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'username', type: 'text' },
				password: { label: 'password', type: 'password' }
			},
			async authorize(credentials, req) {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
					{
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(credentials)
					}
				)
				const user = await res.json()
				// localStorage.setItem("token", user.accessToken)
				if (res.ok && user) {
					return user
				}
				return user
			}
		})
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},
		async session({ session, token }) {
			session.user = token as any
			return session
		}
	},
	pages: {
		signIn: '/login'
	},
	secret: process.env.NEXTAUTH_SECRET
})
