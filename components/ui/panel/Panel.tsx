import { BiUser } from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { PiHandCoinsDuotone } from 'react-icons/pi'
import { MdOutlineDashboard } from 'react-icons/md'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { LuSettings } from 'react-icons/lu'
import { AiOutlineLaptop } from 'react-icons/ai'
import Pagination from '@mui/material/Pagination'

export const Panel = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const pageSize = 5
  const totalPages = Math.ceil(pageSize)

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
  useEffect(() => {
    // Redirect to '/' if the user is signed in and on a different page
    if (session && session.user && router.pathname == '/login') {
      router.push('/')
    }
  }, [session, router])

  if (session && session.user) {
    return (
      <div className='text-neutral-600 flex xl:gap-5 w-full  justify-center pb-64'>
        <div className='flex flex-col '>
          <nav className='flex items-center justify-center w-full'>
            <div className='pl-2 lg:pl-8 flex flex-col w-full text-lg  justify-center font-mono  text-neutral-700 pt-12 pb-3 gap-6  '>
              <Link
                className='flex  text-center items-center gap-3 justify-start pl-6 py-3 w-[66px] md:w-[180px] lg:w-[270px] rounded-3xl bg-[#d1b8dc] hover:bg-[#bda0cc] hover:rounded-3xl'
                href='/dashboard'
              >
                <MdOutlineDashboard />
                <span className='hidden md:flex  text-md'>Dashboard</span>
              </Link>
              <Link
                className='flex  text-center items-center gap-3 justify-start pl-6 py-3 w-[66px] md:w-[180px] lg:w-[270px] hover:bg-[#d1b8dc] hover:rounded-3xl'
                href='/software'
              >
                <AiOutlineLaptop />
                <span className='hidden md:flex  text-md'>Subscriptions</span>
              </Link>
              <Link
                className='flex  text-center items-center gap-3 justify-start pl-6 py-3 w-[66px] md:w-[180px] lg:w-[270px] hover:bg-[#d1b8dc] hover:rounded-3xl'
                href='/'
              >
                <PiHandCoinsDuotone />
                <span className='hidden md:flex  text-md'>Benefits</span>
              </Link>
              <Link
                className='flex  text-center items-center gap-3 justify-start pl-6 py-3 w-[66px] md:w-[180px] lg:w-[270px] hover:bg-[#d1b8dc] hover:rounded-3xl'
                href='/apply'
              >
                <TfiHeadphoneAlt />
                <span className='hidden md:flex  text-md'>Support</span>
              </Link>
            </div>
          </nav>
          <div className='hidden lg:inline-block w-[95%] pl-14 pt-[15vh]'>
            <hr className='h-[2px] bg-neutral-600 ' />
          </div>
          <div className='pl-2 lg:pl-8 pt-6 font-mono'>
            <Link
              className='flex text-center text-lg text-neutral-700 items-center gap-3 justify-start pl-6 py-3 w-[66px] md:w-[180px] lg:w-[270px] hover:bg-[#d1b8dc] hover:rounded-3xl'
              href='/apply'
            >
              <LuSettings />
              <span className='hidden md:flex '>Settings</span>
            </Link>
          </div>
        </div>
        <div className='w-full flex flex-col p-2 pt-5 md:p-4 h-[80vh] mb-20'>
          <div className='font-semibold py-6 lg:py-8 xl:py-10 bg-slate-50 rounded-xl w-full h-[75vh] flex flex-col justify-center items-center'>
            <div className='p-4 lg:p-8 bg-[#bbbbbb1f] rounded-xl h-[55vh] flex flex-col items-start w-[95%] text-sm lg:text-base'>
              <div className='py-3 flex justify-between items-center  w-full'>
                <h1 className='text-2xl  font-semibold text-center'>Current</h1>

                <div className='flex items-center'>
                  <p className=' flex text-center text-xl '>
                    {session.user.user.name}
                  </p>
                </div>
              </div>
              <div className='w-full pb-4'>
                <hr className='h-[2px] bg-neutral-800' />
              </div>
              <div className=' w-full flex md:flex-col gap-3'>
                <div className='gap-3 flex flex-col md:flex-row md:justify-between md:items-center w-full rounded-xl py-4 md:py-4 px-2 lg:px-6 bg-[#dfe5ee]'>
                  <div>Bundle</div>
                  <div>Email</div>
                  <div className='flex flex-col md:flex-row justify-between md:items-center gap-3 xl:gap-6 2xl:gap-0 2xl:w-[35%]'>
                    <div>Phone Number</div>
                    <div>Valid Date</div>
                    <div>Exp. Date</div>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center w-full rounded-xl px-2 py-4 lg:px-6 bg-[#e2e2e284] gap-3'>
                  <div className='flex flex-row justify-start md:justify-between items-center 2xl:w-[8%] gap-2'>
                    <input type='checkbox' className='accent-primary-color' />
                    <button className='bg-primary-color py-2 px-2 md:px-3 md:py-3 rounded-3xl flex'></button>
                    <div>Expert</div>
                  </div>
                  <div className='2xl:w-[8%]'>example@gmail.com</div>
                  <div className='flex flex-col md:flex-row justify-between md:items-center gap-3 2xl:gap-0 2xl:w-[34%]'>
                    <div>+23497886242</div>
                    <div>20/09/2023</div>
                    <div>20/09/2024</div>
                  </div>
                </div>
              </div>
            </div>

            <div className=''>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePaginationChange}
                className='pt-10'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
