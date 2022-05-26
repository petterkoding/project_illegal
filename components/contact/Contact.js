const Contact = () => {
  return (
    <div className="px-2 mt-10">

        <h1 className="font-Oswald uppercase text-4xl text-illegalRed font-bold">Våre avdelinger</h1>
        <div className="my-4">
            <address>
                <div className="font-Oswald text-md text-illegalBlack">Olaf Ryes plass 4</div>
                <div className="font-Roboto text-md text-illegalBlack tracking-wider">21 90 19 19</div>
            </address>
        </div>

        <div className="my-4">
            <address>
              <div className="font-Oswald text-md text-illegalBlack">Møllergata 23</div>
              <div className="font-Roboto text-md text-illegalBlack tracking-wider">22 20 33 02</div>
            </address>
        </div>

        <div className="my-10">
            <h2 className="font-Oswald uppercase text-2xl text-illegalBlack font-bold mb-1">Veldig sulten?</h2>
            <h3 className="font-Oswald uppercase text-lg text-illegalBlack font-bold mb-4">Bestill levering eller takeaway hos foodora</h3>
            <a
                className="px-6 py-2 bg-pink-600 inline-block text-2xl uppercase font-Oswald text-white rounded-xl hover:bg-pink-500"
                href="https://www.foodora.no/restaurant/n2xs/illegal-burger-ryes-plass?fbclid=IwAR0yYzxNcQfexGCCzh3kPJvr5W5iinwGqcJ3_P2eDRwh32dTWfTAsON-UFE"
                target="_blank"
                rel="noopener noreferrer">
                bestill her
            </a>
        </div>

        <div>
            <h4 className="font-Oswald uppercase text-md text-illegalBlack font-bold mb-4">Sjekk ut facebook sida vår for siste oppdatering</h4>

            <a
                className="px-6 py-2 bg-blue-600 inline-block text-2xl uppercase font-Oswald text-white rounded-xl hover:bg-blue-500"
                href="https://www.facebook.com/illegaburger"
                target="_blank"
                rel="noopener noreferrer"
            >
             facebook - illegal burger
            </a>


        </div>
    </div>
  )
}

export default Contact