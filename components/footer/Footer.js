import {ExternalLinkIcon, CodeIcon} from "@heroicons/react/outline"


const Footer = () => {
  return (
    <footer className="h-auto py-8 bg-illegalGreen text-white">
      <div className="max-w-7xl mx-auto h-full px-4 py-10 relative">

        <span className="absolute bottom-0 right-0 flex items-center text-xs mr-1">
          <CodeIcon className="w-5 h-5 inline mr-1"/>
          and design by
          
          <a
            className="ml-1 font-Roboto underline"
            href="https://iversen.design"
            rel="noopener noreferrer"
            target="_blank"
            >Petter Iversen</a>
        </span>

        <div className="text-white text-3xl font-Koulen mb-1">illegal burger</div>
        <span className="text-sm text-white font-Noto block mb-6">FB @illegaburger</span>

        <a
          className="font-bold text-white flex items-center max-w-fit mb-10"
          href="https://www.foodora.no/restaurant/n2xs/illegal-burger-ryes-plass"
          rel="noreferrer noopener"
          target="_blank">
          Foodora
          <ExternalLinkIcon className="w-5 h-5 inline ml-2"/>
        </a>

        <div className="font-bold text-white font-Noto uppercase">Restauranter</div>

        <div className="flex items-center space-x-12 mt-4">
          <div className="text-md text-white">
            <address>
              <div className="font-Noto">Olaf Ryes plass 4</div>
              <div className="font-Roboto tracking-wider">21 90 19 19</div>
            </address>
          </div>

          <div className="text-md text-white">
            <address>
              <div className="font-Noto">Møllergata 23</div>
              <div className="font-Roboto tracking-wider">22 20 33 02</div>
            </address>
          </div>
        </div>

       
      </div>
    </footer>
  )
}

export default Footer