import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../../apollo-client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Layout, { siteTitle } from '../../components/Layout/Layout'

export async function getServerSideProps() {
	const { data } = await client.query({
		query: gql`
			query getMessages {
				messages {
					_id
					name
					email
					message
					date
					dateString
				}
			}
		`,
	})

	console.log(data.messages)

	return {
		props: {
			messages: data.messages,
		},
	}
}

function Messages({ messages }) {
	const { data: session } = useSession()

	if (session) {
		return (
			<>
				<span style={{ color: 'yellow' }}>
					Signed in as: {session.user.email}
				</span>{' '}
				<br />
				<button onClick={() => signOut()}>Sign out</button>
				{messages.map(({ _id, name, email, message, date, dateString }) => (
					<div key={_id}>
						<p style={{ color: 'yellow', marginTop: '1rem' }}>
							📧 {name} ({email}), has written: <br />
							{message}
							<br />
							Date: {dateString ? dateString : date}
						</p>
					</div>
				))}
			</>
		)
	}

	return (
		<Layout>
			<Head>
				<title>{siteTitle}: Authorization</title>
				<meta name='description' content='Authorization Page.' />
			</Head>
			<span style={{ color: 'yellow' }}>Not signed in </span>
			<br />
			<button onClick={() => signIn()}>Sign in</button>
		</Layout>
	)
}

export default function ApolloApp({ messages }) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}: Message List</title>
				<meta
					name='description'
					content='Message list send via contact form on M.F. Portfolio Page.'
				/>
			</Head>
			<h2 style={{ color: 'yellow' }}>📫 Message list:</h2>
			<Messages messages={messages} />
		</Layout>
	)
}
