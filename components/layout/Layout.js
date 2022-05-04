import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
        <div className="min-h-screen max-w-7xl mx-auto">
            <main>
                {children}
            </main>
        </div>
        <Footer/>
    </>
  )
}

export default Layout