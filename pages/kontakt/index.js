import Head from "next/head"
import Contact from "../../components/contact/Contact"
import HeroBanner from "../../components/layout/HeroBanner"
import Layout from "../../components/layout/Layout"
import TopBanner from "../../components/layout/TopBanner"

const index = () => {
  return (
    <>
     <Head>
        <title>Illegal Burger | restaurant Oslo</title>
      </Head>
      <Layout>
        <TopBanner>Bestill på Foodora. Følg oss på facebook @illegaburger </TopBanner>
        <HeroBanner/>
        <Contact/>
      </Layout>

    </>
  )
}

export default index