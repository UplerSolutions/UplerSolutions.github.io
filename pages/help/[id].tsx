import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HelpContent, HelpData, help } from '../../data/help'
import Link from 'next/link'
import Image from 'next/image'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import { FaGreaterThan } from 'react-icons/fa'
import { BsChevronRight } from 'react-icons/bs'
import { BiArrowBack, BiChevronRight } from 'react-icons/bi'

const HelpDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<HelpContent | null>(null)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    setSelectedTitle(null)
    router.push(`/help/${category}`)
  }

  const handleTitleClick = (content: HelpContent) => {
    setSelectedTitle(content)
  }

  useEffect(() => {
    if (id) {
      setSelectedCategory(id as string)
    }
  }, [id])

  return (
    <div className='selection:text-white selection:bg-primary-color'>
      <nav className='px-4 mb-10 flex flex-col items-center justify-between w-full bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] fixed z-50 h-[80px]'>
        <div className='flex z-10 w-full items-center justify-between font-mono text-sm pt-4 pb-4 lg:w-[70%] text-neutral-600'>
          <Link href='/'>
            <p>
              <Image
                className='w-[150px] md:w-40 min-w-full'
                src='/uplerlogo.png'
                alt='global Logo'
                width={100}
                height={100}
              />
            </p>
          </Link>
          <div className='text-lg w-auto flex gap-9 font-lato font-medium'>
            <Link href='/'>
              <p className='group relative inline-block text-[0.9rem]'>
                Home
                <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
              </p>
            </Link>
          </div>
        </div>
      </nav>
      <div className='w-full bg-purple-50  flex justify-center text-neutral-600'>
        <div className='flex flex-col-reverse md:flex-row pt-24 min-h-[100vh] justify-end items-center md:items-start w-[100%] md:w-[67%]'>
          <div className='md:w-1/4 md:mr-8 flex flex-col justify-start w-[80%]  pb-10'>
            <Link
              href='/help'
              className='flex items-center font-semibold uppercase text-xs pt-2 gap-2'
            >
              <BiArrowBack className='text-primary-color scale-[1.3]' /> help/
              {selectedCategory}
            </Link>
            <ul className='list-none pl-5'>
              <h1 className='text-2xl pb-4 pt-4'>CATEGORIES</h1>
              <li
                onClick={() => handleCategoryClick('GeneralInfo')}
                className={`cursor-pointer text-neutral-500 font-semibold mb-4 hover:text-neutral-900 ${
                  selectedCategory === 'GeneralInfo'
                    ? 'font-semibold flex flex-row-reverse  justify-end text-neutral-900 gap-1 items-center'
                    : ''
                }`}
              >
                {selectedCategory === 'GeneralInfo' ? (
                  <BiChevronRight className='scale-[1.1] text-primary-color font-bold' />
                ) : (
                  ''
                )}{' '}
                General Info
              </li>
              <li
                onClick={() => handleCategoryClick('Partners')}
                className={`cursor-pointer text-neutral-500 font-semibold mb-4 hover:text-neutral-900 ${
                  selectedCategory === 'Partners'
                    ? 'font-semibold flex flex-row-reverse  justify-end text-neutral-900 gap-1 items-center'
                    : ''
                }`}
              >
                {selectedCategory === 'Partners' ? (
                  <BiChevronRight className='scale-[1.1] text-primary-color font-bold' />
                ) : (
                  ''
                )}{' '}
                Partners
              </li>
              <li
                onClick={() => handleCategoryClick('Licenses')}
                className={`cursor-pointer text-neutral-500 font-semibold mb-4 hover:text-neutral-900 ${
                  selectedCategory === 'Licenses'
                    ? 'font-semibold flex flex-row-reverse  justify-end text-neutral-900 gap-1 items-center'
                    : ''
                }`}
              >
                {selectedCategory === 'Licenses' ? (
                  <BiChevronRight className='scale-[1.1] text-primary-color font-bold' />
                ) : (
                  ''
                )}{' '}
                Licenses
              </li>
            </ul>
          </div>

          <div className='md:w-3/4 w-[85%] bg-purple-100 px-4 py-5 md:p-10 md:h-[530px] md:pb-20'>
            {selectedCategory && !selectedTitle && (
              <ul className='list-none'>
                <h1 className='text-4xl font-bold mb-4'>
                  {selectedCategory &&
                    selectedCategory
                      .split(/(?=[A-Z])/)
                      .map((part, index) => (
                        <span key={index}>
                          {part.charAt(0).toUpperCase() + part.slice(1)}&nbsp;
                        </span>
                      ))}
                </h1>

                {Object.values(help[selectedCategory as keyof HelpData]).map(
                  (content: HelpContent, index: number) => (
                    <li key={index} className='mb-4'>
                      <a
                        onClick={() => handleTitleClick(content)}
                        className='cursor-pointer underline'
                      >
                        {content.title}
                      </a>
                    </li>
                  )
                )}
              </ul>
            )}
            {selectedTitle && (
              <div className=''>
                <h2 className='text-4xl font-bold pb-4'>
                  {selectedTitle.title}
                </h2>
                <p>{selectedTitle.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpDetailPage
