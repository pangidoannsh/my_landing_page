import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="shortcut icon" href="/white-logo.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <body style={{ backgroundColor: '#000' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
