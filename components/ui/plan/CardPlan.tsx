import { FC, useState } from 'react'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'
import { data } from '@/data/plans'
import { Carousel } from '@/components/ui/carousel/Carousel'
import { IPlan } from '@/interface/plan'
import Image from 'next/image'

const ComingSoonMessage = () => {
  return (
    <div className='rounded-3xl absolute top-0 left-0 w-full h-full bg-neutral-700 bg-opacity-80 text-white flex items-center justify-center duration-300 z-[30]'>
      <Image
        src='./comingsoon.png'
        alt='coming soon'
        width={300}
        height={300}
        className='w-full '
      ></Image>
    </div>
  )
}
export const CardPlan = () => {
  const [plans, setPlans] = useState(data)
  const [hoveredPlan, setHoveredPlan] = useState('')

  const handleHover = (planName: string) => {
    setHoveredPlan(planName)
  }

  const handleLeave = () => {
    setHoveredPlan('')
  }

  return (
    <>
      <Carousel />
      <section className='hidden max-w-[100%] w-full md:flex md:flex-col'>
        <div className='2xl:max-w-[75%] w-full max-h-max m-auto px-2 md:py-6 lg:py-8'>
          <h1 className='lg:text-5xl text-3xl font-bold text-center lg:p-8 text-neutral-700'>
            A Bundle for each
            <span className='text-primary-color'> professional </span>
          </h1>
          <ul className='flex flex-wrap gap-5 2xl:gap-14 justify-center items-center pt-10'>
            {plans.map((plan: IPlan) => (
              <li
                key={plan.name}
                className='relative inline-block  transition duration-300  cursor-not-allowed lg:w-[30%]'
                onMouseEnter={() => handleHover(plan.name)}
                onMouseLeave={handleLeave}
              >
                <div className='cursor-not-allowed flex flex-col h-full bg-white text-neutral-700 rounded-3xl pt-8 px-3 border-2 hover:border-2 hover:border-gray-600 w-[100%]'>
                  {hoveredPlan === plan.name && <ComingSoonMessage />}
                  <div className='relative px-6 first-letter:w-full h-full flex flex-col justify-evenly pb-4 text-center items-center'>
                    <div className='pb-4'>
                      <h1 className=' text-4xl font-bold py-4'>{plan.name}</h1>
                      <p>{plan.description}</p>
                    </div>
                    <h2 className='py-8 text-5xl font-bold flex items-center gap-3 text-primary-color'>
                      <span className='text-xl'>$</span>
                      {plan.price}
                      <span className=' text-base text-neutral-600 font-normal'>
                        USD /month
                      </span>
                    </h2>
                    <button className='cursor-not-allowed bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-100 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
                      Acquire the Bundle
                    </button>
                  </div>
                  <div className='px-6 flex flex-col flex-1'>
                    <div>
                      <hr className='mb-6 h-[2px] rounded border-o bg-neutral-400' />
                      <h2 className='text-xl font-semibold'>
                        {plan.name} Bundle Includes
                      </h2>
                      <ul className='pb-6'>
                        {plan.benefits.map((benefits) => (
                          <li
                            key={benefits}
                            className='text-neutral-500 py-3 flex items-center '
                          >
                            <FaCheck className='text-primary-color' />
                            <span className='pl-3'>{benefits}</span>
                          </li>
                        ))}
                      </ul>
                      <hr className=' my-1 mx-1 h-[2px] rounded border-o bg-neutral-400' />
                      <h2 className='text-xl font-semibold'>Benefits</h2>
                    </div>

                    <div className='flex items-center justify-between pb-10 pt-4 lg:w-[30%]'>
                      <Image
                        src='https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2020/02/adobe-logo.jpg?fit=840%2C473&ssl=1'
                        alt={''}
                        width={100}
                        height={70}
                      />
                      <Image
                        src='https://estaticos-cdn.elperiodico.com/clip/ec639019-0fde-42e1-ba01-9598859c2d28_alta-libre-aspect-ratio_default_0.jpg'
                        alt={''}
                        width={100}
                        height={70}
                      />
                      <Image
                        src='https://www.fathym.com/img/Figma2.png'
                        alt={''}
                        width={100}
                        height={70}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
