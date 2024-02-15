import { useState, useEffect } from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
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
			className="text-green  fixed bottom-5 left-0 right-0 z-40 m-auto hidden h-20 w-full cursor-pointer items-center justify-center text-3xl md:flex lg:bottom-[0px] lg:left-[98%]"
			onClick={scrollToTop}
			style={{ display: visible ? 'inline' : 'none' }}
		>
			<div className="hidden  w-full justify-center text-primary-color md:flex lg:justify-stretch">
				<BsFillArrowUpSquareFill />
			</div>
		</button>
	)
}

export default ScrollButton
