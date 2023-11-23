import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<>
			<Script id="google-analytics">
				{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5MCXXWBZ');
            `}
			</Script>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	)
}

export default MyApp
