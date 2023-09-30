import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import GoogleButton from '../googlebutton/GoogleButton'

interface FormData {
  emailOrUsername: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // Handle login submission here
    console.log(data)
  }

  return (
    <div className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] flex justify-center items-center w-full min-h-screen '>
      <div className='flex flex-col w-[90%] rounded-lg md:w-[75%] pb-10 gap-5 justify-center items-center'>
        <div className='w-[100%] text-center content-between text-neutral-600 '>
          <h1 className='text-4xl lg:text-5xl xl:text-  6xl pt-24 pb-6 font-bold md:font-semibold'>
            Log in to your account
          </h1>
        </div>

        <div className='drop-shadow-md flex flex-col w-[100%] border-1 rounded-3xl bg-white p-2 text-neutral-600 lg:w-[75%] justify-center items-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col px-3 pt-8 w-[95%] md:w-full'
          >
            <label
              htmlFor='emailOrUsername'
              className='text-xl py-4 font-semibold'
            >
              Email or Username
            </label>
            <input
              {...register('emailOrUsername', {
                required: 'This field is required'
              })}
              type='text'
              placeholder='johndoe@example.com'
              name='emailOrUsername'
              className='py-3 px-3 border-2 rounded-2xl  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />

            <label htmlFor='password' className='text-xl py-4 font-semibold'>
              Password
            </label>
            <input
              {...register('password', {
                required: 'This field is required'
              })}
              type='password'
              placeholder='Enter your password'
              name='password'
              className='py-3 px-3 border-2 mb-4 rounded-2xl  focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </form>
          <div className='flex flex-col justify-center items-center mt-4 w-full pb-10 gap-4'>
            <div className='flex items-center justify-between pb-6 px-4 md:px-12 w-full'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  {...register('rememberMe')}
                  className='mr-2 text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                />
                Remember Me
              </label>
              <a
                href='/forgot-password'
                className='text-primary-color hover:underline'
              >
                Forgot Password?
              </a>
            </div>

            <button
              type='submit'
              className='bg-primary-color h-12 w-60 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
            >
              Login
            </button>
            <GoogleButton />
            <div className='mt-4'>
              <p className=''>
                Don&apos;t have an account yet?{'  '}
                <Link
                  href='/signup'
                  className='text-primary-color hover:underline'
                >
                  Register here
                </Link>
              </p>
            </div>
            <Link
              href='/'
              className='block text-center text-sm text-gray-500 underline'
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
