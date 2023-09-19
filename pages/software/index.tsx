import type { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import { SearchBar } from '@/components/ui/searchbar'
import { useRouter } from 'next/router'
import { useRecentSearches } from '@/hooks/useRecentSearches'
import { RecentSearches } from '@/components/ui/recentsearches'
import { useRef, useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Explore } from '@/components/ui/explore/Explore'

const Startups: NextPage = () => {
  const router = useRouter()
  const { recentSearches, setRecentSearches } = useRecentSearches()
  // track state for showing RecentSearches
  const [open, setOpen] = useState(false)
  const anchorEl = useRef<HTMLDivElement>(null)
  return (
    <Layout title='Upler - Softwares'>
      <section className='flex flex-col justify-center items-center pt-10 pb-20 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
        <div className='flex flex-col gap-8 pb-4 items-center text-center'>
          <h1 className='text-[32px] text-center font-bold md:text-5xl lg:text-6xl text-neutral-700'>
            Softwares
          </h1>
          <p className='text-xl text-neutral-700'>
            Explore our collection and find your solution.
          </p>
        </div>
        <div className='flex gap-5 xl:gap-[240px] py-8'>
          <button className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
            Established Software
          </button>
          <button className='group relative inline-block overflow-hidden rounded-xl border border-fuchsia-100 bg-fuchsia-200 px-2 lg:px-6 py-3 text-sm font-semibold text-primary-color hover:text-primary-color focus:outline-none focus:ring active:bg-primary-color active:text-white'>
            <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
            <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-primary-color transition-all duration-500 group-hover:h-full'></span>
            <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-primary-color transition-all duration-500 group-hover:h-full'></span>
            Startups Softwares
          </button>
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
        <Explore />
      </section>
    </Layout>
  )
}

export default Startups
