import { useEffect } from 'react'

function useIntersectionObserver() {
	const useAppear = (appearClassName, disappearClassName) => {
		useEffect(() => {
			if (appearClassName && disappearClassName) {
				const observer = new IntersectionObserver((entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add(`${appearClassName}`)
						} else {
							entry.target.classList.remove(`${appearClassName}`)
						}
					})
				})

				const hiddenElement = document.querySelectorAll(
					`.${disappearClassName}`
				)
				hiddenElement.forEach((element) => observer.observe(element))
			}

			return
		}, [appearClassName, disappearClassName])
	}

	return { useAppear: useAppear }
}

export default useIntersectionObserver
