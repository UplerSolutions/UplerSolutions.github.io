import Image from 'next/image'

export const Partner = () => {
  return (
    <section className='flex items-center justify-center flex-col pb-6 pt-14 md:pt-28  text-neutral-600 font-semibold w-[100%]'>
      <div className=' flex items-center md:items-left justify-center flex-col w-full md:w-[88%] xl:w-[78%]'>
        <div className='flex flex-col text-left lg:w-[100%]'>
          <div className='text-center flex items-center lg:text-left pb-10 w-full'>
            <div className='flex flex-col pb-3'>
              <h3 className='pb-4 text-sm md:text-base lg:text-lg'>
                GET TO KNOW WHO TRUSTS US
              </h3>
              <h2 className='text-3xl lg:text-4xl xl:text-5xl text-neutral-700 font-bold'>
                Our Official
                <span className='text-primary-color'> Partnerships</span>
              </h2>
            </div>
            <div className=' hidden lg:invisible'>
              <h3 className='text-neutral-700'>
                CONOCE QUIEN CONFIA EN NOSOTROS
              </h3>
              <h2 className='text-4xl'>
                Nuestros
                <span className='text-primary-color0'>
                  {' '}
                  partnerships oficiales
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between sm:flex-row gap-8 md:gap-8 pb-14'>
          <Image
            height={120}
            width={1200}
            src='/Todos.png'
            alt='partner-logo'
            className='hidden md:block w-full'
          />

          <Image
            height={120}
            width={180}
            src='/Bybit.png'
            alt='partner-logo'
            className='md:hidden w-[150px] h-[60px]'
          />
          <Image
            height={80}
            width={180}
            src='/prex.png'
            alt='partner-logo'
            className='md:hidden w-[150px] h-[70px]'
          />

          <Image
            height={80}
            width={180}
            src='/Damke.png'
            alt='partner-logo'
            className='md:hidden w-[150px] h-[100px]'
          />

          <Image
            height={80}
            width={180}
            src='/vincapital.png'
            alt='partner-logo'
            className='md:hidden w-[150px] h-[110px]'
          />
        </div>
      </div>
    </section>
  )
}
