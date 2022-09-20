const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.ctfassets.net', 'placeimg.com'],
	},
})
