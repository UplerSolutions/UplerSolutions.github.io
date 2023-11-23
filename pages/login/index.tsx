import type { NextPage } from 'next'
import { Login } from '@/components/ui/login/Login'

const LogIn: NextPage = () => {
	return (
		<main
			title="Upler - Login"
			className="selection:bg-primary-color selection:text-white"
		>
			<Login />
		</main>
	)
}

export default LogIn
