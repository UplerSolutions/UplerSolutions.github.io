'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import GoogleButton from '../googlebutton/GoogleButton'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup'
import { singup } from '@/rules'
import { ErrorMessage } from '@hookform/error-message'
import Typography from '@mui/material/Typography'
interface FormData {
	username: string
	email: string
	password: string
	confirmPassword: string
}

export const Signup = () => {
	const { data: session } = useSession()
	const router = useRouter()

	useEffect(() => {
		// Redirect to '/' if the user is signed in and on a different page
		if (session && session.user && router.pathname == '/register') {
			router.push('/')
		}
	}, [session, router])
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		resolver: yupResolver(singup),
		reValidateMode: 'onChange'
	})

	const onSubmit = async (data: FormData) => {
		const { username, password } = data
		const post = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/createUser`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: 'Joaquin',
					lastname: 'Marmol',
					username,
					email: 'joaquinmarmolnecochea@gmail.com',
					password,
					city: 'necochea',
					province: 'buenos aires',
					street_adrees: '87-784',
					number_phone: 659056
				})
			}
		)
		const res = await post.json()
		console.log(res)
		// Handle login submission here

		if (res.status === 200) {
			await signIn('credentials', {
				username,
				password,
				redirect: false
			})
		}
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
							className="flex w-[100%] flex-col px-8 pt-8"
						>
							<h1 className="pb-4  text-3xl  md:font-medium">
								Bienvenido!
							</h1>
							<h1 className="pb-4  text-4xl font-bold md:font-semibold">
								Iniciar Sesión
							</h1>
							<label
								htmlFor="email"
								className="py-4 text-xl font-semibold"
							>
								Email
							</label>
							<input
								{...register('email')}
								type="text"
								placeholder="johndoe@example.com"
								name="email"
								className="rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							/>
							<Typography variant="caption" color="red">
								<ErrorMessage errors={errors} name="email" />
							</Typography>
							<label
								htmlFor="username"
								className="py-4 text-xl font-semibold"
							>
								Nombre de Usuario
							</label>
							<input
								{...register('username')}
								type="text"
								placeholder="johndoe"
								name="username"
								className="rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							/>
							<Typography variant="caption" color="red">
								<ErrorMessage errors={errors} name="username" />
							</Typography>
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
							<Typography variant="caption" color="red">
								<ErrorMessage errors={errors} name="password" />
							</Typography>
							<label
								htmlFor="password"
								className="py-4 text-xl font-semibold"
							>
								Confirmar Contraseña
							</label>
							<input
								{...register('confirmPassword')}
								type="password"
								placeholder="Repeat password"
								name="confirmPassword"
								className="mb-4 rounded-md border-2 px-3 py-3  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							/>
							<Typography variant="caption" color="red">
								<ErrorMessage
									errors={errors}
									name="confirmPassword"
								/>
							</Typography>
							<button
								type="submit"
								className="h-14 w-full rounded-md bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
							>
								Registrarse
							</button>
						</form>
						<div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-8 pb-10">
							{/* <div className='flex items-center justify-between pb-6 w-full gap-2'>
                <label className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    {...register('rememberMe')}
                    className='accent-primary-color text-primary-color ml-1 hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                  />
                  Remember MeF
                </label>
                <a
                  href='/forgot-password'
                  className='text-primary-color hover:underline'
                >
                  Forgot Password?
                </a>
              </div> */}

							<div className=" w-full">
								<h3 className=" py-2 text-center text-neutral-400">
									or continue con
								</h3>
								<div className="w-full">
									<GoogleButton />
								</div>
								<p className=" pt-4 text-center">
									¿Ya tenés una cuenta?{'  '}
									<Link
										href="/login"
										className="text-primary-color hover:underline"
									>
										Iniciar Sesión
									</Link>
								</p>
							</div>
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
