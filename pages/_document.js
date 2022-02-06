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
						href='https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
						integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
						crossOrigin='anonymous'
					/>
					<link
						href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
						rel='stylesheet'
						integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
						crossOrigin='anonymous'
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
