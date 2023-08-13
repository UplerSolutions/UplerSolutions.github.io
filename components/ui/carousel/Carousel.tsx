// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper/modules'
import { Card } from '@/components/ui/card/Card'
import Link from 'next/link'
// Import Swiper styles
import 'swiper/css'

export const Carousel = () => {
  return (
    <div className='bg-[#F2F4F4]'>
      <h1 className='text-neutral-700 text-center font-semibold  text-4xl py-10'>
        Lo más reciente
      </h1>
      <div className='pb-10'>
        <Swiper
          navigation={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          className='mySwiper'
          slidesPerView={1}
          spaceBetween={30}
        >
          <SwiperSlide className='w-4/5'>
            {' '}
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
