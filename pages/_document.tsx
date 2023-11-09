import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Character Set */}
        <meta charSet='utf-8' />

        {/* Favicon */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/isotipo.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/isotipo.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/isotipo.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />

        {/* Robots Search Indexing */}
        <meta
          name='robots'
          content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
        />



      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5MCXXWBZ" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </Html>
  )
}
