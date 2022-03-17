import { useQuery, gql } from '@apollo/client'

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
	const { loading, error, data } = useQuery(MESSAGES)

	if (loading) return <p style={{ color: 'yellow' }}>Loading...</p>
	if (error) return <p style={{ color: 'yellow' }}>Error😕</p>

	return data.messages.map(
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
