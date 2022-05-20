import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Koulen&family=Noto+Sans:ital,wght@0,300;0,400;0,600;0,900;1,700&family=Roboto+Slab:wght@500&display=optional"
          rel="stylesheet"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument