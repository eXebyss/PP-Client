import Head from 'next/head'

import { gql } from '@apollo/client'
import { createClient } from 'contentful'
import { signIn, signOut, useSession } from 'next-auth/react'

import client from '../../apollo-client'
import Layout from '../../components/Layout/Layout'
import Button from '../../components/UI/Button'
import ThemeSelector from '../../components/UI/ThemeSelector'
import { siteTitle } from '../../constants'

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

    const contentClient = createClient({
        space: process.env.SPACE,
        accessToken: process.env.ACCESS_TOKEN,
    })

    const entriesMainInfo = await contentClient.getEntries({
        content_type: process.env.CONTENT_TYPE1,
    })

    return {
        props: {
            messages: data.messages,
            whitelistEmail: process.env.WHITELIST_EMAIL,
            portfolioPage: entriesMainInfo.items,
        },
    }
}

function Messages({ props }) {
    const { messages, whitelistEmail } = props

    const { data: session } = useSession()

    if (session) {
        if (session.user.email === whitelistEmail) {
            return (
                <>
                    <h3>
                        Signed in as: <b>{session.user.email}</b>
                    </h3>
                    <Button onClick={() => signOut()}>Sign out</Button>
                    {messages.map(
                        ({ _id, name, email, message, date, dateString }) => (
                            <div
                                className="mx-auto grid my-2 md:my-4"
                                key={_id}
                            >
                                <p>
                                    📧 {name}{' '}
                                    <a href={`mailto:${email}`}>
                                        <b className="hover:text-accent">
                                            {email}
                                        </b>
                                    </a>
                                    , has written: {message}
                                </p>
                                <p>
                                    <i>
                                        Date: {dateString ? dateString : date}
                                    </i>
                                </p>
                            </div>
                        )
                    )}
                </>
            )
        } else {
            return (
                <>
                    <h3 className="text-error py-2 fhd:py-4">Access Denied</h3>
                    <p>It seems, like you are not added to a whitelist.</p>
                    <p>Please, contact system administrator.</p>
                </>
            )
        }
    }

    return (
        <>
            <Head>
                <title>{`${siteTitle}: Authorization`}</title>
                <meta name="description" content="Authorization Page." />
            </Head>
            <p className="text-warning font-bold py-2 fhd:py-4">
                Not signed in ❗
            </p>
            <Button onClick={() => signIn()}>Sign in</Button>
        </>
    )
}

export default function ApolloApp({ messages, whitelistEmail, portfolioPage }) {
    return (
        <Layout props={portfolioPage}>
            <Head>
                <title>{`${siteTitle}: Message List`}</title>
                <meta
                    name="description"
                    content="Message list send via contact form on M.F. Portfolio Page."
                />
            </Head>

            <div className="grid">
                <nav className="my-4 mx-auto grid">
                    <ThemeSelector />
                </nav>

                <div className="hero min-h-[90vh] bg-base-200">
                    <div className="hero-content text-center">
                        <div>
                            <h2 className="justify-center font-bold">
                                📫 Message list:
                            </h2>
                            <Messages
                                props={{
                                    messages,
                                    whitelistEmail,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
