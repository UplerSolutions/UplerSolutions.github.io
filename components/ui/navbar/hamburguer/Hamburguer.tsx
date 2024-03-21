import { useState } from 'react'
import Signin from '../../signin/Signin'
import Link from 'next/link'

export const Hamburguer = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="relative lg:hidden">
			{isOpen && (
				<div>
					<nav className="absolute right-[-1rem] top-[-2.2rem] h-screen w-64 bg-pink-50 p-4 md:right-[-4rem]">
						<ul className="flex flex-col items-end gap-6 pt-16 text-right text-lg  font-[600] ">
							<li>
								<Link
									className="flex flex-row items-center  gap-2 text-center hover:text-primary-color "
									href="/software"
								>
									Software
								</Link>
							</li>
							<hr className="h-[2px] w-full bg-primary-color" />
							<li>
								<Link
									className="flex flex-row items-center gap-2 text-center hover:text-primary-color"
									href="/#plans"
								>
									Paquetes
								</Link>
							</li>
							<hr className="h-[2px] w-full bg-primary-color" />
							<li className="">
								<Link
									className="flex items-center gap-2 text-center hover:text-primary-color"
									href="/partners"
								>
									Vender
								</Link>
							</li>
							<hr className="h-[2px] w-full bg-primary-color" />{' '}
							<li className="">
								<Link
									className="flex items-center gap-2 text-center hover:text-primary-color"
									href="/aboutUs"
								>
									Sobre nosotros
								</Link>
							</li>
							<hr className="h-[2px] w-full bg-primary-color" />
							{/*              <li>
                <Link
                  className='flex flex-col text-center items-center gap-2'
                  href='/dashboard'
                >
                  <span className='text-lg'>Dashboard</span>
                </Link>
              </li>
              <hr className='h-[2px] w-full bg-primary-color' /> */}
						</ul>
						<div className="absolute top-[85vh] ">
							<Signin />
						</div>
					</nav>
				</div>
			)}
			<button
				onClick={handleClick}
				className={`flex flex-col items-center justify-center ${
					isOpen ? '' : '' // we can add styles when is open
				}`}
			>
				<span
					className={`block h-0.5 w-6 rounded-sm bg-primary-color 
                    transition-all duration-300 ease-out ${
						isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
					}`}
				></span>
				<span
					className={`my-0.5 block h-0.5 w-6 rounded-sm 
                    bg-primary-color transition-all duration-300 ease-out ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				></span>
				<span
					className={`block h-0.5 w-6 rounded-sm bg-primary-color 
                    transition-all duration-300 ease-out ${
						isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
					}`}
				></span>
			</button>
		</div>
	)
}
