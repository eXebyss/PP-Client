const observersForWS = () => {
	const observerWS = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const welcomeScreen = entry.target.querySelector('#second-line')

			if (entry.isIntersecting) {
				welcomeScreen.classList.add('header__animation')
				return
			}

			welcomeScreen.classList.remove('header__animation')
		})
	})

	observerWS.observe(document.querySelector('.welcomeScreen'))
}

export default observersForWS
