import React from 'react'

export const Roadmap = () => {
	return (
		<div className="bg-purple-100 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-8 text-center text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
					Roadmap
				</h2>

				<div className="flex justify-center">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{roadmapData.map((item, index) => (
							<div
								key={index}
								className="rounded-lg bg-white p-6 shadow-md lg:h-[200px]"
							>
								<h3 className="mb-4 text-xl font-semibold text-gray-800 sm:text-2xl">
									{item.title}
								</h3>
								<ul className="ml-6 list-disc">
									{item.tasks.map((task, taskIndex) => (
										<li
											key={taskIndex}
											className="text-gray-700"
										>
											{task}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const roadmapData = [
	{
		title: 'Q4 2023',
		tasks: ['MVP Development']
	},
	{
		title: 'Q1 2024',
		tasks: [
			'Referral System Integration',
			'Packages & Payment Gateway',
			'Functional Marketplace & User Panel',
			'Upler Referral Program'
		]
	},
	{
		title: 'Q2 2024',
		tasks: ['AI Software Advisory', 'Balance Implementation']
	},
	{
		title: 'Q3 2024',
		tasks: ['Market Expansion']
	},
	{
		title: 'Q4 2024',
		tasks: ['Enhancements & Iterations', 'Partnerships & Collaborations']
	},
	{
		title: 'Q4 2024 - Q4 2025',
		tasks: ['Payment Streaming']
	}
]

export default Roadmap
