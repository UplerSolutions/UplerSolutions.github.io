import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  emailOrUsername: string
  password: string
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
    <div className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] flex justify-center items-center'>
      <div className='flex flex-col w-[90%] rounded-lg md:w-[75%] pb-10 gap-5 justify-center items-center'>
        <div className='w-[100%] text-center mb-0 pb-0 content-between text-neutral-700'>
          <h1 className='text-4xl lg:text-5xl py-10 font-semibold'>
            Log in to your account
          </h1>
        </div>

        <div className='flex flex-col w-[100%] border-1 rounded-3xl bg-white p-2 text-neutral-600 lg:w-[75%] justify-center items-center'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col pt-8 pl-10 w-[100%]'
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
          <div className='flex justify-center items-center'>
            <button
              type='submit'
              className='bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}