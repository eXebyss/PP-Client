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
			<main>
				<Script
					src='https://kit.fontawesome.com/f18b884e63.js'
					crossOrigin='anonymous'
					strategy='lazyOnload'
					onLoad={() => console.log(`script loaded correctly: FontAwesome`)}
				/>
				<Script
					src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
					integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
					crossOrigin='anonymous'
					strategy='lazyOnload'
					onLoad={() => console.log(`script loaded correctly: jQuery`)}
				/>
				<Script
					src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
					integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
					crossOrigin='anonymous'
					strategy='lazyOnload'
					onLoad={() => console.log(`script loaded correctly: Ajax`)}
				/>
				<Script
					src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
					integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
					crossOrigin='anonymous'
					strategy='lazyOnload'
					onLoad={() => console.log(`script loaded correctly: Bootstrap 4`)}
				/>
				<Script
					src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
					integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
					crossOrigin='anonymous'
					strategy='lazyOnload'
					onLoad={() => console.log(`script loaded correctly: Bootstrap 5`)}
				/>
				{children}
			</main>
		</div>
	)
}
