import { ApolloServer } from 'apollo-server-micro'

import { resolvers } from '../../../apollo/resolvers'
import { typeDefs } from '../../../apollo/type-defs'
import { prisma } from '../../../context/client/prisma'

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: { prisma },
})

export const config = {
	api: {
		bodyParser: false,
	},
}

const startServer = apolloServer.start()

export default async (req, res) => {
	res.setHeader('Access-Control-Allow-Credentials', 'true')
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://studio.apollographql.com'
	)
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	if (req.method === 'OPTIONS') {
		res.end()
		return false
	}

	await startServer

	await apolloServer.createHandler({
		path: '/api/apollo/graphql',
	})(req, res)
}
