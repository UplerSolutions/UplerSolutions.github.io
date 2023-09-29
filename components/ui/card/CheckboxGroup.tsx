// CheckboxGroup.tsx
import React, { useState } from 'react'
import Checkbox from './Checkbox'
import { ISoftware } from '@/interface/software'



interface CheckboxGroupProps {
  options: ISoftware[] | undefined
  limit: number
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  limit
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleCheckboxChange = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value))
    } else {
      if (selectedOptions.length < limit) {
        setSelectedOptions([...selectedOptions, value])
      }
    }
  }

  return (
    <div className='xl:grid 2 xl:grid-cols-3  2xl:grid-rows-2   rounded-xl text-center text-dark flex flex-row flex-wrap justify-center items-center pt-8'>
      {options?.map((product) => (
        <>
          <Checkbox
            key={product.productName}
            description={product.description}
            value={product.productName}
            label={product.productName}
            price={product.price}
            isChecked={selectedOptions.includes(product.productName)}
            onChange={() => handleCheckboxChange(product.productName)}
          />
        </>
      ))}
    </div>
  )
}
