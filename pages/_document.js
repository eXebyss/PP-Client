import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='manifest' href='/manifest.json' />
					<link rel='apple-touch-icon' href='/icon.png'></link>
					<meta name='theme-color' content='#fff' />
					<link
            href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap"
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
