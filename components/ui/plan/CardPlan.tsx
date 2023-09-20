import { useState } from 'react'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'
import { data } from '../../../pages/api/plans'
import { Carousel } from '../carousel/Carousel'

export const CardPlan = () => {
  const [plans, setPlans] = useState(data.planes)
  const [companias, setCompanias] = useState(data.companias)

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
            {plans.map((plan) => (
              <li
                key={plan.name}
                className=' hover:scale-[1.07] transition duration-300 hover:delay-100 lg:w-[30%]'
              >
                <Link href={`/plans/${plan.name}`}>
                  <div className='border flex flex-col h-full bg-white text-neutral-700 rounded-3xl pt-8 px-3 hover:border-2 hover:border-gray-600 w-[100%]'>
                    <div className='relative px-6 first-letter:w-full h-full flex flex-col justify-evenly pb-4 text-center items-center'>
                      <div className='pb-4'>
                        <h1 className=' text-4xl font-bold py-4'>
                          {plan.name}
                        </h1>
                        <p>{plan.description}</p>
                      </div>
                      <h2 className='py-8 text-5xl font-bold flex items-center gap-3 text-primary-color'>
                        <span className='text-xl'>$</span>
                        {plan.price}
                        <span className=' text-base text-neutral-600 font-normal'>
                          USD /month
                        </span>
                      </h2>
                      <button className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-100 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
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

                      <div className='flex items-center justify-around pb-10 pt-4 '>
                        <div className=' flex flex-col items-center text-center box-content h-8 w-8 p-4  bg-slate-400'></div>
                        <div className=' flex flex-col items-center text-center box-content h-8 w-8 p-4  bg-slate-400'></div>
                        <div className=' flex flex-col items-center text-center box-content h-8 w-8 p-4  bg-slate-400'></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
