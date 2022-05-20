import NavLink from "./NavLink"

const Nav = () => {
  return (
    <header className="h-auto py-4 bg-transparent px-2">
        <div className="h-full max-w-7xl mx-auto flex flex-col md:items-center justify-center md:flex-row md:justify-between">

            <div className="text-illegalBlack flex-0 mr-20 font-Koulen text-3xl uppercase font-bold relative text-center">
              {/* illegal burger */}
              <img/>
            </div>

            <nav className="w-full flex-1 flex flex-row justify-evenly mt-4 md:mt-0">
                <NavLink href="meny"/>
                <NavLink href="kontakt"/>
            </nav>
            
        </div>
    </header>
  )
}

export default Nav