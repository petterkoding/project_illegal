const Beverages = ({menu}) => {

  return (
    <div className="h-96 flex mb-32 py-12 relative">
        <div className="font-Oswald tracking-widest uppercase text-5xl text-illegalBlack font-bold rotate-[-90deg] inline-block absolute left-[-100px] top-1/2">drikkevarer</div>

        <div className="ml-[140px] w-1/2 flex flex-wrap">
            {menu.map((beverage) =>
            <div key={beverage._id} className="inline-block first:w-full mr-2">
                <span className="text-illegalRed mr-2 font-bold uppercase text-lg font-Oswald">{beverage.name}</span>
                <span className="text-illegalBlack font-Roboto font-bold text-md">{beverage.price},-</span>

            </div>

            )}
            <div className="text-illegalRed uppercase font-Oswald w-full font-bold">div øl på flaske, spør servitør</div>
        </div>
    </div>
  )
}

export default Beverages