import Head from "next/head"
import Contact from "../../components/contact/Contact"
import Layout from "../../components/layout/Layout"


const index = () => {
  return (
    <>
     <Head>
        <title>Illegal Burger | Restauranter i Oslo</title>
      </Head>
      <Layout>

        <Contact/>

      </Layout>

    </>
  )
}

export default index