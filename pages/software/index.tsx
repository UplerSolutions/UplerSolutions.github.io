import type { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import { SearchBar } from '@/components/ui/searchbar'
import { useRouter } from 'next/router'
import { useRecentSearches } from '@/components/hooks/useRecentSearches'
import { RecentSearches } from '@/components/ui/recentsearches'
import { useRef, useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Explore } from '../../components/ui/explore/Explore'

const Startups: NextPage = () => {
  const router = useRouter()
  const { recentSearches, setRecentSearches } = useRecentSearches()
  // track state for showing RecentSearches
  const [open, setOpen] = useState(false)
  const anchorEl = useRef<HTMLDivElement>(null)
  return (
    <Layout title='startups'>
      <section className='flex flex-col justify-center pt-10 pb-20 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
        <div className=' flex justify-center'>
          <Box maxWidth={'sm'} margin='auto'>
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
