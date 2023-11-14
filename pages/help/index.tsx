import { Layout } from '@/components/layout/Layout'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SearchBar } from '../../components/ui/searchbar/SearchBar'
import { Licenses, Partners } from '../../data/help'
import { Box, Typography } from '@mui/material'
import { RecentSearches } from '@/components/ui/recentsearches'
import { useRouter } from 'next/router'
import { useRecentSearches } from '@/hooks/useRecentSearches'
import { useRef, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaBusinessTime } from 'react-icons/fa'
import { TbLicense } from 'react-icons/tb'

const Help: NextPage = () => {
  const router = useRouter()
  const { recentSearches, setRecentSearches } = useRecentSearches()
  const [open, setOpen] = useState(false)
  const anchorEl = useRef<HTMLDivElement>(null)
  return (
    <div className='w-full'>
      <nav className='px-4 mb-10 flex flex-col items-center justify-between  w-full  bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] fixed z-50 h-[80px]'>
        <div className='flex z-10 w-full items-center justify-between font-mono text-sm pt-4 pb-4 lg:w-[70%] text-neutral-600'>
          <Link className='' href='/'>
            <Image
              className=' w-[150px] md:w-40 min-w-full'
              src='/uplerlogo.png'
              alt='global Logo'
              width={100}
              height={100}
            />
          </Link>
          <div className='text-lg w-auto flex gap-9 font-lato font-medium'>
            <Link className=' group relative inline-block ' href='/'>
              Home
              <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
            </Link>
          </div>
        </div>
      </nav>
      <div className='bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] h-[350px] pt-48'>
        <Box maxWidth={'sm'} margin='auto' className='w-[82%] xl:w-[100%]'>
          <Typography textAlign='center' my={2}></Typography>
          <Box className='flex flex-col gap-2' ref={anchorEl}>
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
        </Box>
      </div>
      <div className='bg-purple-50  w-full items-center flex flex-col gap-4 pt-10 pb-24 h-full md:h-[70vh]'>
        <div className=' md:grid-cols-3 md:grid grid-cols-1 grid text-center w-[90%] xl:w-[70%] gap-6'>
          <Link href='/help/GeneralInfo'>
            <div className='bg-purple-100 rounded-md transition cursor-pointer p-4 hover:scale-[1.02] h-[300px] grid grid-rows-2 align-center justify-items-center xl:m-6 lg:p-8 items-end'>
              <div>
                <AiOutlineInfoCircle className='text-7xl text-primary-color' />
              </div>
              <div className='flex flex-col gap-3 md:gap-1 items-center'>
                <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                  1. General Info
                </h4>
                <p className='text-neutral-600 w-[90%]'>
                  Find out how to contact us, partner with us, and abide by our
                  TOS.
                </p>
              </div>
            </div>
          </Link>

          <Link href='/help/Partners'>
            <div className='bg-purple-100 rounded-md transition cursor-pointer p-4 hover:scale-[1.02] h-[300px] grid grid-rows-2 align-center justify-items-center xl:m-6 lg:p-8 items-end'>
              <div>
                <FaBusinessTime className='text-7xl text-primary-color' />
              </div>
              <div className='flex flex-col gap-3 md:gap-1 items-center'>
                <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                  2. Partners
                </h4>
                <p className='text-neutral-600 w-[90%]'>
                  Find out all about being an AppSumo partner here!
                </p>
              </div>
            </div>
          </Link>

          <Link href='/help/Licenses'>
            <div className='bg-purple-100 rounded-md transition cursor-pointer p-4 hover:scale-[1.02] h-[300px] grid grid-rows-2 align-center justify-items-center xl:m-6 lg:p-8 items-end'>
              <div>
                <TbLicense className='text-7xl text-primary-color' />
              </div>
              <div className='flex flex-col gap-3 md:gap-1 items-center'>
                <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                  3. Licenses
                </h4>
                <p className='text-neutral-600 w-[90%]'>
                  A new alternative to code-based products!
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Help
