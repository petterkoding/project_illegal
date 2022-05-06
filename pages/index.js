import Head from 'next/head'
import HomeHero from '../components/homepage/HomeHero'
import Layout from '../components/layout/Layout'
import { getAllBurgers } from '../lib/api'

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <Layout>
        <HomeHero/>
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
