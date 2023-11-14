import Image from 'next/image'
import { FaFlagCheckered } from 'react-icons/fa'
import LiaFlagCheckeredSolid from 'react-icons/lia'
import { PiFlagPennant, PiFlagPennantFill } from 'react-icons/pi'
export const Roadmap = () => {
  return (
    <div className='flex flex-col items-center justify-center py-24 bg-purple-50 w-full'>
      <h1 className='text-5xl text-primary-color font-semibold'>Roadmap</h1>
      <div className='w-1/2 items-center justify-center'>
        <div className='flex flex-col gap-10 pt-20  items-center justify-center'>
          <div className=' justify-end items-center text-primary-color font-semibold flex gap-10 w-full'>
            <div className='absolute right-[55%]'>
              <Image src={'./globo1.png'} alt={''} width={200} height={200} />
            </div>
            <div className='flex flex-col justify-center items-left '>
              <h1 className='pb-6 pl-8'>MVP</h1>
              <div className='flex items-center'>
                <PiFlagPennantFill className='text-5xl m-6' />
                <div className='flex flex-col'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>{' '}
              <div className='flex items-center'>
                <PiFlagPennantFill className='text-5xl m-6' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className='text-primary-color items-center font-semibold flex gap-10 w-full py-24'>
            <div className='absolute left-[55%]'>
              {' '}
              <Image
                src={'https://cdn-icons-png.flaticon.com/512/8846/8846948.png'}
                alt={''}
                width={150}
                height={150}
              />
            </div>
            <div className='flex flex-col justify-center items-left '>
              <h1 className='pb-6'>STEP 2</h1>
              <div className='flex items-center'>
                <div className='flex flex-col'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <PiFlagPennant className='text-5xl m-6' />
              </div>{' '}
              <div className='flex items-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <PiFlagPennant className='text-5xl m-6' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 pt-20  items-center justify-center'>
          <div className=' justify-end items-center text-primary-color font-semibold flex gap-10 w-full'>
            <div className='absolute right-[55%]'>
              <Image
                src={'https://cdn-icons-png.flaticon.com/512/8846/8846948.png'}
                alt={''}
                width={150}
                height={150}
              />
            </div>
            <div className='flex flex-col justify-center items-left '>
              <h1 className='pb-6 pl-8'>STEP 3</h1>
              <div className='flex items-center'>
                <PiFlagPennant className='text-5xl m-6' />
                <div className='flex flex-col'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>{' '}
              <div className='flex items-center'>
                <PiFlagPennant className='text-5xl m-6' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className='text-primary-color items-center font-semibold flex gap-10 w-full py-24'>
            <div className='absolute left-[55%]'>
              <Image
                src={'https://cdn-icons-png.flaticon.com/512/8846/8846948.png'}
                alt={''}
                width={150}
                height={150}
              />
            </div>
            <div className='flex flex-col justify-center items-left '>
              <h1 className='pb-6'>STEP 4</h1>
              <div className='flex items-center'>
                <div className='flex flex-col'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <PiFlagPennant className='text-5xl m-6' />
              </div>{' '}
              <div className='flex items-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <PiFlagPennant className='text-5xl m-6' />
              </div>
            </div>
          </div>
          <div className='text-primary-color'>
            <FaFlagCheckered className='text-5xl m-6' />
          </div>
        </div>
      </div>
    </div>
  )
}
