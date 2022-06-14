import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/Layout'
import App from '../components/app/App'

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}: Main</title>
				<meta
					name='description'
					content='This is Mihails Fjodorovs portfolio page.'
				/>
			</Head>
			<App />
		</Layout>
	)
}
