const Burgers = ({types, index}) => {
    console.log(types)
  return (
    <div className="flex space-x-4">
        <h3 className="text-black flex justify-center items-center"><span className="text-6xl font-Roboto">{index+1}</span>{types.name}</h3>
        <h4>{types.price_single}</h4>
        <h4>{types.double ? types.price_double : "" }</h4>
    </div>
  )
}

export default Burgers