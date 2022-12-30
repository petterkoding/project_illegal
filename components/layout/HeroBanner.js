import { motion } from "framer-motion"

const HeroBanner = () => {
  return (
    <div className="bg-[url('/img/banner.jpg')] bg-center bg-cover h-96 flex items-center justify-center px-6 relative select-none">
        <motion.h1
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1.3}}
          className="text-7xl md:text-8xl font-Koulen uppercase font-bold text-yellow-400">

          Hjemmelagd kullstekte gourmet burgere

        </motion.h1>

        <span className="absolute bottom-[-22px] right-3 text-xs text-gray-500 font-Oswald">Burger Totem by
          <a
            className="ml-1 underline uppercase"
            href="https://www.uglylogo.no/"
            rel="noopener noreferrer"
            target="_blank"
          >
            uglylogo
          </a>
        </span>
    </div>
  )
}

export default HeroBanner