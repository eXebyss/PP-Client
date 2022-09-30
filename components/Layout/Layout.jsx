import Script from 'next/script'
import Footer from '../Footer'

export default function Layout({ children, props }) {
    return (
        <main>
            <Script
                src="https://kit.fontawesome.com/f18b884e63.js"
                crossOrigin="anonymous"
                strategy="lazyOnload"
                /* eslint-disable */
                onLoad={() =>
                    console.log(`script loaded correctly: FontAwesome ✅`)
                }
                onError={() =>
                    console.log(`script loaded with error: FontAwesome ❌`)
                }
                /* eslint-enable */
            />
            {children}
            <Footer props={props} />
        </main>
    )
}
