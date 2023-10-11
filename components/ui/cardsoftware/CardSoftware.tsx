import Link from 'next/link'
import React, { FC } from 'react'
import { useRouter } from 'next/router'

interface Props {
  id: string
  image?: string
  productName: string
  price: number
  description: string
}

const CardSoftware: FC<Props> = ({ productName, price, description, id }) => {
  const router = useRouter()

  const redirect = () => {
    router.push(`software/${id}`)
  }

  return (
    <div
      onClick={redirect}
      className='group/item border flex flex-col h-full bg-white text-neutral-950 rounded-xl w-full'
    >
      <div className='relative p-6 w-full h-[150px] bg-primary-color rounded-xl'>
        {/* Render product image here */}
      </div>
      <div className=''>
        <div className='p-4 flex flex-col flex-1 gap-1 group/item'>
          <h2 className='text-2xl'>{productName}</h2>
          <p className='hidden md:flex'>{description}</p>
          <p className='text-primary-color font-bold text-[18px]'>${price}</p>
        </div>
      </div>
      <div className='group/item h-[40px] '>
        <Link
          className='group/edit invisible group-hover/item:visible '
          href='/software'
        >
          <span className=' flex items-center justify-center text-neutral-600 font-semibold bg-purple-100 h-[40px] rounded-md'>
            VIEW MORE
          </span>
          <svg className='group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...'></svg>
        </Link>
      </div>
    </div>
  )
}

export default CardSoftware
