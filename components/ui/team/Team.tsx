import { team } from '@/data/team'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'

export const Team = () => {
  return (
    <div className='bg-neutral-50 pt-20'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            <span className='block '>Meet the team</span>
          </h2>
          <p className='mt-4 text-lg leading-6 text-gray-500 pb-8'>
            A dedicated group passionate about simplifying software management.
            With diverse expertise, we&apos;re committed to delivering
            streamlined solutions for effortless software success
          </p>
        </div>
        <div className='mt-8'>
          <ul
            role='list'
            className='grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3 lg:gap-24'
          >
            {team.map((person) => (
              <li key={person.name}>
                <div className='space-y-6'>
                  <img
                    className='mx-auto h-40 w-40 rounded-full lg:w-56 lg:h-56'
                    src={person.image}
                    alt=''
                  />
                  <div className='space-y-2 text-center'>
                    <div className='text-lg leading-6 font-medium space-y-1'>
                      <h3 className='text-neutral-700'>{person.name}</h3>
                      <p className='text-neutral-500'>{person.role}</p>
                    </div>
                    <div className='flex justify-center items-center text-lg leading-6 font-medium space-y-1'>
                      <p>
                        <Link
                          href={person.linkedin}
                          className='text-blue-700'
                          target='_blank'
                        >
                          <FaLinkedin />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
