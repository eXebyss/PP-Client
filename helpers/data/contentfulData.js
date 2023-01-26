import { contentful as contentfulClient } from '../client'

export const entriesMainInfo = await contentfulClient.getEntries({
	content_type: process.env.CONTENT_TYPE1,
})

export const entriesWorkPlaceTitles = await contentfulClient.getEntries({
	content_type: process.env.CONTENT_TYPE2,
})

export const entriesWorkPlaces = await contentfulClient.getEntries({
	content_type: process.env.CONTENT_TYPE3,
})

export const entriesPersonalProjects = await contentfulClient.getEntries({
	content_type: process.env.CONTENT_TYPE4,
})

export const entriesContactMeForm = await contentfulClient.getEntries({
	content_type: process.env.CONTENT_TYPE5,
})

export const entriesSkillScopes = await contentfulClient.getEntries({
	content_type: process.env.CONTENT_TYPE6,
})

export const entriesSkillSet = await contentfulClient.getEntries({
	content_type: process.env.CONTENT_TYPE7,
})

export const entriesInspiration = await contentfulClient.getEntries({
	content_type: process.env.CONTENT_TYPE8,
})
