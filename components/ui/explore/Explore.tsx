import React, { useState, FC } from 'react'
import Pagination from '@mui/material/Pagination'
import Link from 'next/link'
import Image from "next/image"
import { ISoftware } from '@/interface/software';


interface Props {
  software: ISoftware[]
}


export const Explore: FC<Props> = ({ software }) => {
  const pageSize = 6;
  const totalProducts = software.length;
  const totalPages = Math.ceil(totalProducts / pageSize);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedProducts: ISoftware[] = software.slice(startIndex, endIndex);

  return (
    <div className='flex flex-col items-center justify-center'>
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] grid-rows-2 gap-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full m-auto px-4 py-4 lg:py-8 items-center'>
        {displayedProducts.map(product => (
          <li key={product.ID} className='flex flex-col gap-12 lg:gap-8'>
            <div className='border flex flex-col h-full bg-white text-neutral-950 rounded-xl'>
              <div className='relative p-6 w-full h-[150px] bg-primary-color rounded-xl'>
                {/* Render product image here */}
              </div>
              <div className=''>
                <div className='p-4 flex flex-col flex-1 gap-1'>
                  <h2 className='text-2xl'>{product.title}</h2>
                  <p>${product.price} price </p>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
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
  );
};
