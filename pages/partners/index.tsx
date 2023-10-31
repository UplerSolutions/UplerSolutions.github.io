import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { ContactForm } from '@/components/ui/contactform/ContactForm'
import Image from 'next/image'
import Link from 'next/link'
import { Benefits } from '@/components/ui/benefits'

const Partner: NextPage = () => {
  return (
    <Layout title='Upler - Partner'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 pt-24 lg:pt-48 w-full bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] xl:h-[74vh]'>
        <div className='w-[80%] lg:w-[40%] lg:ml-[7%] relative  flex flex-col items-center place-items-center lg:items-start lg:place-items-start  text-neutral-700  pb-7'>
          <div className='text-[32px] font-bold md:text-3xl  xl:text-5xl flex text-center md:text-left'>
            <p className='text-[35px] md:text-4xl xl:text-6xl'>
              <span className=' text-primary-color '>Earn money</span>

              <span className=''> selling your digital products</span>
            </p>
          </div>
          <p className='pb-10 pt-8 text-center lg:text-left lg:w-[90%] font-semibold'>
            Your portal to a world of digital opportunities, where showcasing
            your products to potential customers won't cost you a dime.
          </p>
          <Link href='/apply' scroll={false} className='scroll-smooth'>
            <button className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
              Start Selling
            </button>
          </Link>
        </div>
        <div className='w-full lg:w-[60%] flex items-center justify-center flex-col relative overflow-hidden pb-10 lg:pr-[7%]'>
          <Image
            src={
              'https://roktech.net/wp-content/uploads/2022/11/softwaree-mange-3-x@3x.png'
            }
            alt={''}
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-8 py-20  bg-purple-50'>
        <div className='text-[32px] font-bold md:text-3xl  xl:text-5xl flex text-center md:text-left '>
          <p className='text-[35px] md:text-3xl xl:text-5xl'>
            <span className='text-neutral-600'>Digital products you can</span>
            <span className=' text-primary-color '> sell</span>
          </p>
        </div>
        <hr className='bg-primary-color border-2 border-primary-color w-[100px] m-auto left-0 right-0 ' />
        <div className=' md:grid md:grid-cols-4 grid grid-cols-2 text-center'>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dae365a484e6ef407bc_software.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1'>
              <h4 className=' text-xl md:text-[25px] text-black pb-2'>
                Software
              </h4>
            </div>
          </div>

          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad0ddc742e412f9a02_pdfs.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1'>
              <h4 className='text-xl md:text-[25px] text-black pb-2'>PDFs</h4>
            </div>
          </div>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dadd6d8e750039d4bb7_online-course.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1'>
              <h4 className='text-xl md:text-[25px] text-black pb-2'>
                Online courses
              </h4>
            </div>
          </div>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dae354dfad445217802_wordpress.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1'>
              <h4 className='text-xl md:text-[25px] text-black pb-2'>
                WP plugins
              </h4>
            </div>
          </div>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad660530f06ed5adbd_ebooks.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1'>
              <h4 className='text-xl md:text-[25px] text-black pb-2'>Ebooks</h4>
            </div>
          </div>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dae9ffab4696f1dbf5b_Template-library.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1'>
              <h4 className='text-xl md:text-[25px] text-black pb-2'>
                Template library
              </h4>
            </div>
          </div>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dade99fbf14133dd328_chrome-library.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1'>
              <h4 className='text-xl md:text-[25px] text-black pb-2'>
                Chrome extensions
              </h4>
            </div>
          </div>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'>
            <div>
              <Image
                src={
                  'https://uploads-ssl.webflow.com/608a3c0d9ffab4cb6d1d27fb/608a5dad8995994bb6a3743c_conference-tickets.svg'
                }
                width={95}
                height={95}
                alt={''}
              />
            </div>
            <div className='flex flex-col gap-3 md:gap-1'>
              <h4 className='text-xl md:text-[25px] text-black pb-2'>
                Conference tickets
              </h4>
            </div>
          </div>
        </div>
        <Link href='/apply' scroll={false} className='scroll-smooth '>
          <button className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
            Start Selling
          </button>
        </Link>
        <p className='w-[90%] lg:w-1/3 text-center pb-12 text-neutral-600'>
          Don't see your digital product listed? That's okay, all products are
          welcome! List for free and we'll let you know if it's a fit.
        </p>
      </div>
      <hr className='bg-primary-color border-4 border-primary-color w-[80px] absolute m-auto left-0 right-0 rotate-90' />
      <div className='flex flex-col items-center justify-center gap-8 md:gap-5 py-20 bg-purple-100 '>
        <div className='text-[32px] font-bold md:text-3xl  xl:text-5xl flex text-center md:text-left '>
          <p className='text-[35px] md:text-3xl xl:text-5xl'>
            <span className='text-neutral-600 '>How Upler works</span>
          </p>
        </div>

        <div className=' md:grid-cols-3 md:grid grid-cols-1 grid text-center w-[90%] xl:w-[70%] gap-6'>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
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

          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
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
                We'll spread the word with you, telling our 1M+ entrepreneurs
              </p>
            </div>
          </div>
          <div className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end '>
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
      <hr className='bg-primary-color border-4 border-primary-color w-[80px] absolute m-auto left-0 right-0 rotate-90' />
      <div className='flex flex-col  items-center  justify-center gap-8 pt-24 w-full bg-purple-50 pb-24'>
        <div className=' relative  flex flex-col items-center place-items-center   text-neutral-700  pb-7'>
          <div className='text-[32px] font-bold md:text-3xl  xl:text-5xl flex text-center w-[90%] md:w-full'>
            <p className='text-[35px] md:text-3xl xl:text-5xl'>
              <span className=''> Our business is </span>
              <span className=' text-primary-color '>helping yours</span>
            </p>
          </div>
          <p className='pb-10 pt-8 text-center lg:w-[90%] font-semibold'>
            You make things. We make things happen.
          </p>
          <Link href='/apply' scroll={false} className='scroll-smooth'>
            <button className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
              Start Selling
            </button>
          </Link>
          <p className='  text-xs text-neutral-500 pt-2'>
            Get paid. No upfront fees.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Partner
