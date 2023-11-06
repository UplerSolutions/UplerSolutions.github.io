import React, { useState, FC } from 'react'
import Pagination from '@mui/material/Pagination'
import { ISoftware } from '@/interface/software'
import CardSoftware from '@/components/ui/cardsoftware/CardSoftware'

interface Props {
  software: ISoftware[]
}
export const Explore: FC<Props> = ({ software }) => {
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

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const displayedProducts: ISoftware[] = software?.slice(startIndex, endIndex)


  return (
    <div className='flex flex-col items-center justify-center'>
      <ul className='flex flex-wrap w-full m-auto md:px-4 md:pb-4 md:py-4 lg:py-8 gap-2 md:gap-8 justify-center items-center'>
        {displayedProducts.length > 0 ?
          displayedProducts?.map((product) => (
            <li
              key={product.id}
              className='flex flex-col gap-12 lg:gap-8 w-[45%] xl:w-[30%] md:min-w-[300px] xl:min-w-[350px]'
            >
              <CardSoftware
                id={product.id}
                productName={product.productName}
                lowDescription={product.lowDescription}
                price={product.price}
                created_at={''}
                longDescription={''}
                updated_at={''}
                seller={''}
                directLink={product.directLink}
                imageUrl={product.imageUrl}
                rating={0}
                category={{
                  id: '',
                  categoryName: ''
                }}
              />
            </li>
          ))
          :
            <h3>We Don´t Have Softwares Availible for this Category</h3>
        }
      </ul>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePaginationChange}
        className='pt-10'
      />
    </div>
  )
}
