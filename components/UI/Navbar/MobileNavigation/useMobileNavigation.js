import { useEffect, useState } from 'react'

function useMobileNavigation() {
	const [windowPositionY, setWindowPositionY] = useState(0)

	const useScrollNavbar = () => {
		useEffect(() => {
			let prevScrollPos = window.pageYOffset
			window.onscroll = function () {
				let currentScrollPos = window.pageYOffset
				if (prevScrollPos > currentScrollPos) {
					document
						.getElementById('navbarMobile')
						.classList.remove('-top-20')
					document
						.getElementById('navbarMobile')
						.classList.add('top-0')
				} else {
					document
						.getElementById('navbarMobile')
						.classList.remove('top-0')
					document
						.getElementById('navbarMobile')
						.classList.add('-top-20')
				}
				prevScrollPos = currentScrollPos
			}
		}, [])
	}

	useEffect(() => {
		function handleScroll() {
			setWindowPositionY(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return {
		scrollNavbar: useScrollNavbar,
		windowPositionY: windowPositionY,
	}
}

export default useMobileNavigation
