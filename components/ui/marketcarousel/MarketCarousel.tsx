import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
  Navigation,
  Mousewheel,
  Keyboard,
  Pagination,
  EffectCoverflow
} from 'swiper/modules'
import Link from 'next/link'
import React, { useState, FC, useEffect } from 'react'
import { ISoftware } from '@/interface/software'
import MarketSoftware from '../cardsoftware/MarketSoftware'
import ScrollCarousel from 'scroll-carousel-react'

interface Props {
  software: ISoftware[]
  category: string | undefined
}

export const MarketCarousel: FC<Props> = ({ software, category }) => {
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 600) {
        setItemsPerSlide(1)
      } else if (windowWidth < 1400) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(3)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const spaceBetween = 30 // Espacio entre diapositivas

  const renderSlides = () => {
    const slides = []
    for (let i = 0; i < 1; i++) {
      const displayedProducts: ISoftware[] = software ? software.slice() : []
      const filterProducts = displayedProducts.filter(
        (software) => software.productName === category
      )
      const displayFilterProducts: ISoftware[] = category
        ? filterProducts
        : displayedProducts

      slides.push(
        <ScrollCarousel
          autoplay
          autoplaySpeed={8}
          speed={7}
          onReady={() => console.log('I am ready')}
        >
          <ul className='  '></ul>
          <div className='flex xl:justify-between gap-8 mx-14 '>
            {displayFilterProducts.map((product) => (
              <MarketSoftware
                key={product.id}
                id={product.id}
                productName={product.productName}
                lowDescription={product.lowDescription}
                price={product.price}
                imageUrl={product.imageUrl}
                created_at={''}
                longDescription={''}
                updated_at={''}
                seller={''}
                directLink={''}
                rating={0}
                category={{
                  id: '',
                  categoryName: ''
                }}
              />
            ))}
          </div>
        </ScrollCarousel>
      )
    }
    return slides
  }

  return (
    <section className='flex items-center justify-center w-[100%] '>
      <div className=' max-w-[100%]'>
        <Swiper
          cssMode
          navigation
          mousewheel
          keyboard
          loop={true}
          modules={[Navigation, Mousewheel, Keyboard, EffectCoverflow]}
          className='mySwiper '
          slidesPerView={1}
          spaceBetween={spaceBetween} // Espacio entre diapositivas
        >
          {renderSlides()}
        </Swiper>
      </div>
    </section>
  )
}
export default MarketCarousel
