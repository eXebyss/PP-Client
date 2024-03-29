const { withSentryConfig } = require('@sentry/nextjs')

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
	sw: 'partytown-sw.js',
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const moduleExports = withBundleAnalyzer(
	withPWA({
		reactStrictMode: true,
		swcMinify: true,
		images: {
			domains: [
				'images.ctfassets.net',
				'placeimg.com',
				'lh3.googleusercontent.com',
			],
		},
		sentry: {
			hideSourceMaps: true,
		},
		webpack: (config) => {
			// this will override the experiments
			config.experiments = { ...config.experiments, topLevelAwait: true }
			// this will just update topLevelAwait property of config.experiments
			// config.experiments.topLevelAwait = true
			return config
		},
	})
)

const sentryWebpackPluginOptions = {
	silent: true, // Suppresses all logs
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
