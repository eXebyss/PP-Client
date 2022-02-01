import Link from 'next/link'
import { useRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import buttonClick from '../../../utils/handlers/menuDropHandler'

export default function ToHomePage() {
	const navRef = useRef(null)

	return (
		<>
			<button className='menu__button' onClick={e => buttonClick(navRef)}>
				<GiHamburgerMenu />
			</button>
			<nav ref={navRef}>
				<ul>
					<li>
						<a href='#beginning'>Beginning</a>
					</li>
					<li>
						<a href='#back-end'>Back-End</a>
					</li>
					<li>
						<a href='#front-end'>Front-End</a>
					</li>
					<li>
						<a href='#contact-me'>Contact Me</a>
					</li>
					<li>
						<a href='#portfolio-works'>Portfolio Works</a>
					</li>
					<li>
						<Link href='/info/about-me'>
							<a>About Me</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
