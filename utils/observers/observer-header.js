const observersForHeader = () => {
	const observerHeader = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const header = entry.target.querySelector('#second-line')

			if (entry.isIntersecting) {
				header.classList.add('header__animation')
				return
			}

			header.classList.remove('header__animation')
		})
	})

	observerHeader.observe(document.querySelector('.header'))
}

export default observersForHeader