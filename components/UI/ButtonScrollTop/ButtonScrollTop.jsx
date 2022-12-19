import React, { useEffect, useState } from 'react'

import { ArrowUp } from '../../Icons'
import Button from '../Button/Button'

const ButtonScrollTop = () => {
	const [showButton, setShowButton] = useState()

	useEffect(() => {
		const handleScrollButtonVisibility = () => {
			window.pageYOffset > window.screen.height
				? setShowButton(true)
				: setShowButton(false)
		}

		window.addEventListener('scroll', handleScrollButtonVisibility)

		return () => {
			window.removeEventListener('scroll', handleScrollButtonVisibility)
		}
	}, [])

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<>
			{showButton && (
				<Button
					styles="p-2 2k:p-4 rounded-full w-auto h-auto my-0 md:my-0 fixed bottom-20 right-4 z-50 bg-transparent w-fill h-fill border-none hover:border-solid hover:border-accent"
					onClick={handleScrollToTop}
				>
					<ArrowUp className="w-10 h-10 md:w-12 md:h-12 2k:w-24 2k:h-24 4k:w-28 4k:h-28 fill-transparent stroke-primary hover:stroke-accent stroke-15" />
				</Button>
			)}
		</>
	)
}

export default ButtonScrollTop
