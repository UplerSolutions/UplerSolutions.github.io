import React, { useState, FC } from 'react'
import Pagination from '@mui/material/Pagination'
import Link from 'next/link'
import Image from 'next/image'
import { ISoftware } from '@/interface/software'
// import {software} from "@/data/software"
import { useRouter } from 'next/router'
import CardSoftware from '@/components/ui/cardsoftware/CardSoftware'

interface Props {
  software: ISoftware[]
  category: string | undefined
}
export const Explore: FC<Props> = ({ software, category }) => {
  // const router = useRouter();

  // const redirect = (id : string) =>{
  //     router.push(`software/${id}`)
  // };

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
  const filterProducts = displayedProducts.filter(
    (software) => software.productName === category
  )
  const displayFilterProducts: ISoftware[] =
    category === undefined ? displayedProducts : filterProducts

  return (
    <div className='flex flex-col items-center justify-center'>
      <ul className='flex flex-wrap w-full m-auto md:px-4 pb-4 md:py-4 lg:py-8 gap-2 md:gap-8 justify-center items-center'>
        {displayedProducts?.map((product) => (
          <li
            key={product.id}
            className='flex flex-col gap-12 lg:gap-8 h-[35vh] w-[45%] xl:w-[30%]'
          >
            <CardSoftware
              productName={product.productName}
              description={product.description}
              price={product.price}
            />
          </li>
        ))}
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
