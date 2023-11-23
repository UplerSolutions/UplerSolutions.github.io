import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Navbar } from '@/components/ui/navbar'
import { Signup } from '@/components/ui/signup'

const Register: NextPage = () => {
	return (
		<main
			title="Upler - Register"
			className="w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] selection:bg-primary-color selection:text-white"
		>
			<Signup />
		</main>
	)
}

export default Register
