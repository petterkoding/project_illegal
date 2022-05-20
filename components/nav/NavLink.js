import Link from "next/link"

const NavLink = ({href}) => {
  return(
    <Link href={`/${href}`}>
        <a className="uppercase font-bold text-sm bg-illegalBlack px-6 py-2 text-white rounded-md">{href}</a>
    </Link>
  )
}

export default NavLink