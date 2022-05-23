import Head from 'next/head'
import HomeHero from '../components/homepage/HomeHero'
import Layout from '../components/layout/Layout'
import Burgers from '../components/homepage/Burgers'
import Extras from '../components/homepage/Extras'
import { getAllBurgers, getBeverages, getExtras } from '../lib/api'
import TopBanner from '../components/layout/TopBanner'
import Beverages from '../components/homepage/Beverages'

export default function Home({allBurgers, extras, beverages}) {

  return (
    <>
      <Head>
        <title>Illegal Burger | restaurant Oslo</title>
      </Head>
      <Layout>
        <TopBanner>Bestill på Foodora/Wolt. Følg oss på facebook @illegaburger </TopBanner>
        <HomeHero/>

        <h2 className=" mt-4 font-Noto text-4xl uppercase font-bold text-illegalRed">Burgere</h2>
        <div className="mt-4 text-illegalBlack">
          <p className="text-illegalRed text-md font-bold uppercase font-Noto">glutenfritt brød er 10,- ekstra</p>
          <h4 className="uppercase text-sm font-bold">allergener</h4>
          <p className="text-xs uppercase font-Noto">
            e = egg, g = hvetegluten, f = fisk, se = sesam, m = melk, so = soya, s = sennep, sel = selleri
          </p>
        </div>

        <Burgers menu={allBurgers}/>

        <Extras menu={extras} />

        <Beverages menu={beverages} />

      </Layout>

    </>
  )
}

export async function getStaticProps(){
  const allBurgers = await getAllBurgers()
  const extras = await getExtras()
  const beverages = await getBeverages()

  return{
    props: { allBurgers, extras, beverages},
    revalidate: 1
  }
}
