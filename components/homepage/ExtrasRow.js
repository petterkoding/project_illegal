const ExtrasRow = ({extra, color}) => {

    const {name, price, allergens} = extra

  return (
    <div className="flex flex-row justify-between">

        <h5 className="text-illegalGreen font-bold uppercase text-lg font-Noto">
            {name}


            {allergens?.map((type, index) => 
                <span
                    className="mr-[3px] text-xs text-gray-600 first:ml-2 font-normal normal-case"
                    key={index}
                >
                        {allergens.length === index + 1 ? type.shortened : type.shortened.concat(",")}
                </span>
            )}
        </h5>


        <span className="font-Roboto text-md font-bold">{price},-</span>

    </div>
  )
}

export default ExtrasRow