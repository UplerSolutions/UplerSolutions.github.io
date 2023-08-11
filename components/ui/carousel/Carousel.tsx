// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Mousewheel, Keyboard } from 'swiper/modules'
import { Card } from '@/components/ui/card/Card'
import Link from 'next/link'
// Import Swiper styles
import 'swiper/css'

export const Carousel = () => {
  return (
    <div>
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
  )
}
