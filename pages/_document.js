import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		const siteTitle = 'Mihails Fjodorovs Portfolio Page'
		const url = 'https://mihails-fjodorovs.vercel.app/'

		return (
			<Html lang='en'>
				<Head>
					<link rel='manifest' href='/manifest.json' />
					<link rel='apple-touch-icon' href='/icon.png'></link>
					<meta name='theme-color' content='#fff' />
					<meta charSet='utf-8' />
					<link rel='icon' href='/favicon.ico' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta property='og:title' content={`${siteTitle}`} />
					<meta property='og:image' content={`${url}logo.png`} />
					<meta property='og:image:width' content='1200' />
					<meta property='og:image:height' content='628' />
					<meta
						property='og:description'
						content={`I'm Front-End developer. I'm developing on React & Next.js. For Back-End development I use Node.js with Express.`}
					/>
					<meta property='og:url' content={`${url}`} />
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:title' content={`${siteTitle}`} />
					<meta property='twitter:image' content={`${url}logo.png`} />
					<meta
						name='twitter:description'
						content={`I'm Front-End developer. I'm developing on React & Next.js. For Back-End development I use Node.js with Express.`}
					/>
					<meta property='twitter:site' content={`${url}`} />
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
