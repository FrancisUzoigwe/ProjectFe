import { MdAssignmentInd } from "react-icons/md";

const User = () => {
  return (
    <div className="flex justify-between p-3 w-[calc(100vw-250px)] text-[14px] text-white border-l-[silver] h-full bg-[#9C446E]">
      {/*Assignment */}
      <div className="w-[390px] p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
        <div className="w-full flex justify-between mb-2">
          <span>Assignment panel</span>
          <MdAssignmentInd className="text-[25px]" />
        </div>
        <div className="w-full bg-[#e1b3c9] min-h-[100px] flex items-center justify-between p-1 rounded-md">
          <span className="capitalize">project name</span>
          <img
            src=""
            alt="p"
            className="w-[35px] h-[35px] rounded-md bg-green-200"
          />
        </div>
      </div>
      {/*Ongoing */}
      <div className="w-[390px] p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
        <div className="w-full flex justify-between mb-2">
          <span>Ongoing</span>
          <MdAssignmentInd className="text-[25px]" />
        </div>
        <div className="w-full bg-[#e1b3c9] flex items-center justify-between p-1 rounded-md">
          <span className="capitalize">project name</span>
          <img
            src=""
            alt="p"
            className="w-[35px] h-[35px] rounded-md bg-green-200"
          />
        </div>
      </div>
      {/*Assignment */}
      <div className="w-[390px] p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
        <div className="w-full flex justify-between mb-2">
          <span>Finished</span>
          <MdAssignmentInd className="text-[25px]" />
        </div>
        <div className="w-full bg-[#e1b3c9] flex items-center justify-between p-1 rounded-md">
          <span className="capitalize">project name</span>
          <img
            src=""
            alt="p"
            className="w-[35px] h-[35px] rounded-md bg-green-200"
          />
        </div>
      </div>
    </div>
  );
};

export default User;
