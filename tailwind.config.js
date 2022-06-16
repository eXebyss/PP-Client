/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mrDafoe: ['Mr Dafoe'],
			},
			colors: {
				gray: {
					primary: '#7a7a7a',
				},
				body: {
					background: '#1e1e2f',
				},
			},
		},
	},
	plugins: [],
}
