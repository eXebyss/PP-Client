import Head from 'next/head'
import Script from 'next/script'

export const siteTitle = 'Mihails Fjodorovs PP'

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					property='og:image'
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content='Mihails Fjodorovs Portfolio Page' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='description'
					content='Mihails Fjodorovs. I am Front-End developer. Working mainly with React.js. Also familiar with Next.js. For Back-End I use Node.js with Express.js.'
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
		</div>
	)
}
