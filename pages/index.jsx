import Head from 'next/head'

import { createClient } from 'contentful'

import Layout from '../components/Layout'
import App from '../components/app'
import { siteTitle } from '../constants'

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

    const entriesSkillScopes = await client.getEntries({
        content_type: process.env.CONTENT_TYPE6,
    })

    const entriesSkillSet = await client.getEntries({
        content_type: process.env.CONTENT_TYPE7,
    })

    const entriesInspiration = await client.getEntries({
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
                <meta
                    name="description"
                    content="This is Mihails Fjodorovs portfolio page."
                />
            </Head>
            <App props={props} />
        </Layout>
    )
}
