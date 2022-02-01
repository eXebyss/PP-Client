import Image from 'next/image'
import React from 'react'
import priceApp from '../public/images/price-app.jpg'
import chatApp from '../public/images/chat-app.jpg'

function Portfolio() {
	return (
		<div className='portfolio-works' id='portfolio-works'>
			<h1 className='div__heading'>— Some Portfolio Works —</h1>
			<div className='container-for-example'>
				<a
					href='https://pricesapp.vercel.app/'
					title='Price App'
					target='blank'>
					<h2>Price App</h2>
					<p>
						Technology stack used:{' '}
						<span>React, Redux, Tailwind CSS, PWA, Webpack</span>.
					</p>
				</a>
				<Image src={priceApp} alt='Price-App' />
			</div>
			<div className='container-for-example'>
				<a
					href='https://mern-app-eight.vercel.app/login'
					title='Chat App'
					target='blank'>
					<h2>Chat App</h2>
					<p>
						Technology stack used:{' '}
						<span>
							React, Redux, Bootstrap, Node.js, Express.js, MongoDB, Socket.io
						</span>
						.
					</p>
				</a>
				<Image src={chatApp} alt='Chat-App' />
			</div>
		</div>
	)
}

export default Portfolio
