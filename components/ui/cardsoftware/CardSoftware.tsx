import React, { FC } from 'react'

interface Props {
  image?: string
  productName: string
  price: number
  description: string
}

const CardSoftware: FC<Props> = ({ productName, price, description }) => {
  return (
    <div className='border flex flex-col h-full bg-white text-neutral-950 rounded-xl w-full'>
      <div className='relative p-6 w-full h-[150px] bg-primary-color rounded-xl'>
        {/* Render product image here */}
      </div>
      <div className=''>
        <div className='p-4 flex flex-col flex-1 gap-1'>
          <h2 className='text-2xl'>{productName}</h2>
          <p>${price} price </p>
          <p className='hidden md:flex'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardSoftware
