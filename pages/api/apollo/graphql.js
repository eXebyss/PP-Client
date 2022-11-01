import { ApolloServer } from 'apollo-server'

import { resolvers } from '../../../apollo/resolvers'
// import { schema } from '../../../apollo/schema'
import { typeDefs } from '../../../apollo/type-defs'
import { prisma } from '../../../context/prisma/prisma'

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: { resolvers },
    context: { prisma },
})

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// }

async function startApolloServer() {
    const { url, port } = await apolloServer.listen({
        port: process.env.PORT || 4000,
    })

    /* eslint-disable */
    console.log(`
		🚀  Server is running
		🔉  Listening on port ${port}
		📭  Query at ${url}
    `)
    /* eslint-enable */
}

export default startApolloServer()
