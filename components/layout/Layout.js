import Nav from "../nav/Nav"
import Footer from "../footer/Footer"
import HeroBanner from "./HeroBanner"
import TopBanner from "./TopBanner"

const Layout = ({children}) => {
  return (
    <>
        <Nav/>

        <main className="min-h-screen max-w-7xl mx-auto">
        <TopBanner>Siste nytt og oppdateringer, følg oss på
          <a
            className="ml-1 uppercase underline"
            href="https://www.facebook.com/illegaburger"
            target="_blank"
            rel="noopener noreferrer">
              facebook
          </a>
        </TopBanner>

          <HeroBanner/>
          {children}
        </main>
        
        <Footer/>
    </>
  )
}

export default Layout