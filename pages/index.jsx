import { createClient } from 'contentful'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import App from '../components/app'

export async function getStaticProps() {
	const client = createClient({
		space: process.env.SPACE,
		accessToken: process.env.ACCESS_TOKEN,
	})

	const entriesMainInfo = await client.getEntries({
		content_type: process.env.CONTENT_TYPE1,
	})

	const entriesWorkPlaceTitles = await client.getEntries({
		content_type: process.env.CONTENT_TYPE2,
	})

	const entriesWorkPlaces = await client.getEntries({
		content_type: process.env.CONTENT_TYPE3,
	})

	const entriesPersonalProjects = await client.getEntries({
		content_type: process.env.CONTENT_TYPE4,
	})

	const entriesContactMeForm = await client.getEntries({
		content_type: process.env.CONTENT_TYPE5,
	})

	return {
		props: {
			portfolioPage: entriesMainInfo.items,
			myWorkExperiencePlaceTitles: entriesWorkPlaceTitles.items,
			myWorkExperiencePlaces: entriesWorkPlaces.items,
			personalProjects: entriesPersonalProjects.items,
			contactMeForm: entriesContactMeForm.items,
		},
	}
}

export default function Home({
	portfolioPage,
	myWorkExperiencePlaceTitles,
	myWorkExperiencePlaces,
	personalProjects,
	contactMeForm,
}) {
	const props = {
		portfolioPage: portfolioPage,
		myWorkExperiencePlaceTitles: myWorkExperiencePlaceTitles,
		myWorkExperiencePlaces: myWorkExperiencePlaces,
		personalProjects: personalProjects,
		contactMeForm: contactMeForm,
	}

	return (
		<Layout>
			<Head>
				<title>{`${siteTitle}: Main`}</title>
				<meta
					name='description'
					content='This is Mihails Fjodorovs portfolio page.'
				/>
			</Head>
			<App props={props} />
		</Layout>
	)
}
