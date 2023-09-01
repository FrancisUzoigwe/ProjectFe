import { MdAssignmentInd, MdDoneAll } from "react-icons/md";
import { BiSolidHandRight } from "react-icons/bi";
import { SiProgress } from "react-icons/si";
import { useSelector } from "react-redux";
import { useReadProgress, useUserTask } from "../../hooks/useUserTaskHook";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteTask, toProgressAPI } from "../../apis/taskAPI";
import { useState } from "react";
import Swal from "sweetalert2";

const User = () => {
  const client = new QueryClient();
  const toggle = useSelector((state: any) => state.toggle);
  const userID = useSelector((state: any) => state.user);
  const [taskID, setTaskID] = useState<string>("");
  const { data, isLoading } = useUserTask();
  const mutation = useMutation({
    mutationKey: ["progress"],
    mutationFn: () => toProgressAPI(userID, taskID),
    onSuccess: () => {
      client.invalidateQueries();
    },
  });
  const { progress } = useReadProgress();
  return (
    <div>
      <div
        className={`flex transition-all duration-100 justify-between  w-[${
          !toggle ? "calc(100vw-250px)" : "calc(100vw-70px)"
        }] text-[14px] text-white border-l-[silver] h-full`}
      >
        {/*Assignment */}

        <div className="w-[100%] m-4 p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
          <div className="w-full flex justify-between mb-2">
            <span>Assignment</span>
            <MdAssignmentInd className="text-[25px]" />
          </div>

          {isLoading ? (
            <div>...loading</div>
          ) : (
            <div>
              {data?.task?.map((el: any) => (
                <div>
                  <div className="w-full bg-[#e1b3c9] my-2 min-h-[100px] flex justify-between p-1 rounded-md">
                    <div key={el?._id}>
                      <p className="uppercase text-[13px] text-[#4c3a3a]">
                        {el?.task}
                      </p>
                      <p className="capitalize text-[14px] text-[#9d3266]">
                        {el?.priority}
                      </p>
                      <p className="capitalize text-[16px]">{el?.name}</p>
                      <br />
                      <div
                        className={`flex flex-1 w-[${
                          !toggle ? "260px" : "320px"
                        }] justify-between "`}
                      >
                        <p className="text-rose-500 text-[8px]">
                          {el?.createdAt}
                        </p>
                        <div className="relative w-[200px] flex justify-end">
                          <BiSolidHandRight
                            onChange={(e: any) => {
                              e.target.value;
                            }}
                            className="text-[25px] cursor-pointer hover:scale-[1.08] hover:text-green-400 duration-300 transition-all"
                            onClick={() => {
                              if (el?._id !== userID) {
                                deleteTask(el?._id);
                                mutation.mutate(el);
                                Swal.fire({
                                  icon: "success",
                                  text: "Authorized move to progress",
                                  timer: 3000,
                                  timerProgressBar: true,
                                });
                              } else {
                                console.log("new: ", el?._id);
                                Swal.fire({
                                  icon: "error",
                                  text: "Unauthorized move",
                                  timer: 3000,
                                  timerProgressBar: true,
                                });
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src={el?.taskAvatar}
                      alt="p"
                      className="w-[95px] object-cover h-[110px] rounded-md bg-green-200"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/*Ongoing */}
        <div className="w-[100%] m-4 p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
          <div className="w-full flex justify-between mb-2">
            <span>Ongoing</span>
            <SiProgress className="text-[25px]" />
          </div>
          {progress?.data?.map((el: any) => {
            return (
              <div
                key={el?._id}
                className="w-full bg-[#e1b3c9] my-2 min-h-[100px] flex justify-between p-1 rounded-md"
              >
                <div>
                  <p className="uppercase text-[13px] text-[#4c3a3a]">
                    {el?.task}
                  </p>
                  <p className="capitalize text-[14px] text-[#9d3266]">
                    {el?.priority}
                  </p>
                  <p className="capitalize text-[16px]">name</p>
                  <br />
                  <div
                    className={`flex flex-1 w-[${
                      !toggle ? "260px" : "320px"
                    }] justify-between "`}
                  >
                    <p className="text-rose-500">12.00am</p>
                    <div className="relative w-[200px] flex justify-end">
                      <BiSolidHandRight className="text-[25px] cursor-pointer hover:scale-[1.08] hover:text-green-400 duration-300 transition-all" />
                    </div>
                  </div>
                </div>
                <img
                  src=""
                  alt="p"
                  className="w-[95px] h-[110px] rounded-md bg-green-200"
                />
              </div>
            );
          })}
        </div>
        {/*done */}
        <div className="w-[100%] m-4 p-3 min-h-[250px] bg-[#4c3a3a] rounded-[20px]">
          <div className="w-full flex justify-between mb-2">
            <span>Finished</span>
            <MdDoneAll className="text-[25px]" />
          </div>
          <div className="w-full bg-[#e1b3c9] my-2 min-h-[100px] flex justify-between p-1 rounded-md">
            <div>
              <p className="uppercase text-[13px] text-[#4c3a3a]">task</p>
              <p className="capitalize text-[14px] text-[#9d3266]">priority</p>
              <p className="capitalize text-[16px]">name</p>
              <br />
              <div
                className={`flex flex-1 w-[${
                  !toggle ? "260px" : "320px"
                }] justify-between "`}
              >
                <p className="text-rose-500">12.00am</p>
                <div className="relative w-[200px] flex justify-end">
                  <BiSolidHandRight className="text-[25px] cursor-pointer hover:scale-[1.08] hover:text-green-400 duration-300 transition-all" />
                </div>
              </div>
            </div>
            <img
              src=""
              alt="p"
              className="w-[95px] h-[110px] rounded-md bg-green-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
