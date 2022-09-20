import React from 'react'
import classes from './welcomeScreen.module.scss'

function WelcomeScreen({ props }) {
	const { title, subTitle } = props[0].fields

	return (
		<div className={classes.root}>
			<h1 className={classes.welcomeHeading}>{title}</h1>
			<h2 className={classes.welcomeSubHeading}>{subTitle}</h2>
			<a href='#aboutMe' aria-label='Learn more about my profile below'>
				<svg
					className='w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 mt-16 md:mt-32 lg:mt-40 fill-transparent stroke-primary stroke-[10px] animate-bounce'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 384 512'>
					<path d='M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
				</svg>
			</a>
		</div>
	)
}

export default WelcomeScreen
