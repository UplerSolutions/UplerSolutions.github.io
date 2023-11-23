import { IResponseLogin } from '../../interface/login'

export const postLogin = async (data: any) => {
	const res = await fetch(
		'https://uplerbackend-production.up.railway.app/api/login',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}
	)

	return await res.json()
}
