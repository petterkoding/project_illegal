import MainExtra from "./MainExtra"
import VerticalLine from "../layout/VerticalLine"
import { useState, useEffect } from "react"
import ExtrasRow from "./ExtrasRow"

const Extras = ({menu}) => {

    const [leftMenu, setLeftMenu] = useState(menu.slice(1,8))
    const [rightMenu, setRightMenu] = useState(menu.slice(8,15))

  return (
    <div className="my-12">
        <VerticalLine/>
        <div className="flex flex-row h-auto items-center my-10">
            <MainExtra item={menu[0]}/>
            <div className="h-[140px] w-[3px] bg-illegalBlack rounded-lg mx-10"/>
            <span className="text-3xl uppercase font-Noto font-bold rotate-[-90deg] inline-block text-illegalRed">extras</span>

            <div className="w-full flex flex-row justify-between space-x-6">

                <div className="flex flex-col flex-1">
                    {leftMenu.map((item) => 
                        <ExtrasRow key={item._id} extra={item} />
                    )}
                </div>

                <div className="flex flex-col flex-1">
                    {rightMenu.map((item) => 
                        <ExtrasRow key={item._id} extra={item} />
                    )}
                </div>

               

            </div>

        </div>
        <VerticalLine/>
    </div>
  )
}

export default Extras