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
				fa6f: ['"Font Awesome 6 Free"'],
			},
			screens: {
				xs: '414px',
				fhd: '1920px',
				'2k': '2560px',
				'4k': '3840px',
			},
			strokeWidth: {
				10: '10px',
				15: '15px',
			},
			animation: {
				'spin-slow': 'spin 20s linear infinite',
				'bounce-slow': 'bounce 3s linear infinite',
			},
		},
	},
	daisyui: {
		themes: ['night', 'light', 'lofi', 'cyberpunk', 'luxury'],
	},
}
