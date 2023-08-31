import Image from 'next/image'

export const Partner = () => {
  return (
    <section className='flex items-center  md:items-stretch  justify-center flex-col pb-6 pt-8  text-neutral-600 font-semibold '>
      <div className='flex flex-col text-left lg:w-[100%]'>
        <div className='text-center flex items-center lg:text-left pb-10 w-full'>
          <div className='flex flex-col'>
            <h3 className='pb-4 text-xs md:text-base lg:text-lg'>
              GET TO KNOW WHO TRUSTS US
            </h3>
            <h2 className='text-2xl lg:text-4xl'>
              Our Official
              <span className='text-primary-color'> Partnerships</span>
            </h2>
          </div>
          <div className=' hidden lg:invisible'>
            <h3 className=''>CONOCE QUIEN CONFIA EN NOSOTROS</h3>
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

      <div className='flex flex-wrap justify-center lg:justify-between sm:flex-row gap-8 md:gap-8'>
        <Image
          height={120}
          width={320}
          src='/Bybit.png'
          alt='partner-logo'
          className='md:py-24 flew-wrap w-[40%] md:w-[180px] md:flex-wrap 2xl:w-[330px]'
        />
        <Image
          height={80}
          width={400}
          src='/prex.png'
          alt='partner-logo'
          className='md:py-24 flew-wrap w-[40%] md:w-[180px] md:flex-wrap 2xl:w-[300px] '
        />

        <Image
          height={50}
          width={190}
          src='/damke.png'
          alt='partner-logo'
          className='md:py-8 md:mx-8 flew-wrap w-[40%] md:w-[180px] md:flex-wrap 2xl:w-[230px]'
        />

        <Image
          height={120}
          width={220}
          src='/vincapital.png'
          alt='partner-logo'
          className='lg:md-8 flew-wrap w-[40%] md:w-[180px] md:flex-wrap 2xl:w-[230px]'
        />
      </div>
    </section>
  )
}
