import Script from 'next/script'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import '../styles/reset.styles.scss'
import '../styles/index.scss'
import '../styles/scrollbar.scss'
import '../styles/animations.scss'
import '../styles/animations-timeline.scss'
import '../styles/animation-header.scss'
import '../styles/animation-info.scss'
import '../styles/welcome.scss'
import '../styles/navbar.scss'
import '../styles/info.scss'
import '../styles/timeline.scss'
import '../styles/progress-bar.scss'
import '../styles/portfolio-works.scss'
import '../styles/contact_form.scss'
import '../styles/footer.scss'
import '../styles/react-logo.scss'
import '../styles/redux-logo.scss'
import '../styles/about__me.scss'
import '../styles/@media.scss'

const client = new ApolloClient({
	uri: process.env.API_URL,
	cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
			/>
			<Script id='ga-analytics'>
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
			</Script>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
