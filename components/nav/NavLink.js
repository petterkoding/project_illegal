import Link from "next/link"

const NavLink = ({href}) => {
  return(
    <Link href={href}>
        <a className="border-2 border-red-700 px-4 py-1">{href}</a>
    </Link>
  )
}

export default NavLink