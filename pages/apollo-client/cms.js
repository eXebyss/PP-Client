import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../../apollo-client'
import Layout, { siteTitle } from '../../components/Layout/Layout'

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query getSkills {
				skills {
					_id
					name
					text
					rate
					date
					dateUpdated
				}
			}
		`,
	})

	return {
		props: {
			skills: data.skills,
		},
	}
}

function Skills({ skills }) {
	return (
		<>
			{' '}
			{skills.map(({ _id, name, text, rate, date, dateUpdated }) => (
				<div key={_id}>
					<p style={{ color: 'yellow', marginTop: '1rem' }}>
						🔮 {name}, has written: <br />
						{text}
						<br />
						Rate: {rate}
						<br />
						Date: {date}, Parsed date:{' '}
						{new Date(Date.parse(date)).toLocaleString('lv-LV')}
						<br />
						DateUpdated: {dateUpdated}
					</p>
				</div>
			))}
		</>
	)
}

export default function ApolloApp({ skills }) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}: Skill List</title>
				<meta name='description' content='Skills saved via CMS admin panel.' />
			</Head>
			<h2 style={{ color: 'yellow' }}>🤹 Skill list:</h2>
			<Skills skills={skills} />
		</Layout>
	)
}
