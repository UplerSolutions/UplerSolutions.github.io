import Link from 'next/link'
import React, { FC } from 'react'
import { useRouter } from 'next/router'

interface Props {
  id: string
  created_at: string
  productName: string
  lowDescription: string
  longDescription: string
  price: number
  updated_at: string
  seller: string
  directLink: string
  imageUrl: string
  rating: number
  category: {
    id: string
    categoryName: string
  }
}

const MarketSoftware: FC<Props> = ({
  productName,
  price,
  lowDescription,
  imageUrl,
  id,
  directLink
}) => {
  const router = useRouter()

  const redirect = () => {
    router.push(`software/${id}`)
  }

  return (
    <div className='relative w-[30%] h-[370px]'>
      <div className='h-[370px] w-[285px] flex flex-col md:pb-1 max-md:pt-2 p-4 md:text-center bg-white text-neutral-950 rounded-xl cursor-pointer z-30'>
        <div
          onClick={redirect}
          className='group/item flex flex-col justify-between h-full place-content-start'
        >
          <div className='lg:px-0 text-left'>
            <div className=' flex flex-col flex-1 gap-1 group/item'>
              <p className=''>{lowDescription}</p>
            </div>
          </div>
          <div className='relative w-full rounded-xl flex flex-col justify-center'>
            <div className=' text-left'>
              <h2 className='text-xl'>{productName}</h2>
              <p className='text-neutral-600 font-semibold text-[22px] pt-1'>
                ${price}
              </p>
            </div>
            <img
              src={imageUrl}
              alt=''
              className=' md-[200px] flex items-center justify-center md:mt-4'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketSoftware
