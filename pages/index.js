import Head from 'next/head'
import HeroBanner from '../components/layout/HeroBanner'
import Layout from '../components/layout/Layout'
import Burgers from '../components/homepage/Burgers'
import Extras from '../components/homepage/Extras'
import { getAllBurgers, getBeverages, getExtras } from '../lib/api'
import TopBanner from '../components/layout/TopBanner'
import Beverages from '../components/homepage/Beverages'

import { motion } from 'framer-motion'

export default function Home({allBurgers, extras, beverages}) {

  const textAnimate = {
    hidden: {
      opacity: 0,
      y: 5
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    },
  }

  return (
    <>
      <Head>
        <title>Illegal Burger | restaurant Oslo</title>
      </Head>
      <Layout>
        <TopBanner>Bestill på Foodora. Følg oss på facebook @illegaburger </TopBanner>
        <HeroBanner/>

        <div className="px-2 mt-10">

          <motion.h2
            initial="hidden"
            animate="show"
            variants={textAnimate}
            className=" mt-4 font-Oswald text-4xl uppercase font-bold text-illegalRed">Burgere</motion.h2>

          <motion.div
            initial="hidden"
            animate="show"
            variants={textAnimate}
            className="mt-4 text-illegalBlack font-Oswald">
            <p className="text-illegalRed text-md font-bold uppercase">glutenfritt brød er 10,- ekstra</p>
            <h4 className="uppercase text-sm font-bold mt-4">allergener</h4>
            <p className="text-xs uppercase">
              e = egg, g = hvetegluten, f = fisk, se = sesam, m = melk, so = soya, s = sennep, sel = selleri
            </p>
          </motion.div>

          <Burgers menu={allBurgers}/>

          <Extras menu={extras} />

          <Beverages menu={beverages} />
        </div>

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
