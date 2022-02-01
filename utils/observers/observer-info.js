const observersForInfo = () => {
	const observerInfo = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const info = entry.target.querySelector('#info-block')

			if (entry.isIntersecting) {
				info.classList.add('info__animation')
				return
			}

			info.classList.remove('info__animation')
		})
	})

	observerInfo.observe(document.querySelector('.info'))
}

export default observersForInfo
