import NavLink from "./NavLink"

const Nav = () => {
  return (
    <header className="h-auto py-4 bg-transparent px-2 select-none">
        <div className="h-full max-w-7xl mx-auto flex flex-col md:items-center justify-center md:flex-row">

            <div className="text-illegalBlack flex-0 font-Koulen text-3xl uppercase font-bold relative text-center md:mr-24">
              illegal burger
            </div>

            <nav className="w-full flex-1 flex flex-row justify-around md:justify-start mt-4 md:mt-0 md:space-x-12">
                <NavLink href="/" as="hjem"/>
                <NavLink href="/kontakt" as="kontakt"/>
            </nav>
            
        </div>
    </header>
  )
}

export default Nav