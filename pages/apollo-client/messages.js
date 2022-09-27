import Head from 'next/head'
import { gql } from '@apollo/client'
import { useSession, signIn, signOut } from 'next-auth/react'

import client from '../../apollo-client'
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

	return {
		props: {
			messages: data.messages,
		},
	}
}

function Messages({ messages }) {
	const { data: session } = useSession()

	if (session) {
		if (session.user.email === process.env.WHITELIST_EMAIL) {
			return (
				<>
					<span>Signed in as: {session.user.email}</span>
					<br />
					<button onClick={() => signOut()}>Sign out</button>
					{messages.map(({ _id, name, email, message, date, dateString }) => (
						<div key={_id}>
							<p>
								📧 {name} ({email}), has written: <br />
								{message}
								<br />
								Date: {dateString ? dateString : date}
							</p>
						</div>
					))}
				</>
			)
		} else {
			return (
				<>
					<h3 className='text-error py-2 fhd:py-4'>Access Denied</h3>
					<p>It seems, like you are not added to a whitelist.</p>
					<p>Please, contact system administrator.</p>
				</>
			)
		}
	}

	return (
		<Layout>
			<Head>
				<title>{`${siteTitle}: Authorization`}</title>
				<meta name='description' content='Authorization Page.' />
			</Head>
			<p className='text-warning font-bold py-2 fhd:py-4'>Not signed in ❗</p>
			<button className='hover:text-primary' onClick={() => signIn()}>
				Sign in
			</button>
		</Layout>
	)
}

export default function ApolloApp({ messages }) {
	return (
		<Layout>
			<Head>
				<title>{`${siteTitle}: Message List`}</title>
				<meta
					name='description'
					content='Message list send via contact form on M.F. Portfolio Page.'
				/>
			</Head>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<h2 className='justify-center font-bold'>📫 Message list:</h2>
						<Messages messages={messages} />
					</div>
				</div>
			</div>
		</Layout>
	)
}
