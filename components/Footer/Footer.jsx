import React from 'react'
import styles from './footer.module.scss'

function Footer() {
	return (
		<div className='footer'>
			<p>Copyright © Mihails Fjodorovs 2021-2022</p>
			<a href='https://github.com/eXebyss/' target='blank' aria-label='GitHub'>
				<i className='fa-brands fa-github'></i>
			</a>
			<a
				href='https://www.linkedin.com/in/mihails-fjodorovs-361a0a182/'
				target='blank'
				aria-label='LinkedIn'>
				<i className='fa-brands fa-linkedin'></i>
			</a>
			<a
				href='https://www.codewars.com/users/eXebyss'
				target='blank'
				aria-label='Codewars'>
				<img
					src='https://www.codewars.com/users/eXebyss/badges/micro'
					alt='Codewars'
					className={styles.codewarsBadge}
				/>
			</a>
			<p>
				I know, I&apos;m not perfect and could have done better. But still, I
				love what I do. And if it could have been done even better, then in the
				future it will definitely be so. ❤️
			</p>
			<p>v1.0</p>
		</div>
	)
}

export default Footer
