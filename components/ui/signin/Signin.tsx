import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { BiUser } from 'react-icons/bi'
import { FaSignOutAlt } from 'react-icons/fa'

const SigninButton = () => {
	const { data: session, status } = useSession()
	const router = useRouter()
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		if (
			session &&
			'user' in session &&
			session.user &&
			router.pathname === '/login'
		) {
			router.push('/')
		}
	}, [session, router])

	const getUserName = () => {
		if (session && 'name' in session.user) {
			return (session.user as { name: string }).name
		} else if (
			session &&
			session.user &&
			'name' in (session.user as any).user
		) {
			return (session.user as any).user.name
		}
		return ''
	}

	if (
		session &&
		'user' in session &&
		'user' in session.user &&
		session.user.user
	) {
		return (
			<div>
				<div className="md:hidden">
					<div className="absolute flex w-60 items-center justify-center gap-4">
						<p className="flex text-center ">{getUserName()}</p>
						<button
							onClick={() => signOut()}
							className="group relative h-11 rounded-xl border-2 border-primary-color bg-primary-color px-2 font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100 lg:px-6"
						>
							Sign Out
						</button>
					</div>
				</div>
				<div className="relative hidden text-left md:inline-block">
					<div>
						<button
							onClick={handleClick}
							className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-purple-200 px-3 py-2 text-sm font-semibold text-primary-color  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-color hover:text-white ${isOpen ? '' : ''
								}`}
							aria-expanded="true"
							aria-haspopup="true"
						>
							<p className=" flex items-center gap-2 ">
								<BiUser />
								<p className="flex text-center  ">
									{getUserName()}
								</p>
							</p>
							<svg
								className="-mr-1 h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					{isOpen && (
						<div
							className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-purple-200 shadow-lg  ring-1 ring-black ring-opacity-5 hover:rounded-md "
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="menu-button"
						>
							<div className="" role="none">
								{/*    <Link
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
                </Link> */}

								<button
									onClick={() => signOut()}
									className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-purple-200 px-3 py-2 text-sm font-semibold text-primary-color  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-color hover:text-white"
								>
									Sign out <FaSignOutAlt />
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	} else if (session && 'user' in session) {
		return (
			<div>
				<div className="md:hidden">
					<div className="absolute flex w-60 items-center justify-center gap-4">
						<p className=" flex text-primary-color">
							{session.user.name}
						</p>
						<button
							onClick={() => signOut()}
							className="group relative h-11 rounded-xl border-2 border-primary-color bg-primary-color  px-2 font-semibold text-white transition hover:rounded-xl hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100 lg:px-6"
						>
							Sign Out
						</button>
					</div>
				</div>
				<div className="relative hidden text-left md:inline-block">
					<div>
						<button
							onClick={handleClick}
							className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-purple-200 px-3 py-2 text-sm font-semibold text-primary-color  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-color hover:text-white ${isOpen ? '' : ''
								}`}
							aria-expanded="true"
							aria-haspopup="true"
						>
							<p className=" flex items-center gap-2 ">
								<BiUser />
								{session.user.name}
							</p>
							<svg
								className="-mr-1 h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					{isOpen && (
						<div
							className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-purple-200  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="menu-button"
						>
							<div className="" role="none">
								{/* <Link
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
                  */}

								<button
									onClick={() => signOut()}
									className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-primary-color hover:text-white"
								>
									Sign out <FaSignOutAlt />
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	} else {
		return (
			<div className="absolute flex w-60 items-center justify-center gap-4 font-lato text-[16px] md:relative md:flex md:w-auto md:gap-6">
				<Link href="/login">
					<span className="text-primary-color">Log in</span>
				</Link>

				<Link href="/register">
					<button className="group relative h-9 w-24 rounded-xl border-2  border-primary-color bg-primary-color px-2 text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100">
						Sign up
					</button>
				</Link>
			</div>
		)
	}
}

export default SigninButton
