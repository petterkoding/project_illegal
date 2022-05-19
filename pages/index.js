import Head from 'next/head'
import HomeHero from '../components/homepage/HomeHero'
import Layout from '../components/layout/Layout'
import Burgers from '../components/homepage/Burgers'
import { getAllBurgers } from '../lib/api'

export default function Home({allBurgers}) {
  console.log(allBurgers)
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <Layout>
        {/* <HomeHero/> */}
        
      
        {/* {allBurgers.map((burgers) => (
          <Burgers types={burgers}/>
        ))} */}
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
