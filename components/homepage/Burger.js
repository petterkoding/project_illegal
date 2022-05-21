const Burger = ({types, index}) => {
    console.log(types)

return (
    <div className="bg-illegalBlue/20 flex flex-row h-auto px-6 py-6 gap-x-2 rounded-md relative">
        <div className="text-3xl font-Roboto text-illegalBlack absolute left-1 top-1">{index+1}</div>

        <div>
            <h3 className="text-illegalGreen uppercase font-Koulen text-2xl">
                {types.name}
            </h3>
            <h4 className="text-sm font-Noto uppercase text-illegalBlack">{types.slogan}</h4>

            <div className="flex flex-wrap mt-1">
                {types.ingridients.map((el, index) => 
                    <span key={index} className="text-gray-600 text-sm">{types.ingridients.length === index + 1 ? el.concat(".") : el.concat(",")}</span>
                )}
            </div>

            
          

            <div className="flex flex-row mt-4">
                {/* first row */}
                <div className="flex flex-col px-2">
                {types.patties.map((el) => (
                    <p key={el._id}>
                        <span className="mr-1 md:mr-2 font-bold uppercase text-xs">{el.type}</span>
                        <span>{el.grams}g</span>
                    </p>
                ))}
                </div>

                {/* second row */}

                <div className="flex flex-col mx-1 md:mx-4 md:px-2 space-y-1">
                    
                    {/* <div className="text-illegalRed text-xs font-bold underline">enkel</div> */}
                    <span className="text-sm font-bold">{types?.price_single_beef},-</span>
                    <span className="text-sm font-bold">{types?.price_single_fish},-</span>
                    <span className="text-sm font-bold">{types?.price_single_vegetar},-</span>
                </div>


                {/* third row */}
                <div className="flex flex-col px-2 space-y-1">
                    
                    {/* <div className="text-illegalRed text-xs font-bold underline">dobbel</div> */}
                    <span className="text-sm font-bold">{types?.price_double_beef},-</span>
                    <span className="text-sm font-bold">{types?.price_double_fish},-</span>
                    <span className="text-sm font-bold">{types?.price_double_vegetar},-</span>

                </div>

            </div>

        </div>
    </div>
)
}

export default Burger