import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { BiChevronDown, BiUser } from 'react-icons/bi'
import { FaSignOutAlt } from 'react-icons/fa'

const SigninButton = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    // Redirect to '/' if the user is signed in and on a different page
    if (session && session.user && router.pathname === '/login') {
      router.push('/')
    }
  }, [session, router])

  if (session && session.user.user) {
    return (
      <div>
        <div className='md:hidden'>
          <div className='flex gap-4 absolute justify-center items-center w-60'>
            <p className=' flex text-primary-color'>
              {session.user.user.username}
            </p>
            <button
              onClick={() => signOut()}
              className='group relative px-2 lg:px-6 bg-primary-color h-11 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 border-2 border-primary-color hover:border-2 hover:border-primary-color'
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className='relative text-left hidden md:inline-block'>
          <div>
            <button
              onClick={handleClick}
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md hover:text-white bg-purple-200 px-3 py-2 text-sm font-semibold  text-primary-color shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-color ${
                isOpen ? '' : '' // we can add styles when is open
              }`}
              aria-expanded='true'
              aria-haspopup='true'
            >
              <p className=' flex items-center gap-2 '>
                <BiUser />
                {session.user.user.username}
              </p>
              <svg
                className='-mr-1 h-5 w-5 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-purple-200  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-button'
            >
              <div className='' role='none'>
                <Link
                  href='/dashboard'
                  className='hover:text-white text-gray-700 block px-4 py-2 text-sm hover:bg-primary-color '
                  role='menuitem'
                  id='menu-item-0'
                >
                  Account settings
                </Link>
                <Link
                  href='/dashboard'
                  className='hover:text-white text-gray-700 block px-4 py-2 text-sm hover:bg-primary-color'
                  role='menuitem'
                  id='menu-item-1'
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => signOut()}
                  className='hover:text-white text-gray-700 w-full px-4 py-2 text-left text-sm hover:bg-primary-color flex items-center gap-2'
                >
                  Sign out <FaSignOutAlt />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (session && session.user) {
    return (
      <div>
        <div className='md:hidden'>
          <div className='flex gap-4 absolute justify-center items-center w-60'>
            <p className=' flex text-primary-color'>{session.user.name}</p>
            <button
              onClick={() => signOut()}
              className='group relative px-2 lg:px-6 bg-primary-color h-11 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 border-2 border-primary-color hover:border-2 hover:border-primary-color'
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className='relative text-left hidden md:inline-block'>
          <div>
            <button
              onClick={handleClick}
              className={`inline-flex w-full justify-center gap-x-1.5 rounded-md hover:text-white bg-purple-200 px-3 py-2 text-sm font-semibold  text-primary-color shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-color ${
                isOpen ? '' : '' // we can add styles when is open
              }`}
              aria-expanded='true'
              aria-haspopup='true'
            >
              <p className=' flex items-center gap-2 '>
                <BiUser />
                {session.user.name}
              </p>
              <svg
                className='-mr-1 h-5 w-5 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-purple-200  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-button'
            >
              <div className='' role='none'>
                <Link
                  href='/dashboard'
                  className='hover:text-white text-gray-700 block px-4 py-2 text-sm hover:bg-primary-color '
                  role='menuitem'
                  id='menu-item-0'
                >
                  Account settings
                </Link>
                <Link
                  href='/dashboard'
                  className='hover:text-white text-gray-700 block px-4 py-2 text-sm hover:bg-primary-color'
                  role='menuitem'
                  id='menu-item-1'
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => signOut()}
                  className='hover:text-white text-gray-700 w-full px-4 py-2 text-left text-sm hover:bg-primary-color flex items-center gap-2'
                >
                  Sign out <FaSignOutAlt />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className='flex justify-center gap-4 absolute w-60 md:w-auto md:relative md:gap-6 items-center md:flex text-[16px] font-lato'>
      <Link href='/login'>
        <span className='text-primary-color'>Log in</span>
      </Link>

      <Link href='/register'>
        <button className='w-24 border-2 border-primary-color group relative px-2  bg-primary-color h-9 rounded-xl text-white hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
          Sign up
        </button>
      </Link>
    </div>
  )
}

export default SigninButton
