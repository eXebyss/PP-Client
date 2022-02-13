import Image from 'next/image'
import this_web_site from '../../../public/images/this_web_site.jpg'
import styles from './portfolioWorks.module.scss'

export default function ThisWebSite() {
	return (
		<>
			<div className='container-for-example'>
				<a
					href='https://pp-nextjs.vercel.app/'
					title='Portfolio Page'
					target='blank'>
					<h2>Portfolio Page</h2>
					<p>
						Technology stack used:{' '}
						<span>
							React, SCSS, Bootstrap 4 & 5 (some components), MaterialUI (some
							components), Next.js, Node.js, Express.js, MongoDB, PWA
						</span>
						.
					</p>
				</a>
				<Image src={this_web_site} alt='Portfolio WebPage' />
				<p className={styles.date}>January 2022</p>
			</div>
		</>
	)
}
