// CheckboxGroup.tsx
import React, { useState } from 'react'
import Checkbox from './Checkbox'
import { ISoftware } from '@/interface/software'

interface CheckboxGroupProps {
  options: ISoftware[] | undefined
  limit: number
  selectedOptions : string[]
  onChange: (value: string) => void
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, limit, selectedOptions, onChange }) => {


  return (
    <div className='w-[100%] md:gap-4 xl:grid 2 xl:grid-cols-3  2xl:grid-rows-2   rounded-xl text-center text-dark flex flex-row flex-wrap justify-center items-center pt-8'>
      {options?.map((product, index) => (
          <Checkbox
            key={product.id}
            position={index}
            description={product.description}
            value={product.id}
            label={product.productName}
            price={product.price}
            isChecked={selectedOptions.includes(product.id)}
            onChange={onChange}
          />
      ))}
    </div>
  )
}
