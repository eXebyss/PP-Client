const ThemeSelector = () => {
	const changeTheme = themeValue => {
		document.documentElement.setAttribute('data-theme', themeValue)
	}

	return (
		<select
			className='select select-primary mx-auto text-sm'
			onChange={e => changeTheme(e.target.value)}
			value='default'>
			<option value='default' disabled>
				Choose style theme
			</option>
			<option value='light'>🌞 Light</option>
			<option value='lofi'>🌞 Lofi</option>
			<option value='night'>🌚 Night</option>
			<option value='cyberpunk'>🤖 Cyberpunk</option>
			<option value='luxury'>🌜 Luxury</option>
		</select>
	)
}

export default ThemeSelector
