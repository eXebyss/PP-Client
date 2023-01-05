import Head from 'next/head'
import Script from 'next/script'

import { UserProvider } from '@auth0/nextjs-auth0'
import { Partytown } from '@builder.io/partytown/react'
import LogRocket from 'logrocket'
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'

import '../styles/global/index.scss'

function App({ Component, pageProps: { ...pageProps } }) {
	LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_APPID)

	useEffect(() => {
		hotjar.initialize(
			process.env.NEXT_PUBLIC_HOTJAR_HJID,
			process.env.NEXT_PUBLIC_HOTJAR_HJSV
		)
	}, [])

	return (
		<UserProvider>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, viewport-fit=cover"
				/>
				<Partytown debug={true} forward={['dataLayer.push']} />
			</Head>
			<Script
				src="https://kit.fontawesome.com/f18b884e63.js"
				crossOrigin="anonymous"
				strategy="lazyOnload"
				/* eslint-disable */
				onLoad={() =>
					console.log('Script loaded correctly: FontAwesome ✅')
				}
				onError={() =>
					console.log('Script loaded with error: FontAwesome ❌')
				}
				/* eslint-enable */
				type="text/partytown"
			/>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
				type="text/partytown"
			/>
			<Script id="ga-analytics" type="text/partytown">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
			</Script>
			<Component {...pageProps} />
		</UserProvider>
	)
}

export default App
