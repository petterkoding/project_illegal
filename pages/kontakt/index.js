import Head from "next/head"
import HomeHero from "../../components/homepage/HomeHero"
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
        <HomeHero/>

        <div className="px-2 mt-10">

          <h1 className="font-Oswald uppercase text-4xl text-illegalRed font-bold">Kontakt oss</h1>
          <div className="my-4">
            <address>
              <div className="font-Oswald text-md text-illegalBlack">Olaf Ryes plass 4</div>
              <div className="font-Roboto text-md text-illegalBlack tracking-wider">21 90 19 19</div>
            </address>
          </div>

          <div className="my-4">
            <address>
              <div className="font-Oswald text-md text-illegalBlack">Møllergata 23</div>
              <div className="font-Roboto text-md text-illegalBlack tracking-wider">22 20 33 02</div>
            </address>
          </div>

          <h2 className="font-Oswald uppercase text-2xl text-illegalBlack font-bold mt-6 mb-1">Veldig sulten?</h2>
          <h3 className="font-Oswald uppercase text-xl text-illegalBlack font-bold mb-4">Bestill levering eller henting hos foodora</h3>
          <a
              className="px-6 py-2 bg-pink-600 inline-block text-2xl uppercase font-Oswald text-white rounded-xl mt-4"
              href="https://www.foodora.no/restaurant/n2xs/illegal-burger-ryes-plass?fbclid=IwAR0yYzxNcQfexGCCzh3kPJvr5W5iinwGqcJ3_P2eDRwh32dTWfTAsON-UFE"
              target="_blank"
              rel="noopener noreferrer">
              bestill her
          </a>
        </div>
      </Layout>

    </>
  )
}

export default index