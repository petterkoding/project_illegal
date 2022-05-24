const MainExtra = ({item}) => {

  return (
    <div className="my-10 max-w-[300px] mb-24 md: md:mb-0">
        <h5 className="text-5xl uppercase text-illegalRed font-Noto font-bold w-4/5">{item.name}</h5>
        <span className="text-md text-illegalBlack uppercase mr-4 font-bold">{item.info}</span>
        {item.allergens.map((type, index) => 
            <span
                className="mr-[3px] text-xs text-gray-600"
                key={index}
                >
                    {item.allergens.length === index + 1 ? type.shortened : type.shortened.concat(",")}</span>
        )}
        <span className="text-illegalBlack text-3xl font-Roboto ml-2">{item.price},-</span>
    </div>
  )
}

export default MainExtra