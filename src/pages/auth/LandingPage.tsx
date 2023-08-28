import doc from "../../assets/image1.webp"
import {BsPlayCircle} from "react-icons/bs"
import SecondPart from "../../components/props/SecondPart"
import ThirdPart from "../../components/props/ThirdPart"
const LandingPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38 ">
      <div className="mt-[70px] h-[auto] w-[90%]  flex justify-center " >
        <div className="flex h-[85vh] w-full justify-between items-center ">
          <div className=" flex-col justify-center w-[50%] h-full text-white ">
            {/* {This is the Left part of the screen} */}
            <div className="text-5xl font-semibold mt-[90px] leading-tight">Trello brings all your tasks, teammates, and tools together</div>
            <div className="text-2xl font-medium mt-[20px]">Keep everything in the same place-even if your team isn't.</div>
            {/* {This is the email part} */}
            <div className="flex w-[500px] h-auto justify-between items-center mt-[30px]">
              <div className="w-[300px] h-[50px] rounded-sm flex" >
                <input type="text" placeholder="Email" className="w-full h-full rounded-[5px]  placeholder:px-3 text-black outline-none px-4"/>
              </div>
                <button className="px-5 py-3.5 rounded-[10px] bg-blue-600 text-white">Sign up - it's free!</button>
            </div>
            {/* {This is the Watch Video Part} */}
            <div className="mt-[20px] flex items-center justify-between w-[120px] cursor-pointer">
              <div className="underline text-[14px]">Watch Video</div>
              <div><BsPlayCircle className ="w-[25px] h-[25px]"/></div>
            </div>
          </div>
          <div className=" w-[50%] h-[580px] mt-[100px]">
            <img src={doc} alt="" className="object-cover"/>
          </div>
        </div>
      </div>
      <SecondPart/>
      <ThirdPart/>
    </div>
  )
}

export default LandingPage