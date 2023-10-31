import { useRef, useState } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useRecentSearches } from '@/hooks/useRecentSearches'
import { Box, Typography } from '@mui/material'
import { SearchBar } from '@/components/ui/searchbar'
import { RecentSearches } from '@/components/ui/recentsearches'
import { Layout } from '@/components/layout/Layout'
import { Explore } from '@/components/ui/explore/Explore'
import FilterMobile from '@/components/ui/filter/FilterMobile'
import Filter from '@/components/ui/filter/Filter'
import { MarketCarousel } from '@/components/ui/marketcarousel/MarketCarousel'

import { ISoftware } from '@/interface/software'
import { ICategory } from '@/interface/category'
import { getSoftwareByName, getSoftwares, getSoftwaresByRange } from '@/service/software/software-service'
import { getCategories } from '@/service/categories/categories-service'

interface Props {
  software: ISoftware[]
  categories: ICategory[]
}

const Softwares: NextPage<Props> = ({ software, categories }) => {
  const router = useRouter()
  const { recentSearches, setRecentSearches } = useRecentSearches()

  const [categoryFilter, setCategoryFilter] = useState<string[]>([])


  const onClickFilterByCategory = (categoryName: string) => {
    const categoryIndex = categoryFilter.indexOf(categoryName);
    if (categoryIndex !== -1) {
      categoryFilter.splice(categoryIndex, 1);
      setCategoryFilter([...categoryFilter]);
    } else {
      setCategoryFilter([...categoryFilter, categoryName]);
    }
  }

  const [open, setOpen] = useState(false)
  const anchorEl = useRef<HTMLDivElement>(null)


  return (
    <Layout title='Upler - Softwares'>
      <div className='flex flex-col items-center justify-center pt-20  bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
        <div className='flex flex-col gap-8 pb-4 items-center text-center'>
          <h1 className='text-[32px] text-center font-bold md:text-5xl lg:text-6xl text-neutral-700 pt-12'>
            Softwares
          </h1>
          <p className='text-xl text-neutral-700 w-[90%]'>
            Explore our collection and find your solution.
          </p>
        </div>

        <div className=' flex justify-center w-full md:w-[90%] flex-col gap-6'>
          <Box maxWidth={'sm'} margin='auto' className='w-[82%] xl:w-[100%]'>
            <Typography textAlign='center' my={2}></Typography>
            <Box className='flex flex-col gap-6' ref={anchorEl}>
              <SearchBar
                onSubmit={async (searchTerm: string) => {
                  router.push({
                    query: {
                      search: searchTerm
                    }
                  })
                  // also add to push recent searches after every search
                  if (!recentSearches.includes(searchTerm)) {
                    setRecentSearches([searchTerm, ...recentSearches])
                  }
                }}
                inputProps={{
                  onFocus: () => setOpen(true)
                }}
              />
              <RecentSearches
                open={open}
                anchorEl={anchorEl.current}
                onClose={() => {
                  setOpen(false)
                }}
              />
            </Box>
            <div className='pt-6 w-[200] lg:hidden'>
              <FilterMobile categories={categories} />
            </div>
          </Box>
        </div>
      </div>

      <section className='w-full flex  md:pb-20 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
        <div className=' items-start justify-start pl-4 hidden lg:flex pt-20'>
          <Filter onClickFilterByCategory={onClickFilterByCategory} categories={categories} />
        </div>
        <div className='w-full flex flex-col justify-center items-center pt-10 pb-20'>
          <Explore categoryFilter={categoryFilter} software={software} />
        </div>
      </section>
    </Layout>
  )
}

export default Softwares


export const getServerSideProps: GetServerSideProps = async ({ req, res, params, query }) => {

  let software: ISoftware[] = [];
  const { search, low, high }: any = query;
  if (search) {
    const name: string = typeof search === 'string' ? search : '';
    software = await getSoftwareByName(name);
    // } 
    // else if (low && high) {
    //   software = await getSoftwaresByRange(low, high);
  } else {
    software = await getSoftwares();
  };

  const categories = await getCategories()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: { software, categories }
  }
}