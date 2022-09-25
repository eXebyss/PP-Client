const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
	withPWA({
		reactStrictMode: true,
		swcMinify: true,
		images: {
			domains: ['images.ctfassets.net', 'placeimg.com'],
		},
	})
)
