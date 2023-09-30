import Link from 'next/link'
import React, { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const SigninButton = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    // Redirect to '/' if the user is signed in and on a different page
    if (session && session.user && router.pathname == '/login') {
      router.push('/')
    }
  }, [session, router])

  if (session && session.user) {
    return (
      <div className='flex gap-4 ml-auto items-center justify-center'>
        <p className='hidden md:flex text-primary-color'>{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className='group relative px-2 lg:px-6 bg-primary-color h-11 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 border-2 border-primary-color hover:border-2 hover:border-primary-color'
        >
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <div className='flex gap-3'>
      <Link href='/login'>
        <button className='group relative inline-block overflow-hidden rounded-xl border border-fuchsia-100 bg-fuchsia-200 px-2 lg:px-6 py-3 text-sm font-semibold text-primary-color hover:text-primary-color focus:outline-none focus:ring active:bg-primary-color active:text-white'>
          <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
          <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-primary-color transition-all duration-500 group-hover:h-full'></span>
          <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
          <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-primary-color transition-all duration-500 group-hover:h-full'></span>
          Login
        </button>
      </Link>

      <Link href='/signup'>
        <button className='group relative px-2 lg:px-6 bg-primary-color h-11 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
          Signup
        </button>
      </Link>
    </div>
  )
}

export default SigninButton
