import { useEffect, useState } from 'react'

function useThemeSelector() {
	const [theme, setTheme] = useState('')

	useEffect(() => {
		theme && localStorage.setItem('styleTheme', JSON.stringify(theme))
	}, [theme])

	useEffect(() => {
		const storedTheme = JSON.parse(localStorage.getItem('styleTheme'))
		storedTheme &&
			document.documentElement.setAttribute('data-theme', storedTheme)
		storedTheme && setTheme(storedTheme)
	}, [])

	const changeTheme = (themeValue) => {
		document.documentElement.setAttribute('data-theme', themeValue)
	}

	const themeHandler = (themeValue) => {
		setTheme(themeValue)
		changeTheme(themeValue)
	}

	return { theme: theme, themeHandler: themeHandler }
}

export default useThemeSelector
