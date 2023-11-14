// pages/[id].tsx

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { help as helpData } from '../../data/help' // Adjust the path as needed
import Link from 'next/link'
import Image from 'next/image'

interface HelpItem {
  id: string
  label: string
  number: string
  duration: string
}

const HelpDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [helpContent, setHelpContent] = useState<HelpItem | null>(null) // Adjust the state type

  // Fetch help content based on the id
  useEffect(() => {
    const fetchHelpContentById = (id: string | string[]) => {
      const selectedHelp = helpData.find(
        (item) => String(item.id) === String(id)
      )

      if (selectedHelp) {
        setHelpContent(selectedHelp)
      } else {
        console.error(`Help content with id ${id} not found.`)
      }
    }

    if (id) {
      if (Array.isArray(id)) {
        // Handle the case where id is an array (e.g., if it's ['1'])
        fetchHelpContentById(id[0])
      } else {
        fetchHelpContentById(id)
      }
    }
  }, [id])

  return (
    <div>
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
      <h1>Help Detail Page</h1>
      {helpContent ? (
        <div>
          <h2>{helpContent.label}</h2>
          <p>Number: {helpContent.number}</p>
          <p>Duration: {helpContent.duration} months</p>
          {/* Add more details based on your content structure */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default HelpDetailPage
