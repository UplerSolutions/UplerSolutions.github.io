import Link from 'next/link'
import { CustomButton } from '@/components/ui/custombutton'
import React, { FC } from 'react'

interface Props {
  title: string | undefined | string[]
}

export const Card: FC<Props> = ({ title }) => {
  return (
    <div className='w-[90%] border rounded-xl flex flex-col-reverse lg:flex-row justify-between lg:items-center bg-white text-neutral-700 lg:w-3/5 lg:h-[450px]'>
      <h1>{title}</h1>
    </div>
  )
}
