import pix from "../../assets/team.svg";

const History = () => {
  return (
    <div className="h-[100vh] p-5 w-[100%] flex-col flex-wrap">
      <div className="w-[350px] p-3 flex flex-col justify-evenly m-4 h-[150px] border-[1px] border-[white] rounded-md">
        <span className="font-bold text-[13px] text-[white]">
          Name of progress
        </span>
        <p className="font-bold text-[13px] text-[white]">
          priority of progress
        </p>
        <div>
          <img
            src={pix}
            className="w-[50px] h-[50px] border-[1px] border-[silver] rounded-full"
          />
          <span className=" text-[12px] font-bold ml-[8px] text-[white]">
            Task creator
          </span>
        </div>
      </div>
    </div>
  );
};

export default History;
