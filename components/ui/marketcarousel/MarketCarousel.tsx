import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Mousewheel, Keyboard, Pagination } from 'swiper/modules'
import Link from 'next/link'
import React, { useState, FC } from 'react'
import CardSoftware from '@/components/ui/cardsoftware/CardSoftware'
import { ISoftware } from '@/interface/software'

interface Props {
  software: ISoftware[]
  category: string | undefined
}

export const MarketCarousel: FC<Props> = ({ software, category }) => {
  const itemsPerSlide = 3 // Cantidad de elementos por diapositiva
  const totalProducts = software ? software.length : 0
  const totalSlides = Math.ceil(totalProducts / itemsPerSlide)

  const renderSlides = () => {
    const slides = []
    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * itemsPerSlide
      const endIndex = Math.min(startIndex + itemsPerSlide, totalProducts)
      const displayedProducts: ISoftware[] = software
        ? software.slice(startIndex, endIndex)
        : []
      const filterProducts = displayedProducts.filter(
        (software) => software.productName === category
      )
      const displayFilterProducts: ISoftware[] = category
        ? filterProducts
        : displayedProducts

      slides.push(
        <SwiperSlide key={i} className=''>
          <ul className='  '></ul>
          <div className='flex justify-between gap-8 mx-14'>
            {displayFilterProducts.map((product) => (
              <CardSoftware
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
        </SwiperSlide>
      )
    }
    return slides
  }

  return (
    <section className='flex items-center justify-center w-[100%] '>
      <div className=' max-w-[100%] '>
        <Swiper
          cssMode
          navigation
          mousewheel
          keyboard
          modules={[Navigation, Mousewheel, Keyboard]}
          className='mySwiper '
          slidesPerView={1}
          spaceBetween={30} // Espacio entre diapositivas
        >
          {renderSlides()}
        </Swiper>
      </div>
    </section>
  )
}
