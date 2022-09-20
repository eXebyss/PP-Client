/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [require('daisyui')],
	theme: {
		extend: {
			fontFamily: {
				coda: ['Coda'],
			},
			screens: {
				xs: '414px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				fhd: '1920px',
			},
		},
	},
	daisyui: {
		themes: ['night', 'light', 'lofi', 'cyberpunk', 'luxury'],
	},
}
