import images from "../../assets/undraw_add_notes_re_ln36.svg";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createTask } from "../../apis/taskAPI";
import { QueryClient } from "@tanstack/react-query";
import { useReadAllUsers, useUserByName } from "../../hooks/useUserAuthHook";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const Task = () => {
  const admin = useSelector((state: any) => state.admin);
  // const users = useSelector((state: any) => state.user);
  // const queryClient = new QueryClient();
  // const [tasked, setTasked] = useState<string>("");
  // const [state, setState] = useState<string>("");
  // const [priority, setPriority] = useState<string>("");

  // const mutate = useMutation({
  //   mutationKey: ["tasks"],
  //   mutationFn: (datab: {}) =>
  //     createTask(admin._id, users._id, (datab = { tasked, priority })),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["tasks"] });
  //   },
  // });

  // const onSubmit = () => {
  //   mutate.mutate(createTask);
  // };

  // const { user, isLoad } = useUserByName(state);
  // console.log(state);

  const [task, setTask] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [userIDs, setuserIDs] = useState<string>("");
  const { data } = useReadAllUsers();

  function createFn(): any {
    createTask(admin, userIDs, { task: task, priority: priority });
  }
  console.log("data: ", userIDs);

  return (
    <div className="">
      <img src={images} className="fixed" />

      <p className="text-right mr-5 text-[70px] absolute right-4 font-semibold text-white">
        Project.io
      </p>
      <div className="w-full  flex justify-center items-center flex-col h-[100vh]">

        <div className="text-purple-800">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter: any) => {
              typewriter

                .typeString("Created by Team Project.io.")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Project manager/Functionalities: Okoro Franklin")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Scrum Master: Uzoigwe Francis")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Backend Lead: Umegakwe Tochukwu")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Frontend Lead: Uzoigwe Francis")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Frontend Dev: Nwachukwu Thywill")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Frontend Dev: Chukwuyelum Blessing")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Backend Dev: Anthony Onyemaobi")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Backend Dev: Okoro Franklin")
                .pauseFor(1500)
                .deleteAll()

                .typeString("Great things happen with team work")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="assign task"
          className="w-[50%] caret-rose-400 z-10 placeholder:text-rose-400 border h-[40px] rounded outline-none pl-2 capitalize"
        />
        <div className="mb-5 flex justify-end w-[50%]">
          <span className="bg-rose-400 lowercase cursor-default px-[20px] rounded text-white">
            assign task to user
          </span>
        </div>
        {/*Users */}
        <select
          onChange={(e) => {
            setuserIDs(e.target.value);
          }}
          className="outline-none w-[50%] rounded h-[35px] text-purple-400"
        >
          {data?.map((el: any) => (
            <option key={el?._id}>{el?.name}</option>
          ))}
        </select>
        <div className="mb-5 flex justify-end w-[50%]">
          <span className="bg-purple-400 lowercase cursor-default px-[20px] rounded text-white">
            Select a user
          </span>
        </div>
        {/*Priority */}
        <select
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          className="outline-none w-[50%] h-[35px] text-pink-400"
        >
          <option>Urgent</option>
          <option>High</option>
          <option>Low</option>
        </select>
        <div className="mb-5 flex justify-end w-[50%]">
          <span className="bg-pink-400 lowercase cursor-default px-[20px] rounded text-white">
            prioritize the task
          </span>
        </div>
        <br />
        <label
          onClick={() => {
            createFn();
            Swal.fire({
              icon: "success",
              text: `Task Assigned to ${userIDs.toUpperCase()}`,
              timer: 3000,
              timerProgressBar: true,
            });
          }}
          className="px-[35px] py-4 hover:bg-green-300 bg-rose-300 duration-300 transition-all hover:rounded-[30px] capitalize cursor-pointer"
        >
          assign task
        </label>
      </div>
    </div>
  );
};

export default Task;
