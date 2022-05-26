import Link from "next/link"
import { useRouter } from "next/router"

const NavLink = ({href, as}) => {

  const {asPath} = useRouter();

  return(
    <Link href={href}>
        <a className={`${href === asPath ? "bg-illegalBlue" : "bg-illegalBlack"} font-Oswald uppercase font-bold text-sm px-8 py-2 tracking-wider text-white rounded-md transition duration-200 ease-in-out hover:bg-illegalBlue hover:drop-shadow-lg`}>
          {as}
        </a>
    </Link>
  )
}

export default NavLink