import { BsArrow90DegLeft } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { BsClipboard2Data } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { MdDoneAll } from "react-icons/md";

const UserSider = () => {
  return (
    <div className="w-[250px] h-full overflow-hidden bg-[#CD5A91]  text-white">
      <div className="border-slate-300 border-b-[1px] border-l-[transparent] border-r-[transparent] pl-2 py-2 flex items-center">
        <img
          src=""
          alt="p"
          className="w-[35px] h-[35px] rounded-md bg-green-200"
        />
        <div className="flex flex-col text-[13px] ml-2 flex-1 ">
          <span>Jemima's workspace</span>
          <span>email.@gmail.com</span>
        </div>
        <div className="hover:bg-[#e1b3c9] duration-300 transition-all p-2 mr-1 rounded-md">
          <BsArrow90DegLeft className=" text-[14px]" />
        </div>
      </div>

      <span className="my-2 text-[15px] w-[250px] pl-2">Workspace views</span>

      {/*Create */}
      <div className="pl-2 py-1  text-[14px] cursor-pointer duration-300 transition-all mt-3 flex items-center hover:bg-[#e1b3c9]">
        <BsClipboard2Data className="text-[30px]" />
        <span className="ml-2">Work Flow</span>
      </div>
      {/*View */}
      <div className="pl-2 py-1 text-[14px] cursor-pointer duration-300 transition-all mt-3 flex items-center hover:bg-[#e1b3c9]">
        <CiViewList className="text-[30px]" />
        <span className="ml-2">View Tasks</span>
      </div>
      {/*Progress */}
      <div className="pl-2 py-1  text-[14px] cursor-pointer duration-300 transition-all mt-3 flex items-center hover:bg-[#e1b3c9]">
        <GiProgression className="text-[30px]" />
        <span className="ml-2">Ongoing</span>
      </div>
      {/*History */}
      <div className="pl-2 py-1  text-[14px] cursor-pointer duration-300 transition-all mt-3 flex items-center hover:bg-[#e1b3c9]">
        <MdDoneAll className="text-[30px]" />
        <span className="ml-2">History</span>
      </div>
      {/* <div className="border-[silver] h-[50px] flex justify-center items-center pt-2 w-full border"> */}
      <button className="mt-[170px] w-full bg-[#e1b3c9] py-2 hover:border hover:bg-[#f7b7d6] text-[16px] rounded-md">
        logout
      </button>
      {/* </div> */}
    </div>
  );
};

export default UserSider;
