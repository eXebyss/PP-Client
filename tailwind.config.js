/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	important: true,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [require('daisyui')],
	theme: {
		screens: {
			xs: '414px',
			...defaultTheme.screens,
			fhd: '1920px',
			'2k': '2560px',
			'4k': '3840px',
		},
		extend: {
			fontFamily: {
				coda: ['Coda'],
				fa6f: ['"Font Awesome 6 Free"'],
			},
			strokeWidth: {
				10: '10px',
				15: '15px',
			},
			animation: {
				'spin-slow': 'spin 20s linear infinite',
				'bounce-slow': 'bounce 3s linear infinite',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
				'10xl': '104rem',
			},
		},
	},
	daisyui: {
		themes: ['night', 'light', 'lofi', 'cyberpunk', 'luxury'],
	},
}
