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
        <div className="flex flex-col lg:flex-row h-auto justify-center lg:justify-start items-center my-10">
            <MainExtra item={menu[0]}/>
            <div className="flex items-center w-full">

                <div className="h-[140px] w-[4px] bg-illegalBlack rounded-lg lg:mx6 hidden lg:block"/>
                <span className="text-3xl uppercase font-Oswald font-bold rotate-[-90deg] inline-block text-illegalRed">extras</span>

                <div className="w-full flex flex-col lg:flex-row justify-between lg:space-x-6 mr-10 lg:mr-0">

                    <div className="flex flex-col lg:flex-1 justify-start">
                        {leftMenu.map((item) => 
                            <ExtrasRow key={item._id} extra={item} />
                        )}
                    </div>

                    <div className="flex flex-col flex-1 mt-12 lg:mt-0">
                        {rightMenu.map((item) => 
                            <ExtrasRow key={item._id} extra={item} />
                        )}
                    </div>
                </div>
            </div>

        </div>
        <VerticalLine/>
    </div>
  )
}

export default Extras