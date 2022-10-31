import Document, { Head, Html, Main, NextScript } from 'next/document'

import { ogUrl, siteTitle } from '../constants'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#fff" />
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content={`${siteTitle}`} />
                    <meta property="og:image" content={`${ogUrl}logo.png`} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="628" />
                    <meta
                        property="og:description"
                        content={`I'm Front-End developer. I'm developing on React & Next.js. For Back-End development I use Node.js with Express.`}
                    />
                    <meta property="og:url" content={`${ogUrl}`} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={`${siteTitle}`} />
                    <meta
                        property="twitter:image"
                        content={`${ogUrl}logo.png`}
                    />
                    <meta
                        name="twitter:description"
                        content={`I'm Front-End developer. I'm developing on React & Next.js. For Back-End development I use Node.js with Express.`}
                    />
                    <meta property="twitter:site" content={`${ogUrl}`} />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Coda&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
