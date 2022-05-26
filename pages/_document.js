import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link 
          href="https://fonts.googleapis.com/css2?family=Koulen&family=Oswald:wght@300;400;600;700&family=Roboto+Slab:wght@500&display=optional"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Illegal Burger er en burger restaurant i Oslo. Vi serverer hjemmelagd kullstekte gourmet burgere. Du finner oss på Olaf Ryes plass 4 og Møllergata 23."
        />
        <meta
          name="keywords"
          content="Illegal burger, burger restaurant,  hjemmelagd burgere, burgers, josper grill, Oslos beste burger"
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