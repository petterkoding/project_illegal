import Burger from "./Burger"
import { motion } from "framer-motion"

const Burgers = ({menu}) => {

  return (
    <div
      // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 my-6">
      className="flex flex-col gap-y-10 gap-x-4 my-6">
         {menu.map((burgers, index) => (
            <motion.div
              className="h-auto"
              key={burgers._id}
              initial={{opacity: 0, y: 3}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index === 0 ? 0.1 : index * 0.2}}
            >
              <Burger
                index={index}
                types={burgers}/>
           </motion.div>
         
        ))}
    </div>
  )
}

export default Burgers


