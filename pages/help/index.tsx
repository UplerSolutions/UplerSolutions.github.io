import { Layout } from '@/components/layout/Layout'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SearchBar } from '../../components/ui/searchbar/SearchBar'

const Help: NextPage = () => {
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
      <div className='bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] h-[300px]'></div>
      <div className='bg-purple-50  w-full items-center flex flex-col gap-4 pt-10'>
        <div className=' md:grid-cols-3 md:grid grid-cols-1 grid text-center w-[90%] xl:w-[70%] gap-6'>
          <div className='bg-purple-100 rounded-md transition cursor-pointer p-4 hover:scale-[1.02] h-[300px] grid  grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb23e38e9e15c15562fa7_Union%20(1).svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className=' text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                1. List
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                Start listing your digital product on Upler for free
              </p>
            </div>
          </div>

          <div className='rounded-md transition cursor-pointer p-4 h-[300px] hover:scale-[1.02] grid grid-rows-2 bg-purple-100 align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div className=''>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb22641b1672df9c9e648_Union%20(2).svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                2. Spread the word
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                We&apos;ll spread the word with you, telling our 1M+
                entrepreneurs
              </p>
            </div>
          </div>
          <div className='rounded-md transition cursor-pointer p-4 h-[300px] hover:scale-[1.02] grid grid-rows-2 bg-purple-100 align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div className=''>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb24fe8d6fafb2abcbc12_Union.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                3. Get paid
              </h4>
              <p className='text-neutral-600 w-[90%]'>
                Earn more money from your digital products
              </p>
            </div>
          </div>
        </div>
        <div className=' md:grid-cols-3 md:grid grid-cols-1 grid text-center w-[90%] xl:w-[70%] gap-6'>
          <div className='bg-purple-100 rounded-md transition cursor-pointer p-4 hover:scale-[1.02] h-[300px] grid  grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb23e38e9e15c15562fa7_Union%20(1).svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className=' text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                1. List
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                Start listing your digital product on Upler for free
              </p>
            </div>
          </div>

          <div className='rounded-md transition cursor-pointer p-4 h-[300px] hover:scale-[1.02] grid grid-rows-2 bg-purple-100 align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div className=''>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb22641b1672df9c9e648_Union%20(2).svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                2. Spread the word
              </h4>
              <p className='text-neutral-600 w-[90%] '>
                We&apos;ll spread the word with you, telling our 1M+
                entrepreneurs
              </p>
            </div>
          </div>
          <div className='rounded-md transition cursor-pointer p-4 h-[300px] hover:scale-[1.02] grid grid-rows-2 bg-purple-100 align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
            <div className=''>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/6051501504406dc96db069ac/609cb24fe8d6fafb2abcbc12_Union.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1 items-center'>
              <h4 className='text-xl md:text-[25px] text-black pb-0 md:pb-2 pt-2 mb:pt-0'>
                3. Get paid
              </h4>
              <p className='text-neutral-600 w-[90%]'>
                Earn more money from your digital products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
