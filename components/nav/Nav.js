import Link from "next/link"

const Nav = () => {
  return (
    <header className="bg-stone-200">
        <div className="max-w-7xl mx-auto flex flex-row justify-between">
            illegal burger
            <nav>
                <Link href="/menu">Menu</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    </header>
  )
}

export default Nav