import { BsFacebook, BsInstagram } from "react-icons/bs"
import { GiLaurelCrown } from "react-icons/gi"
import { Link } from "react-router-dom"
const FootProps = () => {
  return (
    <div id="about" >
        <div className="w-full h-auto flex justify-center flex-col items-center bg-black">
      
      <div className="text-white flex  justify-center w-[93%] h-[200px] ">
        <div className="flex items-center justify-between h-full w-full">
          <div className=" h-[160px]">
            <div className="flex items-center justify-center hover:text-gray-400 duration-300 cursor-pointer">
              <div className="ml-[7px] font-Poppins mt-[3px] text-[17px]">
                project.io
              </div>
            </div>
          </div>
          <div className="text-center h-[160px] ">
            <div className="text-[15px] hover:text-gray-400 duration-300 cursor-pointer text-left">
              Company
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              CodeLab By SkillHub
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Brighter Day CodeLab
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              About Us
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Careers
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Vacancies
            </div>
          </div>
          <div className="text-center h-[160px] ">
            <div className="text-[15px] hover:text-gray-400 duration-300 cursor-pointer text-left">
              Address
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              #31 Haruna, Off Chidi Bus-stop, <br /> Ajeromi-Ifelodun Local Govt
              Area, <br />
              Lagos state, Nigeria
            </div>
          </div>
          <div className="text-center h-[160px] ">
            <div className="text-[15px] hover:text-gray-400 duration-300 cursor-pointer text-left ">
              Backend Team
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Tochuwku Umegakwe
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Anthony Onyemaobi
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Okoro Franklin
            </div>
           
          </div>
          <div className="text-center h-[160px] ">
            <div className="text-[15px] hover:text-gray-400 duration-300 cursor-pointer text-left">
              Frontend Team
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Francis Uzoigwe
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Okoro Franklin
            </div>
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              ThyWill Nwachukwu
            </div>
            {/* <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Jonathan Wisdom
            </div> */}
            <div className="text-[12px] hover:text-gray-400 duration-300 cursor-pointer mt-2 text-left">
              Blessing Chukwuyenum
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white w-full flex items-center justify-center">
        <div className="w-[90%] h-[60px]  flex justify-end items-center">
          <div className=" flex justify-between w-[8%] h-[60px]  items-center ">
            <Link to="https://facebook.com/francisuzoigwe.28">
              {" "}
              <div className="w-[40px] h-[40px] rounded-[50%] ">
                <BsFacebook className="w-[35px] h-[35px]" />
              </div>
            </Link>
            <Link to="https://www.instagram.com/francisuzoigwe.28">
              <div className="w-[40px] h-[40px] rounded-[50%] ">
                <BsInstagram className="w-[35px] h-[35px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[auto] flex items-center justify-center">
        <div className="w-[93%] h-[20px] flex items-center justify-end">
        <div className="text-white text-[12px] hover:text-gray-400 duration-300 cursor-pointer">CodeLab Set07 team productivity tool ©️all rights reserved </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FootProps