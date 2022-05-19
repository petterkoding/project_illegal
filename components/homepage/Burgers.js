const Burgers = ({types}) => {
    console.log(types)
  return (
    <div className="flex space-x-4">
        <h3 className="text-black">{types.name}</h3>
        <h4>{types.price_single}</h4>
        <h4>{types.double ? types.price_double : "" }</h4>
    </div>
  )
}

export default Burgers