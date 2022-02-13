import Image from 'next/image'
import priceApp from '../../../public/images/price-app.jpg'
import styles from './portfolioWorks.module.scss'

export default function PriceApp() {
	return (
		<>
			<div className='container-for-example' id='reactSPA'>
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
				<p className={styles.date}>September 2021</p>
			</div>
		</>
	)
}
