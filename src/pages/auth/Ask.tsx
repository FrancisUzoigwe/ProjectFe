import { Link } from "react-router-dom"

const Ask = () => {
  return (
    <div className="w-full h-[653px] bg-whiteA flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38">
      <div className="w-[95%]  h-[600px] flex justify-center items-center">
        <div className="flex w-[30%] h-[300px]  justify-between items-center">
        <Link to="/admin/signin">
        <div className="flex items-center flex-col">
          <div className="w-[120px] h-[120px] bg-gray-400 rounded-[50%] overflow-hidden ">
            <img src="" alt="" className="object-cover w-full h-full white"/>
          </div>
          <div className="rounded-[10px] px-[20px] py-[7px] bg-white text-purple-800 mt-[20px] font-bold cursor-pointer">Signin as Admin</div>
        </div>
        </Link>
       <Link to="/signin">
       <div>
        <div className="flex items-center flex-col">
          <div className="w-[120px] h-[120px] bg-gray-400 rounded-[50%] overflow-hidden ">
            <img src="" alt="" className="object-cover w-full h-full white"/>
          </div>
          <div className="rounded-[10px] px-[20px] py-[7px] bg-white text-purple-800 mt-[20px] font-bold cursor-pointer">Signin as User</div>
        </div>
        </div>
       </Link>
        </div>
      </div>
    </div>
  )
}

export default Ask