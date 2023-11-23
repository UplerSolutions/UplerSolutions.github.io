import { getSession } from 'next-auth/react'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{ authenticated: boolean }>
) {
	const session = await getSession({ req })

	if (session) {
		res.status(200).json({ authenticated: true })
	} else {
		res.status(401).json({ authenticated: false })
	}
}
