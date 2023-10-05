import Checkbox from './Checkbox'
import { ISoftware } from '@/interface/software'
import Pagination from '@mui/material/Pagination'
import React, { useState, FC } from 'react'

interface Props {
  software: ISoftware[]
  category: string | undefined
}

export const CheckboxGroup: FC<Props> = ({ software, category }) => {
  const pageSize = 6
  const totalProducts = software?.length
  const totalPages = Math.ceil(totalProducts / pageSize)

  const [currentPage, setCurrentPage] = useState<number>(1)

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page)
  }

  // Add a check to ensure that 'software' is defined before filtering
  const displayedProducts: ISoftware[] = software?.slice(0) || []
  const filterProducts = displayedProducts.filter(
    (softwareItem) => softwareItem.productName === category
  )

  const displayFilterProducts: ISoftware[] =
    category === undefined ? displayedProducts : filterProducts

  return (
    <div>
      <div className='h-[70vh] w-[100%] md:gap-4 xl:grid 2 xl:grid-cols-3  2xl:grid-rows-2   rounded-xl text-center text-dark flex flex-row flex-wrap justify-center items-center pt-8'>
        {displayFilterProducts.map((product, index) => (
          <Checkbox
            key={product.id}
            position={index}
            description={product.description}
            value={product.id}
            label={''}
            price={product.price}
            isChecked={false} // You may need to set this based on your logic
            onChange={() => {}} // You may need to handle onChange based on your logic
          />
        ))}
      </div>
    </div>
  )
}
