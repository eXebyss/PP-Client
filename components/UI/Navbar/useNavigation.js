import { useEffect } from 'react'

function useNavigation() {
	const useScrollNavbar = (id) => {
		useEffect(() => {
			let prevScrollPos = window.pageYOffset

			window.onscroll = function () {
				let currentScrollPos = window.pageYOffset

				if (prevScrollPos < window.innerHeight) {
					document.getElementById(id).classList.contains('-top-20') &&
						document.getElementById(id).classList.remove('-top-20')
					document.getElementById(id).classList.contains('fixed') &&
						document.getElementById(id).classList.remove('fixed')
					document.getElementById(id).classList.contains('top-0') &&
						document.getElementById(id).classList.remove('top-0')
				} else if (prevScrollPos > currentScrollPos) {
					document.getElementById(id).classList.remove('-top-20')
					document.getElementById(id).classList.add('fixed', 'top-0')
				} else {
					document
						.getElementById(id)
						.classList.remove('fixed', 'top-0')
					document.getElementById(id).classList.add('-top-20')
				}

				prevScrollPos = currentScrollPos
			}
		}, [id])
	}

	return {
		scrollNavbar: useScrollNavbar,
	}
}

export default useNavigation
