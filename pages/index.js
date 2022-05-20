import Head from 'next/head'
import HomeHero from '../components/homepage/HomeHero'
import Layout from '../components/layout/Layout'
import Burgers from '../components/homepage/Burgers'
import { getAllBurgers } from '../lib/api'
import TopBanner from '../components/layout/TopBanner'

export default function Home({allBurgers}) {
  // console.log(allBurgers)
  return (
    <div>
      <Head>
        <title>Illegal Burger | restaurant Oslo</title>
      </Head>
      <Layout>
        <TopBanner>Bestill på Foodora/Wolt. Følg oss på facebook @illegaburger </TopBanner>
        <HomeHero/>
        
      
        {allBurgers.map((burgers, index) => (
          <Burgers key={burgers._id} index={index} types={burgers}/>
        ))}
      </Layout>

    </div>
  )
}

export async function getStaticProps(){
  const allBurgers = await getAllBurgers()

  return{
    props: { allBurgers},
    revalidate: 1
  }
}
