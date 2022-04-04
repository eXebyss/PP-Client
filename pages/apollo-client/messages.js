import { useQuery, gql } from '@apollo/client'
import { useSession, signIn, signOut } from 'next-auth/react'

const MESSAGES = gql`
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
`

function Messages() {
	const { data: session } = useSession()

	if (session) {
		const { loading, error, data } = useQuery(MESSAGES)

		if (loading) return <p style={{ color: 'yellow' }}>Loading...</p>
		if (error) return <p style={{ color: 'yellow' }}>Error😕</p>

		return (
			<>
				<span style={{ color: 'yellow' }}>
					Signed in as: {session.user.email}
				</span>{' '}
				<br />
				<button onClick={() => signOut()}>Sign out</button>
				{data.messages.map(
					({ _id, name, email, message, date, dateString }) => (
						<div key={_id}>
							<p style={{ color: 'yellow' }}>
								📧 {name} ({email}), has written: <br />
								{message}
								<br />
								Date: {dateString ? dateString : date}
							</p>
						</div>
					)
				)}
			</>
		)
	}
	return (
		<>
			<span style={{ color: 'yellow' }}>Not signed in </span>
			<br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}

export default function ApolloApp() {
	return (
		<div>
			<h2 style={{ color: 'yellow' }}>📫 Message list:</h2>
			<Messages />
		</div>
	)
}
