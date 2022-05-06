import Link from "next/link"
import NavLink from "./NavLink"

const Nav = () => {
  return (
    <header className="bg-stone-200 h-[80px]">
        <div className="h-full max-w-7xl mx-auto flex flex-row justify-between items-center">
            <div className="flex-0 mr-20 font-Koulen text-3xl uppercase font-bold text-red-700">Illegal burger</div>
            <nav className="flex-1 flex flex-row justify-evenly">
                <NavLink href="menu"/>
                <NavLink href="about"/>
                <NavLink href="contact"/>
            </nav>
        </div>
    </header>
  )
}

export default Nav