import Head from 'next/head'

import App from '../components/App'
import Layout from '../components/Layout'
import { siteDescription, siteTitle } from '../constants'
import { contentful as contentfulClient } from '../context/client/contentful'

export async function getStaticProps() {
	const entriesMainInfo = await contentfulClient.getEntries({
		content_type: process.env.CONTENT_TYPE1,
	})

	const entriesWorkPlaceTitles = await contentfulClient.getEntries({
		content_type: process.env.CONTENT_TYPE2,
	})

	const entriesWorkPlaces = await contentfulClient.getEntries({
		content_type: process.env.CONTENT_TYPE3,
	})

	const entriesPersonalProjects = await contentfulClient.getEntries({
		content_type: process.env.CONTENT_TYPE4,
	})

	const entriesContactMeForm = await contentfulClient.getEntries({
		content_type: process.env.CONTENT_TYPE5,
	})

	const entriesSkillScopes = await contentfulClient.getEntries({
		content_type: process.env.CONTENT_TYPE6,
	})

	const entriesSkillSet = await contentfulClient.getEntries({
		content_type: process.env.CONTENT_TYPE7,
	})

	const entriesInspiration = await contentfulClient.getEntries({
		content_type: process.env.CONTENT_TYPE8,
	})

	return {
		props: {
			portfolioPage: entriesMainInfo.items,
			myWorkExperiencePlaceTitles: entriesWorkPlaceTitles.items,
			myWorkExperiencePlaces: entriesWorkPlaces.items,
			personalProjects: entriesPersonalProjects.items,
			contactMeForm: entriesContactMeForm.items,
			skillScopes: entriesSkillScopes.items,
			skillSet: entriesSkillSet.items,
			inspiration: entriesInspiration.items,
		},
		revalidate: 60,
	}
}

export default function Home({
	portfolioPage,
	myWorkExperiencePlaceTitles,
	myWorkExperiencePlaces,
	personalProjects,
	contactMeForm,
	skillScopes,
	skillSet,
	inspiration,
}) {
	const props = {
		portfolioPage: portfolioPage,
		myWorkExperiencePlaceTitles: myWorkExperiencePlaceTitles,
		myWorkExperiencePlaces: myWorkExperiencePlaces,
		personalProjects: personalProjects,
		contactMeForm: contactMeForm,
		skillScopes: skillScopes,
		skillSet: skillSet,
		inspiration: inspiration,
	}

	return (
		<Layout props={portfolioPage}>
			<Head>
				<title>{`${siteTitle}: Main`}</title>
				<meta name="description" content={siteDescription} />
			</Head>
			<App props={props} />
		</Layout>
	)
}
