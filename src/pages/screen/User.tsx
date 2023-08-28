import { MdAssignmentInd, MdDoneAll } from "react-icons/md";
import { BiSolidHandRight } from "react-icons/bi";
import { SiProgress } from "react-icons/si";

const User = () => {
  return (
    <div className="flex justify-between p-3 w-[calc(100vw-250px)] text-[14px] text-white border-l-[silver] h-full bg-[#9C446E]">
      {/*Assignment */}
      <div className="w-[390px] p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
        <div className="w-full flex justify-between mb-2">
          <span>Assignment</span>
          <MdAssignmentInd className="text-[25px]" />
        </div>
        <div className="w-full bg-[#e1b3c9] my-2 min-h-[100px] flex justify-between p-1 rounded-md">
          <div>
            <p className="uppercase text-[13px] text-[#4c3a3a]">project name</p>
            <p className="capitalize text-[14px] text-[#9d3266]">high</p>
            <p className="capitalize text-[16px]">franklin</p>
            <br />
            <div className="flex flex-1 w-[260px] justify-between ">
              <p className="text-rose-500">12.00am</p>
              {/* <div className="relative w-[150px] flex justify-end">
                <span className="absolute bottom-6 left-9">move to progress</span> */}
                <BiSolidHandRight className="text-[25px] cursor-pointer hover:scale-[1.08] hover:text-green-400 duration-300 transition-all" />
              {/* </div> */}
            </div>
          </div>
          <img
            src=""
            alt="p"
            className="w-[95px] h-[110px] rounded-md bg-green-200"
          />
        </div>
      </div>
      {/*Ongoing */}
      <div className="w-[390px] p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
        <div className="w-full flex justify-between mb-2">
          <span>Ongoing</span>
          <SiProgress className="text-[25px]" />
        </div>
      </div>
      {/*done */}
      <div className="w-[390px] p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
        <div className="w-full flex justify-between mb-2">
          <span>Finished</span>
          <MdDoneAll className="text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default User;
