import React, { useContext } from 'react'

import { ContentfulContext } from '../../context'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { ArrowDown } from '../Icons'

function WelcomeScreen() {
	const { portfolioPage } = useContext(ContentfulContext)
	const { useAppear } = useIntersectionObserver()

	useAppear('appear', 'disappear')

	const { title, subTitle } = portfolioPage[0].fields

	return (
		<section className="h-screen grid content-center justify-items-center ">
			<h1 className="font-semibold disappear">{title}</h1>
			<h2 className="text-center disappear">{subTitle}</h2>
			<a href="#aboutMe" aria-label="Learn more about my profile below">
				<ArrowDown className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-16 md:mt-32 lg:mt-40 fill-transparent stroke-primary stroke-10 hover:stroke-accent animate-bounce" />
			</a>
		</section>
	)
}

export default WelcomeScreen
