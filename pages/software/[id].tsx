import { GetServerSideProps, NextPage } from 'next'
import React, { useState } from 'react'
import { ISoftware } from '@/interface/software'
import { Layout } from '@/components/layout/Layout'
import { getSoftware } from '@/service/software/software-service'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '../../components/ui/product/Product'
import ScrollButton from '../../components/ui/scrollbutton/ScrollButton'

interface Props {
	software: ISoftware
}


const Software: NextPage<Props> = ({ software }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	return (
		/*<div>
      {isOpen && (
        <div>
          <div className='flex flex-col justify-between'>
            <nav className=' bg-purple-50 right-0 h-[100vh] md:w-[500px] z-50 px-3 fixed '>
              <div className='text-red pt-8 flex justify-center'>
                <a onClick={handleClick} className='cursor-pointer'>
                  <HiArrowLongRight className=' text-4xl text-black absolute left-6' />
                </a>
                <HiOutlineShoppingCart className=' text-4xl text-primary-color' />{' '}
                <p className=' text-lg text-neutral-600 pl-2'> 1 </p>
              </div>
              <div className='flex pt-10 items-start h-[10vh] '>
                <div className='relative px-5 w-1/5 h-[10vh] bg-primary-color rounded-xl flex justify-center items-center'>
                  <img src={software.imageUrl} alt='' className='w-full' />
                </div>
                <div className='w-full px-6 rounded-md '>
                  <div className='flex flex-col items-start gap-1'>
                    <h2 className='text-xl  text-neutral-600  font-semibold'>
                      {software.productName}
                    </h2>
                    <p className='text-primary-color text-xl  font-semibold flex gap-6 '>
                      ${software.price}
                    </p>
                  </div>
                </div>
                <a onClick={handleClick} className='cursor-pointer'>
                  <MdOutlineCancel className=' text-4xl text-primary-color' />
                </a>
              </div>
              <div className=' pt-16 '>
                <hr className='h-[2px] bg-primary-color' />
              </div>

              <div className='absolute bottom-1 w-full pr-6 flex flex-col gap-2'>
                <p className='text-primary-color text-xl font-semibold flex items-center justify-between pl-2 pr-6 pb-2'>
                  <p>Subtotal </p>
                  <p>${software.price}</p>
                </p>

                <button
                  onClick={handleClick}
                  type='submit'
                  className=' text-lg bg-primary-color h-12 w-full rounded-sm text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
                >
                  Finalize Purchase
                </button>
                <button
                  onClick={handleClick}
                  type='submit'
                  className=' text-lg bg-primary-color h-12 w-full rounded-sm text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
                >
                  Keep Buying
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
      <div
        className={` ${
          isOpen ? 'opacity-30' : '' // we can add styles when is open
        }`}
      >*/
		<Layout title="Upler - Software">
			<div className="flex flex-col items-center justify-center bg-gradient-to-r  from-[#fde9fc] to-[#fffbe0]  pt-28 md:gap-8 lg:flex-row  lg:items-start lg:pb-10 h-[85vh]">
				<div className="mt-9 flex w-[90%] flex-col  rounded-xl text-neutral-950 lg:w-[40%] xl:w-[35%]">
					<div className="relative w-full ">
						<Image
							src={`/${software.imageUrl}`}
							alt="img"
							width={300}
							height={300}
							className="w-full rounded-xl "
						/>
					</div>
					{/* <div>
            <h1 className='text-xl md:text-2xl lg:text-3xl text-neutral-600 py-3 font-semibold'>
              From the founders
            </h1>
            <div className='flex gap-2 items-center'>
              <Image
                src={software.founderImage}
                alt={''}
                width={100}
                height={100}
                className='w-20 h-20 rounded-full'
              ></Image>
              <div>
                <p className='text-neutral-600 font-semibold'>
                  {software.founderName}
                </p>
                <Link
                  className='text-neutral-500'
                  target='_blank'
                  href={software.linkdin}
                >
                  website
                </Link>
              </div>
            </div>
            <div>
              <h2 className='text-neutral-600 pt-6'>
                {software.founderDescription}
              </h2>
            </div>
          </div> */}
				</div>
				<div className="h-auto w-full rounded-md p-6 pb-20 md:w-[95%] lg:w-[40%]">
					<div className="flex flex-1 flex-col gap-1">
						<h2 className="py-3 text-xl font-semibold text-neutral-600 md:text-2xl lg:text-3xl">
							{software.productName}
						</h2>
						<p className="flex items-center gap-6 text-xl font-semibold text-primary-color md:text-2xl lg:text-3xl">
							<Link href={software.directLink} target="_blank">
								<button
									type="submit"
									className=" h-12 w-48 rounded-xl bg-primary-color text-lg font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
								>
									Get Link
								</button>
							</Link>
						</p>
					</div>
					<div className="">
						<h1 className="py-3 text-xl font-semibold text-neutral-600 md:text-2xl lg:text-3xl">
							Description
						</h1>
						<p className=" text-neutral-500">
							{software.longDescription}
						</p>
					</div>
				</div>
			</div>
			<Product {...software} 	 />
			<ScrollButton />
		</Layout>
	)
}

export default Software

export const getServerSideProps: GetServerSideProps = async ({
	res,
	params
}) => {
	const id: string = typeof params?.id === 'string' ? params.id : ''

	const software = await getSoftware(id)

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59'
	)
	return {
		props: {
			software
		}
	}
}
