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
  id,
  directLink
}) => {
  const router = useRouter()

  const redirect = () => {
    router.push(`software/${id}`)
  }

  return (
    <div className='z-10 relative h-full w-full'>
      <div className='xl:w-auto lg:h-[auto] 2xl:h-auto 2xl:min-h-[520px] flex grow flex-col justify-between md:pb-1 max-md:pt-2 md:p-4 md:text-center bg-white text-neutral-950 rounded-xl w-full cursor-pointer z-30'>
        <div onClick={redirect} className='group/item w-full'>
          <div className='relative w-full rounded-xl flex items-center justify-center'>
            <img
              src={imageUrl}
              alt=''
              className=' md-[200px] flex items-center justify-center md:mt-4'
            />
          </div>
          <div className='lg:px-0 w-full '>
            <div className=' flex flex-col flex-1 gap-1 group/item items-center justify-center md:justify-start md:items-start'>
              <h2 className='text-2xl'>{productName}</h2>
              <p className='line-clamp-2 md:line-clamp-0 text-center px-2 md:text-left md:px-0'>
                {lowDescription}
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start gap-2 justify-center w-full px-3 md:px-0 pb-8 z-40 pt-2'>
          {' '}
          <p className='text-neutral-600 font-semibold text-[22px] pt-6'>
            ${price}
          </p>
          <Link href={directLink} target='_blank ' className='w-full'>
            <button
              type='submit'
              className=' text-lg bg-primary-color h-12 w-full rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
            >
              Get Link
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardSoftware
