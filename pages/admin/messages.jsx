import Head from 'next/head'

import { gql } from '@apollo/client'
import { useUser } from '@auth0/nextjs-auth0'
import { createClient } from 'contentful'

import client from '../../apollo/client'
import { Spinner } from '../../components/Icons'
import Layout from '../../components/Layout/Layout'
import ThemeSelector from '../../components/UI/ThemeSelector'
import { siteTitle } from '../../constants'

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query getMessages {
                messages {
                    id
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

    const entriesFooterInfo = await contentClient.getEntries({
        content_type: process.env.CONTENT_TYPE1,
    })

    return {
        props: {
            messages: data.messages,
            whitelistEmail: process.env.WHITELIST_EMAIL,
            footerInfo: entriesFooterInfo.items,
        },
    }
}

function MessageList({ props }) {
    const { messages, whitelistEmail } = props

    const { user, error, isLoading } = useUser()

    if (isLoading) return <Spinner />
    if (error) return <div>{error.message}</div>

    // const { data: session } = useSession()

    if (user) {
        if (user.email === whitelistEmail) {
            return (
                <>
                    <h3 className="mx-auto grid my-2 md:my-4 break-all">
                        Signed in as: <b>[ {user.name} ]</b>
                    </h3>
                    <h4>{user.email}</h4>
                    <a href="/api/auth/logout" aria-label="Logout">
                        Logout
                    </a>
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
                                        Date:{' '}
                                        {dateString
                                            ? dateString
                                            : new Date(
                                                  Number(date)
                                              ).toLocaleString('lv-LV', {
                                                  hour12: false,
                                              })}
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
            <a href="/api/auth/login" aria-label="Login to see messages">
                Login
            </a>
        </>
    )
}

export default function Messages({ messages, whitelistEmail, footerInfo }) {
    return (
        <Layout props={footerInfo}>
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

                <div className="hero bg-base-200">
                    <div className="hero-content text-center">
                        <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl fhd:max-w-5xl 2k:max-w-6xl 4k:max-w-7xl">
                            <h2 className="justify-center font-bold">
                                📫 Message list:
                            </h2>
                            <MessageList
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
