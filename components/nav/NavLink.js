import Link from "next/link"
import { useRouter } from "next/router"

const NavLink = ({href, as}) => {

  const {asPath} = useRouter();

  return(
    <Link href={href}>
        <a className={`${href === asPath ? "bg-illegalBlue" : "bg-illegalBlack"} uppercase font-bold text-sm px-6 py-2 text-white rounded-md transition duration-200 ease-in-out`}>
          {as}
        </a>
    </Link>
  )
}

export default NavLink