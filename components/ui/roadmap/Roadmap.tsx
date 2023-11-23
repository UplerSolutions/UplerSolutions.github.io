import React from 'react'

export const Roadmap = () => {
	return (
		<div className=' justify-center flex w-full items-center '>
		<div className='bg-gray-50 w-full pt-20 2xl:pt-40 pb-[180px] sm:pb-[120px]  md:pb-[140px]'>
			<div className='position absolute w-full z-10'>
				<img
					src='./sky.png'
					alt=''
					className='hidden md:flex w-full z-10 absolute h-[1200px]'
				/>
			</div>
			<img
				src='./phonesky.png'
				alt=''
				className='md:hidden flex w-full z-10 absolute h-[980px] sm:h-[920px]'
			/>
			<div className='text-[32px] font-bold md:text-3xl  xl:text-5xl flex items-center justify-center text-center md:text-left'>
				<p className='text-[35px] text-center w-[300px] md:w-[100%] md:text-3xl xl:text-5xl z-30'>
					<span className='text-neutral-600 '>Travel trough our</span>

					<span className='text-primary-color '> roadmap</span>
				</p>
			</div>
			<div className='flex w-full justify-center items-center  pt-32'>
				<img src='./ballons.png' alt='' className='z-30 hidden md:flex' />
			</div>
			<div className='flex w-full justify-center items-center'>
				<img
					src='./phoneballons.png'
					alt=''
					className='z-30 md:hidden flex'
				/>
			</div>
		</div>
	</div>
	)
}

export default Roadmap
