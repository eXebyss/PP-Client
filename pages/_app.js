import Head from 'next/head'
import Script from 'next/script'

import { SessionProvider } from 'next-auth/react'

import '../styles/global/index.scss'

function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Script
                src="https://kit.fontawesome.com/f18b884e63.js"
                crossOrigin="anonymous"
                strategy="lazyOnload"
                /* eslint-disable */
                onLoad={() =>
                    console.log(`script loaded correctly: FontAwesome ✅`)
                }
                onError={() =>
                    console.log(`script loaded with error: FontAwesome ❌`)
                }
                /* eslint-enable */
            />
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="ga-analytics">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
            </Script>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default App
