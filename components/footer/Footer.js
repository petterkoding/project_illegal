import {ExternalLinkIcon} from "@heroicons/react/outline"
import Container from "../layout/Container"


const Footer = () => {
  return (
    <footer className="h-auto pt-12 pb-32 bg-illegalBlue text-white relative">
      <Container>

        <div className="flex flex-col md:flex-row justify-between">

          <div className="w-full">
            <h4 className="text-white text-5xl md:text-6xl font-Koulen mb-4">
              illegal burger
              <span className="block text-sm font-Oswald uppercase font-thin tracking-wider">burger restaurant i Oslo</span>
            </h4>

            <span className="text-md text-white font-Oswald block mb-6 first-letter:capitalize tracking-wider">facebook @illegaburger</span>
          </div>

        
        
          <div className="w-full">
            <span className="font-semibold text-xl text-white font-Oswald uppercase tracking-wider lg:mt-12 block">Restauranter</span>
            <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-32 justify-between lg:justify-start w-1/2 lg:w-full">

            <div className="flex flex-col">
              <address className="text-white text-xl">
                <div className="font-Oswald">Olaf Ryes plass 4</div>
                <div className="font-Roboto tracking-wider">21 90 19 19</div>
              </address>
            </div>
            
            <div className="flex flex-col">
              <address className="text-white text-xl">
                <div className="font-Oswald">Møllergata 23</div>
                <div className="font-Roboto tracking-wider">22 20 33 02</div>
              </address>
            </div>

            </div>
          </div>

        </div>
      
        <span className="text-gray-200 absolute bottom-10 right-5 flex items-center text-xs mr-1">
          Designet av
          <a
            className="ml-1 font-Roboto underline hover:text-illegalBlack"
            href="https://www.metricdesign.no/work/illlegal-burger"
            rel="noopener noreferrer"
            target="_blank"
            >
            Metric
          </a>
        </span>

        <span className="text-gray-200 absolute bottom-5 right-5 flex items-center text-xs mr-1">
          Kodet av
            
          <a
            className="ml-1 underline hover:text-illegalBlack"
            href="https://iversen.design"
            rel="noopener noreferrer"
            target="_blank"
            >
            Iversen Webdesign
          </a>
        </span>
      </Container>
    </footer>
  )
}

export default Footer