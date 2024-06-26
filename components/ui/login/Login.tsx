'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import GoogleButton from '../googlebutton/GoogleButton'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { login } from '@/rules'
import { ErrorMessage } from '@hookform/error-message'

interface FormData {
	username: string
	password: string
}

export const Login = () => {
	const { data: session } = useSession()
	const [errorsApi, setErrorsApi] = useState<string>()
	const router = useRouter()

	useEffect(() => {
		// Redirect to '/' if the user is signed in and on a different page
		if (session && session.user && router.pathname == '/login') {
			router.push('/')
		}
	}, [session, router])

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		resolver: yupResolver(login),
		reValidateMode: 'onChange'
	})

	const onSubmit = async (data: FormData) => {
		console.log(data)
		const { username, password } = data

		// Handle login submission here
		const responseNextAuth = await signIn('credentials', {
			username,
			password,
			redirect: false
		})
		if (!responseNextAuth?.ok) {
			setErrorsApi('Username or password incorrect')
		}
		console.log(responseNextAuth)
	}

	return (
		<div className="bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]">
			<div className=" flex min-h-screen w-full items-center justify-center gap-24">
				<div className="flex w-[90%] flex-col gap-5 rounded-lg pb-10 md:w-[40%]">
					<Link href="./">
						<div className="py-4">
							<Image
								src="/uplerlogo.png"
								alt={''}
								width={200}
								height={50}
							/>
						</div>
					</Link>
					<div className="border-1 flex w-[100%] flex-col items-center justify-center rounded-3xl bg-white p-2 text-neutral-600 drop-shadow-md xl:w-[80%]">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className=" border-1 flex w-[100%] flex-col items-center justify-center rounded-3xl bg-white p-2 text-neutral-600"
						>
							<div className="flex w-[100%] flex-col px-8 pt-8">
								<h2 className="pb-6  text-3xl  md:font-medium">
									Bienvenido !
								</h2>
								<h1 className="pb-6  text-4xl font-bold md:font-semibold">
									Iniciar Sesión
								</h1>
								<label
									htmlFor="username"
									className="py-4 text-xl font-semibold"
								>
									Email or Nombre de Usuario
								</label>
								<input
									{...register('username')}
									type="text"
									placeholder="johndoe@example.com"
									name="username"
									className="rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
								/>
								<p className="text-red-500">
									<ErrorMessage
										errors={errors}
										name="username"
									/>
								</p>
								<label
									htmlFor="password"
									className="py-4 text-xl font-semibold"
								>
									Contraseña
								</label>
								<input
									{...register('password')}
									type="password"
									placeholder="Enter your password"
									name="password"
									className="mb-4 rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
								/>
								<p className="text-red-500">
									<ErrorMessage
										errors={errors}
										name="password"
									/>
								</p>
							</div>
							<div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-8 pb-10">
								{/* <div className='flex items-center justify-between pb-6 w-full gap-2'>
                <label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    {...register('rememberMe')}
                    className='accent-primary-color text-primary-color ml-1 hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  />
                  Remember Me
                </label>
                <a
                  href='/forgot-password'
                  className='text-primary-color hover:underline'
                >
                  Forgot password?
                </a>
              </div> */}

								<button
									type="submit"
									className="h-14 w-full rounded-md bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
								>
									Iniciar Sesión
								</button>
								{errorsApi && (
									<p className="text-red-500">{errorsApi}</p>
								)}
								<h3 className=" text-neutral-400">
									o continuar con
								</h3>
							</div>
						</form>
						<div className="w-[87%]">
							<GoogleButton />
						</div>

						<div className="mt-4">
							<p className="">
								¿No tenés cuenta?{'  '}
								<Link
									href="/register"
									className="text-primary-color hover:underline"
								>
									Registrate
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="hidden md:flex">
					<Image
						src="/globo1.png"
						alt={''}
						width={400}
						height={400}
					/>
				</div>
			</div>
		</div>
	)
}
