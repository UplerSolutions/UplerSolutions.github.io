import React, { useState, FC } from 'react'
import Pagination from '@mui/material/Pagination'
import Link from 'next/link'
import Image from "next/image"
import { ISoftware } from '@/interface/software';
// import {software} from "@/data/software"
import { useRouter } from 'next/router'
import CardSoftware from '../cardsoftware/CardSoftware';


interface Props {
  software: ISoftware[]
  category: string | undefined
}
export const Explore: FC<Props> = ({ software, category }) => {

  // const router = useRouter();

  // const redirect = (id : string) =>{
  //     router.push(`software/${id}`)
  // };

  const pageSize = 6;
  const totalProducts = software?.length;
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
  const displayedProducts: ISoftware[] = software?.slice(startIndex, endIndex);
  const filterProducts = displayedProducts.filter(software => (software.productName === category))
  const displayFilterProducts: ISoftware[] = category === undefined ? displayedProducts : filterProducts;


  return (
    <div className='flex flex-col items-center justify-center'>
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] grid-rows-2 gap-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full m-auto px-4 py-4 lg:py-8 items-center'>
        {displayedProducts?.map(product => (
          <li key={product.id} className='flex flex-col gap-12 lg:gap-8'>
            <CardSoftware
              productName={product.productName} 
              description={product.description} 
              price={product.price} />
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
