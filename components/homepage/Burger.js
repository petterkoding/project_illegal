
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
    <div className="bg-illegalBlue/10 flex flex-col md:flex-row h-full px-2 py-6 gap-x-2 rounded-md max-w-[860px]">

        <div className="flex flex-row md:mr-22 md:w-1/2">
            <div className="text-8xl md:text-9xl font-Roboto text-illegalBlack mr-2 font-bold">{index+1}</div>

            <div>
                <h3 className="text-illegalGreen uppercase font-Koulen text-4xl xl:text-5xl whitespace-nowrap">
                    {types.name}
                </h3>

                
                <div className="flex flex-row justify-between items-center max-w-fit">
                    <h4 className="text-xl font-Oswald font-normal uppercase text-gray-700 mr-2">{types.slogan}</h4>


                    <div className="text-xs text-gray-600">
                        {types?.allergens.map((type, index) => 
                        <span key={index} className="mr-1">{types.allergens.length === index + 1 ? type.shortened : type.shortened.concat(",")}</span>
                    )}
                    </div>
                </div>

                <div className="flex flex-wrap mt-2 max-w-[500px]">
                    {types.ingridients.map((el, index) => 
                        <span key={index} className="text-gray-600 text-sm ml-1 first:capitalize">{types.ingridients.length === index + 1 ? el.concat(".") : el.concat(",")}</span>
                    )}
                </div>

            </div>

        </div>


        <div className="flex flex-row mt-4 w-full md:max-w-[330px]">
            

            {/*patties and grams  */}
            <div className="flex flex-col px-2 font-Oswald space-y-1 w-full">
                <span className="h-4 bg-transparent"/>
                {types.patties.map((el, index) => (
                <p key={index}>
                <span className="mr-1 md:mr-2 uppercase font-Oswald font-semibold text-sm">{el.type}</span>
                <span className="text-sm">{el.grams}g</span>
                </p>
                ))}
            </div>

            {/* prices, single and double */}

            <div className="flex flex-col px-2 space-y-2 text-illegalBlack font-Roboto max-w-fit">
                    
                <div className="text-illegalRed font-Roboto font-bold text-xs underline h-4 tracking-wider">enkel</div>
                {types.price_single_beef && <span className="text-sm font-bold">{hasPrice(types?.price_single_beef)}</span>}
                {types.price_single_fish && <span className="text-sm font-bold">{hasPrice(types?.price_single_fish)}</span>}
                {types.price_single_vegetar && <span className="text-sm font-bold">{hasPrice(types?.price_single_vegetar)}</span>}
            </div>


            <div className="flex flex-col px-2 space-y-2 text-illegalBlack font-Roboto max-w-fit">
                    
                {types.double && <div className="text-illegalRed text-xs font-Roboto font-bold underline tracking-wider">dobbel</div>}
                {types.price_double_beef && <span className="text-sm font-bold">{hasPrice(types?.price_double_beef)}</span>}
                {types.price_double_fish && <span className="text-sm font-bold">{hasPrice(types?.price_double_fish)}</span>}
                {types.price_double_vegetar && <span className="text-sm font-bold">{hasPrice(types?.price_double_vegetar)}</span>}

            </div>

        </div>
    </div>
)
}

export default Burger