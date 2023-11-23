import { Layout } from '@/components/layout/Layout'
import Link from 'next/link'
import type { NextPage } from 'next'
import { Roadmap } from '@/components/ui/roadmap/Roadmap'
import { Team } from '@/components/ui/team/Team'
import Image from 'next/image'
import { IoDiamondOutline } from 'react-icons/io5'
import { PiBinoculars, PiRocketLight } from 'react-icons/pi'

const Aboutus: NextPage = () => {
  return (
    <Layout title={'Upler - About Us'}>
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 pt-24 lg:pt-48 w-full bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] xl:pb-18 2xl:pb-20'>
        <div className='w-[80%] lg:w-[40%] lg:ml-[7%] relative  flex flex-col items-center place-items-center lg:items-start lg:place-items-start  text-neutral-700  pb-7'>
          <div className='text-[32px] font-bold md:text-3xl  xl:text-5xl 2xl:text-6xl flex text-center lg:text-left'>
            <p className='text-[35px] md:text-4xl xl:text-5xl 2xl:text-6xl'>
              <span className=''> Where cutting-edge software meets </span>
              <span className=' text-primary-color '>smart savings</span>
            </p>
          </div>
          <p className='pb-10 pt-8 text-center lg:text-left lg:w-[90%] font-semibold'>
            Your gateway to seamless License Management and Unbeatable Deals
          </p>
          <Link href='/apply' scroll={false} className='scroll-smooth'>
            <button className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
              Register now for free
            </button>
          </Link>
        </div>
        <div className='hidden w-full lg:w-[60%] lg:flex items-center justify-center flex-col relative overflow-hidden pb-10 lg:pr-[7%]'>
          <Image src={'./globo1.png'} alt={''} width={400} height={500} />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-8 py-20  bg-purple-50'>
        <div className='text-[32px] font-bold md:text-3xl  xl:text-5xl flex text-center md:text-left '>
          <p className='text-[35px] md:text-3xl xl:text-5xl'>
            <span className='text-neutral-600'>Explore our</span>
            <span className=' text-primary-color '> services</span>
          </p>
        </div>
        <hr className='bg-primary-color border-2 border-primary-color w-[100px] m-auto left-0 right-0 mb-20' />
        <div className=' md:grid lg:grid-cols-4 grid grid-cols-1 md:grid-cols-2 text-center gap-10 w-[80%]'>
          <div className='flex flex-col gap-8 items-center justify-start'>
            <div className='bg-purple-100 p-12 rounded-xl'>
              <Image src={'./shop.png'} width={95} height={95} alt={''} />
            </div>
            <div className='flex flex-col  md:gap-1 items-center'>
              <h4 className=' text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                Trusted Software Marketplace Deals
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                Explore a vast marketplace featuring rigorously evaluated
                software from trusted partners. Our platform ensures quality
                standards, providing users with a diverse array of solutions.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-8 items-center justify-start'>
            <div className='bg-purple-100 p-8 xl:p-12 rounded-xl'>
              <Image src={'./bundles.png'} width={115} height={115} alt={''} />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className=' text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                Tailored Software Bundles
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                Discover cost-efficient bundles tailored to your needs, offering
                a comprehensive range of software services for you.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-8 items-center justify-start'>
            <div className='bg-purple-100 p-12 rounded-xl'>
              <Image src={'./notebook.png'} width={95} height={95} alt={''} />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className=' text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                Streamlined License Management
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                Upler simplifies and streamlines license management. Enjoy a
                unified platform for tracking, renewing, and managing all
                subscriptions efficiently.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-8 items-center justify-start'>
            <div className='bg-purple-100 p-12 rounded-xl'>
              <Image
                src={'./uplerinsign.png'}
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className=' text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                Exclusive Benefits through Insignia
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                Access exclusive benefits with partners through our Upler
                Insignia system. Enjoy perks and privileges tailored to enhance
                your digital experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-8 md:gap-5 py-20 bg-purple-100 '>
        <div className='text-[32px] font-bold md:text-3xl  xl:text-5xl flex text-center md:text-left '>
          <p className='text-[35px] md:text-3xl xl:text-5xl'>
            <span className='text-neutral-600 '>Know our core</span>

            <span className='text-primary-color '> principles</span>
          </p>
        </div>
        <hr className='bg-primary-color border-2 border-primary-color w-[100px] m-auto left-0 right-0 ' />
        <div className=' md:grid-cols-3 md:grid grid-cols-1 grid text-center w-[90%] xl:w-[70%] gap-6'>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div className='text-primary-color scale-[4.5] pb-4'>
              <PiRocketLight />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className=' text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                Mission
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                Simplify access and ownership of software, empowering
                individuals and businesses with affordable and efficient
                solutions.
              </p>
            </div>
          </div>

          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div className='text-primary-color scale-[4.5] pb-4'>
              <PiBinoculars />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                Vision
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                To be the leading platform for the management and distribution
                of software tools, revolutionizing how it is accessed and used
                globally.
              </p>
            </div>
          </div>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div className='text-primary-color scale-[4.5] pb-4'>
              <IoDiamondOutline />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                Values
              </h4>
              <p className='text-neutral-600 w-[90%]'>
                Transparency, commitment to quality, collaboration, strategic
                partnerships, customer care and empowerment, affordability and
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </Layout>
  )
}

export default Aboutus
