import { useState } from 'react'

import { themeHandler } from '../../../utils/handlers'

const ThemeSelector = () => {
    const [theme, setTheme] = useState('')

    const changeTheme = (themeValue) => {
        document.documentElement.setAttribute('data-theme', themeValue)
    }

    return (
        <select
            className="select select-primary mx-auto text-sm md:w-full md:max-w-xs"
            value={theme ? `${theme}` : 'default'}
            onChange={(e) =>
                themeHandler(e.target.value, setTheme, changeTheme)
            }
        >
            <option value="default" disabled>
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
