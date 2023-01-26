import { createClient } from 'contentful'

export const contentful = createClient({
	space: process.env.SPACE,
	accessToken: process.env.ACCESS_TOKEN,
})
