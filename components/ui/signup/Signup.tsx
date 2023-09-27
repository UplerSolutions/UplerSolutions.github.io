import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSession, signIn, signOut } from 'next-auth/react'

interface FormData {
  name: string
  lastname: string
  username: string
  email: string
  password: string
  city: string
  province: string
  street_address: string
  number_phone: string
}

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // Handle registration submission here
    console.log(data)
  }

  return (
    <div className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] flex justify-center items-center w-full md:h-[100vh] '>
      <div className='flex flex-col w-[90%] rounded-lg md:w-[75%] pb-10 gap-5 justify-center items-center'>
        <div className='w-[100%] text-center content-between text-neutral-700'>
          <h1 className='text-4xl lg:text-5xl my-6 font-semibold'>
            Create an Account
          </h1>
        </div>

        <div className='flex flex-col w-[100%] border-1 rounded-3xl bg-white p-2 text-neutral-600 lg:w-[75%] justify-center items-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col pt-8 pl-10 w-[100%]'
          >
            <label htmlFor='name' className='text-xl py-4 font-semibold'>
              First Name
            </label>
            <input
              {...register('name', {
                required: 'This field is required'
              })}
              type='text'
              placeholder='John'
              name='name'
              className='py-3 px-3 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />

            <label htmlFor='lastname' className='text-xl py-4 font-semibold'>
              Last Name
            </label>
            <input
              {...register('lastname', {
                required: 'This field is required'
              })}
              type='text'
              placeholder='Doe'
              name='lastname'
              className='py-3 px-3 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />

            <label htmlFor='username' className='text-xl py-4 font-semibold'>
              Username
            </label>
            <input
              {...register('username', {
                required: 'This field is required'
              })}
              type='text'
              placeholder='johndoe'
              name='username'
              className='py-3 px-3 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />

            <label htmlFor='email' className='text-xl py-4 font-semibold'>
              Email
            </label>
            <input
              {...register('email', {
                required: 'This field is required'
              })}
              type='text'
              placeholder='johndoe@example.com'
              name='email'
              className='py-3 px-3 border-2 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
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
              className='py-3 px-3 border-2 mb-4 rounded-2xl mr-10 focus:border-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </form>
          <div className='flex flex-col justify-center items-center pb-10'>
            <button
              type='submit'
              className='bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
            >
              Register
            </button>
            <div className='mt-4'>
              <p className=''>
                have an account yet?{'  '}
                <Link
                  href='/login'
                  className='text-primary-color hover:underline'
                >
                  Login here
                </Link>
              </p>
            </div>
            <Link
              href='/'
              className='block text-center text-sm text-gray-500 underline pt-6'
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
