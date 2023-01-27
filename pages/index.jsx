import Head from 'next/head'

import App from '../components/App'
import Layout from '../components/Layout'
import { siteDescription, siteTitle } from '../constants'
import { ContentfulContext } from '../context'
import {
	entriesContactMeForm,
	entriesInspiration,
	entriesMainInfo,
	entriesPersonalProjects,
	entriesSkillScopes,
	entriesSkillSet,
	entriesWorkPlaceTitles,
	entriesWorkPlaces,
} from '../helpers/data'

export async function getStaticProps() {
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
		<ContentfulContext.Provider value={props}>
			<Layout>
				<Head>
					<title>{`${siteTitle}: Main`}</title>
					<meta name="description" content={siteDescription} />
				</Head>
				<App />
			</Layout>
		</ContentfulContext.Provider>
	)
}
