import { useEffect } from 'react'

function useNavigation() {
	const useScrollNavbar = (id) => {
		useEffect(() => {
			let prevScrollPos = window.pageYOffset

			window.onscroll = async function () {
				let currentScrollPos = window.pageYOffset

				if (prevScrollPos > currentScrollPos) {
					!document.getElementById(id).classList.contains('top-0') &&
						document.getElementById(id).classList.add('top-0')

					document.getElementById(id).classList.contains('-top-20') &&
						document.getElementById(id).classList.remove('-top-20')
				} else if (prevScrollPos < currentScrollPos) {
					!document
						.getElementById(id)
						.classList.contains('-top-20') &&
						document.getElementById(id).classList.add('-top-20')

					document.getElementById(id).classList.contains('top-0') &&
						document.getElementById(id).classList.remove('top-0')
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
