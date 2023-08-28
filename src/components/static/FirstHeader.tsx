import { useState } from "react"
import {BiChevronDown} from "react-icons/bi"
import { Link } from "react-router-dom"
const FirstHeader = () => {

const [scroll, setScroll] = useState<boolean>(false)
const onScroll = () => {
    setScroll(scroll!)
    if(window.scrollY >= 40){
        setScroll(true)
    }else{
        setScroll(false)
    }
}

window.addEventListener("scroll", onScroll)

  return (
    <div>
        {
            scroll? <div className="w-full h-[60px] flex justify-center items-center shadow-xl duration-300 fixed z-20 bg-white">
            <div className="w-[95%] h-[50px] justify-between items-center flex">
                <div className="w-[50%] h-[50px] flex items-center">
                    <div className="font-bold text-[20px]">project.io</div>
                    <div className="flex items-center justify-between ml-[50px] w-[100%] font-medium">
                        <div className="flex items-center cursor-pointer">Features<BiChevronDown/></div>
                        <div  className="flex items-center cursor-pointer">Solutions<BiChevronDown/></div>
                        <div className="flex items-center cursor-pointer">plans<BiChevronDown/></div>
                        <div className="flex items-center cursor-pointer">Pricing<BiChevronDown/></div>
                        <div className="flex items-center cursor-pointer">Resources<BiChevronDown/></div>
                    </div>
                </div>
                <div className="flex w-[18%] justify-between items-center">
                    <div>
                        <Link to="/ask">Login</Link>
                    </div>
                    <div className="px-3 py-4 text-white bg-blue-600">Get Troll for Free</div>
                </div>
            </div>
        </div>: <div className="w-full h-[60px] flex justify-center items-center hover:shadow-xl duration-300 fixed z-20 bg-white">
        <div className="w-[95%] h-[50px] justify-between items-center flex">
            <div className="w-[50%] h-[50px] flex items-center">
                <div className="font-bold text-[20px]">project.io</div>
                <div className="flex items-center justify-between ml-[50px] w-[100%] font-medium">
                    <div className="flex items-center cursor-pointer">Features<BiChevronDown/></div>
                    <div  className="flex items-center cursor-pointer">Solutions<BiChevronDown/></div>
                    <div className="flex items-center cursor-pointer">plans<BiChevronDown/></div>
                    <div className="flex items-center cursor-pointer">Pricing<BiChevronDown/></div>
                    <div className="flex items-center cursor-pointer">Resources<BiChevronDown/></div>
                </div>
            </div>
            <div className="flex w-[18%] justify-between items-center">
                <div>
                    <Link to="/ask">Login</Link>
                </div>
                <div className="px-3 py-4 text-white bg-blue-600">Get Troll for Free</div>
            </div>
        </div>
    </div>
        }
    </div>
  )
}

export default FirstHeader