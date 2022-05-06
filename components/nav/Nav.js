import NavLink from "./NavLink"

const Nav = () => {
  return (
    <header className="h-auto py-4 bg-red-200 px-2">
        <div className="h-full max-w-7xl mx-auto flex flex-col justify-center md:flex-row md:justify-between items-center">

            <div className="flex-0 mr-20 font-Koulen text-3xl uppercase font-bold relative text-center">
              illegal burger
            </div>

            <nav className="w-full flex-1 flex flex-row justify-evenly mt-4">
                <NavLink href="menu"/>
                <NavLink href="about"/>
                <NavLink href="contact"/>
            </nav>
            
        </div>
    </header>
  )
}

export default Nav