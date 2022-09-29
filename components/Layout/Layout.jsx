import Script from 'next/script'

export default function Layout({ children }) {
	return (
		<main>
			<Script
				src='https://kit.fontawesome.com/f18b884e63.js'
				crossOrigin='anonymous'
				strategy='lazyOnload'
				onLoad={() => console.log(`script loaded correctly: FontAwesome ✅`)}
				onError={() => console.log(`script loaded with error: FontAwesome ❌`)}
			/>
			{children}
		</main>
	)
}
