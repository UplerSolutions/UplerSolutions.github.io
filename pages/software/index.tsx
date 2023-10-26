import { useRef, useState, useEffect } from 'react'
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
import { ISoftware } from '@/interface/software'
import { ICategory } from '@/interface/category'
import { getSoftwareByName, getSoftwares } from '@/service/software/software-service'
import { getCategories } from '@/service/categories/categories-service'

interface Props {
  software: ISoftware[]
}

const Softwares: NextPage<Props> = ({ software }) => {
  const router = useRouter()
  const { recentSearches, setRecentSearches } = useRecentSearches()


  const [categories, setCategories] = useState<ICategory[]>([])
  const [open, setOpen] = useState(false)
  const anchorEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCategories()
        setCategories(res)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }
    fetchData()
  }, [])

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
          <Filter categories={categories} />
        </div>
        <div className='w-full flex flex-col justify-center items-center pt-10 pb-20'>
          <Explore software={software} />
        </div>
      </section>
    </Layout>
  )
}

export default Softwares

export const getServerSideProps: GetServerSideProps = async ({ req, res, params, query }) => {

  const { search } : any = query;
  const name : string = typeof search === 'string' ? search : '';
  
  const software = await getSoftwareByName(name);
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: {
      software
    }
  }
}
