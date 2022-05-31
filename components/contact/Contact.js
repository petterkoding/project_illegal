import { motion } from "framer-motion"
import { textSlideUp } from "../../lib/Animations"
import OpeningHours from "./OpeningHours"

const Contact = () => {
    return (
    <motion.div
        initial="hidden"
        animate="show"
        variants={textSlideUp}
        className="px-2 mt-10 mb-32 h-[80vh]">        

        <h1 className="font-Oswald uppercase text-4xl text-illegalRed font-bold mb-8">Våre avdelinger</h1>

        <div className="md:flex md:space-x-32 h-[20vh]">
            <div className="mt-2 mb-10">
                <address>
                    <div className="font-Oswald text-3xl font-bold uppercase text-illegalBlack">Olaf Ryes plass 4</div>
                </address>

                <OpeningHours regular="16-22" fri="16-22" sat="12-23" sun="12-21"/>
                <div className="font-Oswald font-bold text-lg uppercase text-illegalBlack tracking-wider">
                    ring for take-away
                    <span className="font-thin ml-2">21 90 19 19</span>
                </div>
                <span className="font-Oswald text-sm text-illegalRed capitalize">servering + takeaway + levering</span>

                <a
                    className="px-3 py-1 bg-pink-600 block max-w-fit text-md uppercase font-Oswald text-white rounded-xl hover:bg-pink-500 mt-4"
                    href="https://www.foodora.no/restaurant/n2xs/illegal-burger-ryes-plass?fbclid=IwAR0yYzxNcQfexGCCzh3kPJvr5W5iinwGqcJ3_P2eDRwh32dTWfTAsON-UFE"
                    target="_blank"
                    rel="noopener noreferrer">
                    bestill på foodora
                </a>
            </div>

            <div className="h-[3px] w-[90%] mx-auto bg-illegalBlack rounded-xl my-12 md:h-[90%] md:w-[3px]"/>

            <div className="mt-4 mb-10">
                <address>
                <div className="font-Oswald text-3xl font-bold uppercase text-illegalBlack">Møllergata 23</div>
                </address>

                <OpeningHours regular="16-21" fri="12-22" sat="16-22" sun="16-21"/>
                <div className="font-Oswald font-bold text-lg uppercase text-illegalBlack tracking-wider">
                    ring for take-away
                    <span className="font-thin ml-2">22 20 33 02</span>
                </div>
                <span className="font-Oswald text-sm text-illegalRed capitalize">servering + takeaway</span>
            </div>
        </div>

    </motion.div>
  )
}

export default Contact