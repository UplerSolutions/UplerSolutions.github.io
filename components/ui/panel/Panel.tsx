import { BiUser } from 'react-icons/bi'
import React, { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
export const Panel = () => {
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
      <div className='text-neutral-600 flex flex-col gap-5'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-center'>
          Welcome to your dashboard
        </h1>
        <div className='flex items-center justify-center gap-1 md:text-lg text-center'>
          <div className='flex items-center'>
            <p className=' flex  font-lato text-center text-xl md:text-2xl lg:text-3xl'>
              {session.user.name}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
