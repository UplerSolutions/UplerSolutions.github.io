import React, { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollPos = window.pageYOffset
      if (
        Number(currentScrollPos) > 1000 &&
        Number(prevScrollPos) > Number(currentScrollPos)
      ) {
        setVisible(true)
      } else {
        setVisible(false)
      }
      setPrevScrollPos(currentScrollPos)
    }
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <button
      className='fixed w-full flex items-center justify-center left-0 right-0 m-auto bottom-5 lg:left-[90%] lg:bottom-[40px] h-20 text-3xl z-40 cursor-pointer text-green'
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <div className='text-primary-color w-full flex justify-center lg:justify-stretch'>
        <FaArrowCircleUp />
      </div>
    </button>
  )
}

export default ScrollButton
