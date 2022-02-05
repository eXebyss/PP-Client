import Head from 'next/head'
import { useEffect } from 'react'
import Layout, { siteTitle } from '../components/Layout/Layout'
import App from '../app/App'
import observerForHeader from '../utils/observers/observer-header'
import observersForInfo from '../utils/observers/observer-info'
import observersForTimeline from '../utils/observers/observers-timeline'

export default function Home() {
	useEffect(() => {
		observerForHeader()
		observersForInfo()
		observersForTimeline()
	}, [])
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<App />
		</Layout>
	)
}
