import Head from 'next/head'
import Footer from '../../components/Footer/Footer'
import InfoAboutMe from '../../components/InfoAboutMe'
import Layout, { siteTitle } from '../../components/Layout/Layout'
import Navbar from '../../components/Navbar/Navbar'

export default function AboutMe() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}: Info</title>
				<meta name='description' content='Information page about M.F.' />
			</Head>
			<div className='about__me'>
				<Navbar />
				<InfoAboutMe />
				<Footer />
			</div>
		</Layout>
	)
}
