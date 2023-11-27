import { team } from '@/data/team'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

export const Team = () => {
	return (
		<div className="bg-neutral-50 pt-20">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<div className="mx-auto max-w-3xl text-center">
					<div className="flex w-full text-center text-[32px]  font-bold md:text-3xl xl:text-5xl">
						<p className="w-full pb-5 text-center text-[35px] md:text-3xl xl:text-5xl">
							<span className="text-neutral-600">Meet our</span>
							<span className=" text-primary-color "> team</span>
						</p>
					</div>
					<hr className="m-auto w-[100px] border-2 border-primary-color bg-primary-color" />
					<p className="mt-4 pb-8 text-lg leading-6 text-gray-500">
						A dedicated group passionate about simplifying software
						management. With diverse expertise, we&apos;re committed
						to delivering streamlined solutions for effortless
						software success
					</p>
				</div>
				<div className="mt-8">
					<ul
						role="list"
						className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 lg:flex lg:flex-wrap lg:justify-center lg:gap-24"
					>
						{team.map((person) => (
							<li key={person.name}>
								<div className="space-y-6">
									<Image
										className="mx-auto h-40 w-40 rounded-full lg:h-56 lg:w-56"
										width={100}
										height={100}
										src={person.image}
										alt=""
									/>
									<div className="space-y-2 text-center">
										<div className="space-y-1 text-lg font-medium leading-6">
											<h3 className="text-neutral-700">
												{person.name}
											</h3>
											<p className="text-neutral-500">
												{person.role}
											</p>
										</div>
										<div className="flex items-center justify-center space-y-1 text-lg font-medium leading-6">
											<p>
												<Link
													href={person.linkedin}
													className="text-blue-700"
													target="_blank"
												>
													<FaLinkedin />
												</Link>
											</p>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
