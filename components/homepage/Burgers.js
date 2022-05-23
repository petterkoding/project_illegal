import Burger from "./Burger"

const Burgers = ({menu}) => {
  return (
    // <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 my-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 my-6">
         {menu.map((burgers, index) => (
          <Burger key={burgers._id} index={index} types={burgers}/>
        ))}
    </div>
  )
}

export default Burgers


