import useThemeSelector from './useThemeSelector'

const ThemeSelector = () => {
	const { theme, themeHandler } = useThemeSelector()

	return (
		<select
			className="select select-primary mx-auto text-sm md:w-full md:max-w-xs"
			value={theme ? `${theme}` : 'default'}
			onChange={(e) => themeHandler(e.target.value)}
		>
			<option value="default" disabled={true}>
				Choose style theme
			</option>
			<option value="light">🌝 Light</option>
			<option value="lofi">🌟 Lofi</option>
			<option value="night">🌚 Night</option>
			<option value="cyberpunk">🤖 Cyberpunk</option>
			<option value="luxury">💎 Luxury</option>
		</select>
	)
}

export default ThemeSelector
