import { useEffect } from 'react'

function useNavigation() {
	const useScrollNavbar = (id) => {
		useEffect(() => {
			let prevScrollPos = window.pageYOffset
			window.onscroll = function () {
				let currentScrollPos = window.pageYOffset
				if (prevScrollPos > currentScrollPos) {
					document.getElementById(id).classList.remove('-top-20')
					document.getElementById(id).classList.add('top-0')
				} else {
					document.getElementById(id).classList.remove('top-0')
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
