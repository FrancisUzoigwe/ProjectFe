import images from "../../assets/undraw_add_notes_re_ln36.svg";
import Typewriter from "typewriter-effect";
import Input from "react-input-emoji";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createTask } from "../../apis/taskAPI";
import { QueryClient } from "@tanstack/react-query";
const Task = () => {
  const userID = useSelector((state: any) => state.userState);
  const queryClient = new QueryClient();
  const [tasked, setTasked] = useState<string>("");

  const mutate = useMutation({
    mutationKey: ["tasks"],
    mutationFn: (data: any) => createTask(data, userID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const onSubmit = () => {
    mutate.mutate(tasked);
  };
  return (
    <div className="">
      <img src={images} className="fixed z-0" />

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
        <input
          placeholder="assign task"
          className="my-5 w-[50%] caret-rose-400 placeholder:text-rose-400 border h-[40px] rounded outline-none pl-2 capitalize"
        />
        <select className="outline-none w-[40%] h-[35px] text-purple-400">
          <option>Urgent</option>
          <option>High</option>
          <option>Low</option>
        </select>
        <br />
        <label
          onClick={() => {
            createTask(userID, tasked);
            console.log(userID);
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
