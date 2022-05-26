import {ExternalLinkIcon, CodeIcon} from "@heroicons/react/outline"


const Footer = () => {
  return (
    <footer className="h-auto py-12 bg-illegalGreen text-white relative">

      <span className="absolute bottom-5 right-5 flex items-center text-xs mr-1">
        <CodeIcon className="w-5 h-5 inline mr-1"/>
          av
          
        <a
          className="ml-1 font-Roboto underline hover:text-illegalBlack"
          href="https://iversen.design"
          rel="noopener noreferrer"
          target="_blank"
        >
          Petter Iversen</a>
      </span>


      <div className="max-w-3xl mx-auto h-full px-4 py-10 flex flex-col items-center">

      

        <div className="text-white text-3xl font-Koulen mb-1">illegal burger</div>
        <span className="text-sm text-white font-Oswald block mb-6">facebook @illegaburger</span>

        <a
          className="font-bold text-white flex items-center max-w-fit mb-10"
          href="https://www.foodora.no/restaurant/n2xs/illegal-burger-ryes-plass"
          rel="noreferrer noopener"
          target="_blank">
          Foodora
          <ExternalLinkIcon className="w-5 h-5 inline ml-2"/>
        </a>

        <div className="font-bold text-white font-Oswald uppercase tracking-wide">Restauranter</div>

        <div className="flex justify-around w-full mt-4 mb-8">
          <div className="text-md text-white">
            <address>
              <div className="font-Oswald">Olaf Ryes plass 4</div>
              <div className="font-Roboto tracking-wider">21 90 19 19</div>
            </address>
          </div>

          <div className="text-md text-white">
            <address>
              <div className="font-Oswald">Møllergata 23</div>
              <div className="font-Roboto tracking-wider">22 20 33 02</div>
            </address>
          </div>
        </div>

       
      </div>
    </footer>
  )
}

export default Footer