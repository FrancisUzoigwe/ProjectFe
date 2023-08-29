import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { BsClipboard2Data } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { MdDoneAll } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../../global/globalFile";
import { ImExit } from "react-icons/im";
import Swal from "sweetalert2";

const UserSider = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const onChanglength = () => {
    dispatch(changeToggle(!toggle));
  };

  return (
    <div>
      <div
        className={`w-[${
          !toggle ? "250px" : "70px"
        }] h-full overflow-hidden fixed bg-[#CD5A91] flex flex-col ${
          toggle && "items-center"
        } duration-500 transition-all  text-white`}
      >
        {!toggle ? (
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
              <BsArrow90DegLeft
                className=" text-[14px]"
                onClick={onChanglength}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="hover:bg-[#e1b3c9] duration-300 w-8 my-2 items-center flex flex-col transition-all p-2 mr-1 rounded-md">
              <BsArrow90DegRight
                className=" text-[14px]"
                onClick={onChanglength}
              />
            </div>
            <img
              src=""
              alt="p"
              className="w-[35px] h-[35px] rounded-md bg-green-200"
            />
          </div>
        )}

        {!toggle && (
          <span className="my-2 text-[15px] w-[250px] pl-2">
            Workspace views
          </span>
        )}

        {/*Create */}
        {!toggle ? (
          <div
            onClick={() => {
              Swal.fire({
                icon: "info",
                text: "Go Premium To access this features",
                timer: 3000,
                timerProgressBar: true,
                background: "#e1b3c9",
                confirmButtonColor: "#9C446E",
                iconColor: "#fa7cb9",
                width: "800px",
                heightAuto: true,
              });
            }}
            className="pl-2 py-1  text-[14px] cursor-pointer duration-300 transition-all mt-3 flex items-center hover:bg-[#e1b3c9]"
          >
            <BsClipboard2Data className="text-[30px]" />
            <span className="ml-2">Work Flow</span>
          </div>
        ) : (
          <div
            onClick={() => {
              Swal.fire({
                icon: "info",
                text: "Go Premium To access this features",
                timer: 3000,
                timerProgressBar: true,
                background: "#e1b3c9",
                confirmButtonColor: "#9C446E",
                iconColor: "#fa7cb9",
                width: "800px",
                heightAuto: true,
              });
            }}
            className="w-full py-2 text-[14px] cursor-pointer duration-300 transition-all mt-3 flex justify-center hover:bg-[#e1b3c9]"
          >
            <BsClipboard2Data className="text-[30px]" />
          </div>
        )}
        {/*View */}
        {!toggle ? (
          <div
            onClick={() => {
              Swal.fire({
                icon: "info",
                text: "Go Premium To access this features",
                timer: 3000,
                timerProgressBar: true,
                background: "#e1b3c9",
                confirmButtonColor: "#9C446E",
                iconColor: "#fa7cb9",
                width: "800px",
                heightAuto: true,
              });
            }}
            className="pl-2 py-1 text-[14px] cursor-pointer duration-300 transition-all mt-3 flex items-center hover:bg-[#e1b3c9]"
          >
            <CiViewList className="text-[30px]" />
            <span className="ml-2">View Tasks</span>
          </div>
        ) : (
          <div
            onClick={() => {
              Swal.fire({
                icon: "info",
                text: "Go Premium To access this features",
                timer: 3000,
                timerProgressBar: true,
                background: "#e1b3c9",
                confirmButtonColor: "#9C446E",
                iconColor: "#fa7cb9",
                width: "800px",
                heightAuto: true,
              });
            }}
            className="w-full py-2 text-[14px] cursor-pointer duration-300 transition-all mt-3 flex justify-center hover:bg-[#e1b3c9]"
          >
            <CiViewList className="text-[30px]" />
          </div>
        )}
        {/*Progress */}
        {!toggle ? (
          <div
            onClick={() => {
              Swal.fire({
                icon: "info",
                text: "Go Premium To access this features",
                timer: 3000,
                timerProgressBar: true,
                background: "#e1b3c9",
                confirmButtonColor: "#9C446E",
                iconColor: "#fa7cb9",
                width: "800px",
                heightAuto: true,
              });
            }}
            className="pl-2 py-1  text-[14px] cursor-pointer duration-300 transition-all mt-3 flex items-center hover:bg-[#e1b3c9]"
          >
            <GiProgression className="text-[30px]" />
            <span className="ml-2">Ongoing</span>
          </div>
        ) : (
          <div
            onClick={() => {
              Swal.fire({
                icon: "info",
                text: "Go Premium To access this features",
                timer: 3000,
                timerProgressBar: true,
                background: "#e1b3c9",
                confirmButtonColor: "#9C446E",
                iconColor: "#fa7cb9",
                width: "800px",
                heightAuto: true,
              });
            }}
            className="py-2 w-full text-[14px] cursor-pointer duration-300 transition-all mt-3 flex justify-center hover:bg-[#e1b3c9]"
          >
            <GiProgression className="text-[30px]" />
          </div>
        )}
        {/*History */}
        {!toggle ? (
          <div
            onClick={() => {
              Swal.fire({
                icon: "info",
                text: "Only an Admin can View this Features",
                timer: 3000,
                timerProgressBar: true,
                background: "#e1b3c9",
                confirmButtonColor: "#9C446E",
                iconColor: "#fa7cb9",
                width: "800px",
                heightAuto: true,
              });
            }}
            className="pl-2 py-1  text-[14px] cursor-pointer duration-300 transition-all mt-3 flex items-center hover:bg-[#e1b3c9]"
          >
            <MdDoneAll className="text-[30px]" />
            <span className="ml-2">History</span>
          </div>
        ) : (
          <div onClick={() => {
            Swal.fire({
              icon: "info",
              text: "Only an Admin can View this Features",
              timer: 3000,
              timerProgressBar: true,
              background: "#e1b3c9",
              confirmButtonColor: "#9C446E",
              iconColor: "#fa7cb9",
              width: "800px",
              heightAuto: true,
            });
          }} className="py-2 w-full  text-[14px] cursor-pointer duration-300 transition-all mt-3 flex justify-center hover:bg-[#e1b3c9]">
            <MdDoneAll className="text-[30px]" />
          </div>
        )}
        {/* <div className="border-[silver] h-[50px] flex justify-center items-center pt-2 w-full border"> */}
        {!toggle ? (
          <button className="ml-1 mt-[170px] w-[240px] bg-[#e1b3c9] py-2 hover:border hover:bg-[#f7b7d6] text-[16px] rounded-[20px]">
            logout
          </button>
        ) : (
          <div className="mt-[170px] w-[60px] rounded-full bg-[#e1b3c9] py-2 hover:border hover:bg-[#f7b7d6]  flex justify-center text-[25px]">
            <ImExit />
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default UserSider;
