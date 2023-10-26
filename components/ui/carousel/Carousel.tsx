// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Mousewheel, Keyboard, Pagination } from 'swiper/modules'
import Link from 'next/link'
// Import Swiper styles
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import { data } from '@/data/plans'
import { IPlan } from '@/interface/plan'

export const Carousel = () => {
  const [plans, setPlans] = useState(data)

  return (
    <section className='max-w-[100%] w-full md:hidden'>
      <div className='max-w-[100%] w-full m-auto py-6 '>
        <h1 className='lg:text-5xl text-3xl font-bold text-center lg:p-8 text-neutral-700'>
          A bundle for each
          <span className='text-[#b06eca]'> professional </span>
        </h1>

        <Swiper
          //style={{
          //'--swiper-pagination-color': '#b06eca',
          //'--swiper-navigation-color': '#b06eca',
          //'--swiper-navigation-position': 'absolute',
          //'--swiper-pagination-bullet-size': '14px'
          //}}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper '
        >
          {plans.map((plan: IPlan) => (
            <SwiperSlide key={plan.name} className='w-full'>
              <ul className=' w-full flex items-center justify-center pt-10'>
                <li key={plan.name} className='w-[80%]'>
                  <div className='border flex flex-col h-full bg-white text-neutral-700 rounded-3xl pt-8 px-1 '>
                    <div className='relative px-2 first-letter:w-full h-full flex flex-col justify-evenly pb-4 text-center items-center'>
                      <div className='pb-4'>
                        <h1 className=' text-4xl font-bold pb-4'>
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
                      <Link href={`/plans/${plan.name}`}>
                        <button className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-100 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
                          Acquire the Bundle
                        </button>
                      </Link>
                    </div>
                    <div className='px-6 flex flex-col flex-1'>
                      <div>
                        <hr className='mx-6 mb-6 h-[2px] rounded border-o bg-neutral-400' />
                        <h2 className='text-xl font-semibold'>
                          {plan.name} Bundle Includes
                        </h2>
                        <ul className='pb-6'>
                          {plan.benefits.map((herramienta) => (
                            <li
                              key={herramienta}
                              className='text-neutral-500 py-3 flex items-center '
                            >
                              <FaCheck className='text-primary-color' />
                              <span className='pl-3'>{herramienta}</span>
                            </li>
                          ))}
                        </ul>
                        <hr className=' my-1 mx-1 h-[2px] rounded border-o bg-neutral-400' />
                        <h2 className='text-xl font-semibold'>Benefits</h2>
                      </div>

                      <div className='flex items-center justify-around pb-10 pt-2 '>
                        <div className=' flex flex-col items-center text-center box-content h-8 w-8 p-4  bg-slate-400'></div>
                        <div className=' flex flex-col items-center text-center box-content h-8 w-8 p-4  bg-slate-400'></div>
                        <div className=' flex flex-col items-center text-center box-content h-8 w-8 p-4  bg-slate-400'></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
