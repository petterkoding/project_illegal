import Head from "next/head"
import Layout from "../../components/layout/Layout"
import TopBanner from "../../components/layout/TopBanner"

const index = () => {
  return (
    <>
     <Head>
        <title>Illegal Burger | restaurant Oslo</title>
      </Head>
 

      
     
      <Layout>
        <TopBanner>Bestill på Foodora/Wolt. Følg oss på facebook @illegaburger </TopBanner>
        <div className="my-4">
        <address>
          <div>Olaf Ryes plass 4</div>
          <div>21 90 19 19</div>
        </address>
      </div>

      <div className="my-4">
        <address>
          <div>Møllergata 23</div>
          <div>22 20 33 02</div>
        </address>
      </div>
      </Layout>

    </>
  )
}

export default index