import ExtrasRow from "./ExtrasRow"

const Beverages = ({menu}) => {

    console.log(menu)

  return (
    <div className="h-80 flex bg-red-200 mb-20">
        <div className="font-Noto uppercase text-5xl text-illegalBlack rotate-[-90deg] inline-block">drikkevarer</div>

        <div>
            {menu.map((beverage) =>
                // <ExtrasRow extra={beverage} />
            )}
        </div>
    </div>
  )
}

export default Beverages