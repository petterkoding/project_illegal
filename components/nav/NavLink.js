import Link from "next/link"

const NavLink = ({href}) => {
  return(
    <Link href={href}>
        <a className="capitalize font-bold">{href}</a>
    </Link>
  )
}

export default NavLink