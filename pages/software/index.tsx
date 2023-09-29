import type { NextPage, GetStaticProps, GetServerSideProps } from 'next'
import { Box, Typography } from '@mui/material'
import { SearchBar } from '@/components/ui/searchbar'
import { useRouter } from 'next/router'
import { useRecentSearches } from '@/hooks/useRecentSearches'
import { RecentSearches } from '@/components/ui/recentsearches'
import { useRef, useState, useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Explore } from '@/components/ui/explore/Explore'
import { getSoftwares } from '@/service/software/software-service'
import { ISoftware } from '@/interface/software'
import { ICategory } from '@/interface/category'
import { getCategories } from '@/service/categories/categories-service'

interface Props {
  software: ISoftware[]
}

const Softwares: NextPage<Props> = ({ software }) => {
  const router = useRouter()
  const { recentSearches, setRecentSearches } = useRecentSearches()
  const [categories, setCategories] = useState<ICategory[]>()
  const [categoryFilter, setCategoryFilter] = useState<string>()
  const [open, setOpen] = useState(false)
  const anchorEl = useRef<HTMLDivElement>(null)


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getCategories();
        setCategories(res);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchData();
  }, []);

  const onClickFilterByCategory = (categoryName: string) => {
    setCategoryFilter(categoryName)
  }

  console.log(categoryFilter)


  return (
    <Layout title='Upler - Softwares'>
      <section className='flex flex-col justify-center items-center pt-10 pb-20 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
        <div className='flex flex-col gap-8 pb-4 items-center text-center'>
          <h1 className='text-[32px] text-center font-bold md:text-5xl lg:text-6xl text-neutral-700 pt-24'>
            Softwares
          </h1>
          <p className='text-xl text-neutral-700'>
            Explore our collection and find your solution.
          </p>|
        </div>
        <div className='flex gap-5 xl:gap-[240px] py-8'>
          {
            categories?.map((category) => (
              <button
                onClick={() => onClickFilterByCategory(category?.categoryName)}
                key={category?.id}
                className='group relative inline-block overflow-hidden rounded-xl border border-fuchsia-100 bg-fuchsia-200 px-2 lg:px-6 py-3 text-sm font-semibold text-primary-color hover:text-primary-color focus:outline-none focus:ring active:bg-primary-color active:text-white'
              >
                {category?.categoryName}
              </button>
            ))
          }
        </div>

        <div className=' flex justify-center w-full'>
          <Box maxWidth={'sm'} margin='auto' className=' xl:w-[100%]'>
            <Typography textAlign='center' my={2}></Typography>
            <Box ref={anchorEl}>
              <SearchBar
                onSubmit={(searchTerm: string) => {
                  // when the user submits the form, we only modify the router query parameters
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
          </Box>
        </div>
        <Explore category={categoryFilter} software={software} />
      </section>
    </Layout>
  )
}

export default Softwares

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const software = await getSoftwares()
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
