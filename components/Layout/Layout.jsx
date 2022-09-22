import Head from 'next/head'
import Script from 'next/script'

export const siteTitle = 'Mihails Fjodorovs Portfolio Page'
const url = 'https://mihails-fjodorovs.vercel.app/'

export default function Layout({ children }) {
	return (
		<>
			<Head>
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
				<meta
					name='twitter:description'
					content={`I'm Front-End developer. I'm developing on React & Next.js. For Back-End development I use Node.js with Express.`}
				/>
			</Head>
			<main>
				<Script
					src='https://kit.fontawesome.com/f18b884e63.js'
					crossOrigin='anonymous'
					strategy='lazyOnload'
					onLoad={() => console.log(`script loaded correctly: FontAwesome ✅`)}
					onError={() =>
						console.log(`script loaded with error: FontAwesome ❌`)
					}
				/>
				{children}
			</main>
		</>
	)
}
