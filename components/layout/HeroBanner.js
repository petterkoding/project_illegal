import { motion } from "framer-motion"

const HeroBanner = () => {
  return (
    <div className="bg-[url('/img/banner.jpg')] bg-center bg-cover h-96 flex items-center justify-center px-6">
        <motion.h1
          initial={{y: 10, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1.3}}
          className="text-7xl md:text-8xl font-Koulen uppercase font-bold text-yellow-400">

          Hjemmelagd kullstekte gourmet burgere

        </motion.h1>
    </div>
  )
}

export default HeroBanner