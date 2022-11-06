import Head from 'next/head'
import Script from 'next/script'

import { UserProvider } from '@auth0/nextjs-auth0'

import '../styles/global/index.scss'

function App({ Component, pageProps: { ...pageProps } }) {
    return (
        <UserProvider>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
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
        </UserProvider>
    )
}

export default App
