import Image from 'next/image'
import testTaskOne from '../../../public/images/testTaskOne.jpg'
import styles from './portfolioWorks.module.scss'

export default function TestTaskOne() {
	return (
		<>
			<div className='container-for-example'>
				<a
					href='https://magebit-task3.herokuapp.com/maillist'
					title='Mail List'
					target='blank'>
					<h2>Test Task #1</h2>
					<p>
						Technology stack used:{' '}
						<span>React, SCSS, Node.js, Express.js, MySQL</span>.
					</p>
				</a>
				<Image src={testTaskOne} alt='Test Task One' />
				<p className={styles.date}>December 2021</p>
			</div>
		</>
	)
}
