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

const CardSoftware: FC<Props> = ({
  productName,
  price,
  lowDescription,
  imageUrl,
  id
}) => {
  const router = useRouter()

  const redirect = () => {
    router.push(`software/${id}`)
  }

  return (
    <div
      onClick={redirect}
      className='group/item border flex flex-col h-full bg-white text-neutral-950 rounded-xl w-full cursor-pointer'
    >
      <div className='relative p-6 w-full h-[150px] bg-primary-color rounded-xl'>
        <img src={imageUrl} alt='' className='w-20' />
      </div>
      <div className=''>
        <div className='p-4 flex flex-col flex-1 gap-1 group/item'>
          <h2 className='text-2xl'>{productName}</h2>
          <p className='hidden md:flex'>{lowDescription}</p>
          <p className='text-primary-color font-bold text-[18px]'>${price}</p>
        </div>
      </div>
      <div className='group/item h-[40px]'>
        <div
          className='group/edit invisible group-hover/item:visible '
          onClick={redirect}
        >
          <span className=' flex items-center justify-center text-neutral-600 font-semibold bg-purple-100 h-[40px] rounded-md'>
            VIEW MORE
          </span>
          <svg className='group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...'></svg>
        </div>
      </div>
    </div>
  )
}

export default CardSoftware
