
const Burger = ({types, index}) => {

    const hasPrice = (value) => {
        if(value < 1 || undefined || null){
            return
        }
        else if(value > 1){
            return value + ",-"
        }
    }

return (
    <div
        className="bg-illegalBlue/10 flex flex-col h-auto px-2 py-6 gap-x-2 rounded-md">

        <div className="flex flex-row">
            <div className="text-7xl font-Roboto text-illegalBlack mr-2 font-bold">{index+1}</div>

            <div>
                <h3 className="text-illegalGreen uppercase font-Koulen text-3xl">
                    {types.name}
                </h3>

                
                <div className="flex flex-row justify-between items-center">
                    <h4 className="text-md font-Noto uppercase text-gray-700 mr-2">{types.slogan}</h4>


                    {/* allergens */}
                    <div className="text-xs text-gray-600">
                        {types?.allergens.map((type, index) => 
                        <span key={index} className="mr-1">{types.allergens.length === index + 1 ? type.shortened : type.shortened.concat(",")}</span>
                    )}
                    </div>
                </div>
            </div>
        </div>

        <div>

            <div className="flex flex-wrap mt-2">
                {types.ingridients.map((el, index) => 
                    <span key={index} className="text-gray-600 text-sm ml-1">{types.ingridients.length === index + 1 ? el.concat(".") : el.concat(",")}</span>
                )}
            </div>

            

            <div className="flex flex-row mt-4 w-full">
              
                <div className="flex flex-col px-2 font-Noto space-y-1 w-full">
                    <span className="h-4 bg-illegalGreen"/>
                {types.patties.map((el, index) => (
                    <p key={index}>
                        <span className="mr-1 md:mr-2 uppercase font-Noto font-semibold text-sm">{el.type}</span>
                        <span className="text-sm">{el.grams}g</span>
                    </p>
                ))}
                </div>

                <div className="flex flex-col px-2 space-y-2 text-illegalBlack font-Roboto w-full">
                    
                    <div className="text-illegalRed font-Roboto font-bold text-xs underline h-4 tracking-wider">enkel</div>
                    <span className="text-sm font-bold">{hasPrice(types?.price_single_beef)}</span>
                    <span className="text-sm font-bold">{hasPrice(types?.price_single_fish)}</span>
                    <span className="text-sm font-bold">{hasPrice(types?.price_single_vegetar)}</span>
                </div>


                <div className="flex flex-col px-2 space-y-2 text-illegalBlack font-Roboto w-full">
                    
                    {types.double && <div className="text-illegalRed text-xs font-Roboto font-bold underline tracking-wider">dobbel</div>}
                    <span className="text-sm font-bold">{hasPrice(types?.price_double_beef)}</span>
                    <span className="text-sm font-bold">{hasPrice(types?.price_double_fish)}</span>
                    <span className="text-sm font-bold">{hasPrice(types?.price_double_vegetar)}</span>

                </div>

            </div>

            

        </div>


        

    </div>
)
}

export default Burger