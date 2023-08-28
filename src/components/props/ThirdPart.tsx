import Cards from "./Cards";
import { BsFillFolderFill } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
import { BiSolidLeaf } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { FaMendeley } from "react-icons/fa";
import hello from "../../assets/trello.webp"



const ThirdPart = () => {
  return (
    <div className="bg-white h-auto w-full flex justify-center flex-col">
      <div className="flex justify-center w-[95%] mt-[60px] col">
        <div className="w-[93%] ">
          <div className="font-semibold text-3xl">
            Workflows for any project, big or small
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex items-center flex-col">
        <div className="w-[95%] h-[300px]  mt-[40px] flex overflow-x-auto ">
          <div className="flex items-center justify-between ">
            <Cards
              mainbg="bg-orange-500"
              bigText="Project management"
              smallText="Keep tasks in order,
               deadlines on track, and team members aligned with Trello."
              image={<BsFillFolderFill className="w-[30px] h-[30px]" />}
              imagecol="text-[orange]"
            />
            <Cards
              mainbg="bg-blue-500"
              bigText="Meetings"
              smallText="Empower your teams meetings to be more productive, empowering, and dare
              we say-fun"
              image={<RxSpeakerLoud className="w-[30px] h-[30px]" />}
              imagecol="text-[blue]"
            />
            <Cards
              mainbg="bg-green-500"
              bigText="Onboarding"
              smallText="Onboarding to a new company or project is a snap with Trello's visual layout of to-do's, resources,
              and progressign tracking."
              image={<BiSolidLeaf className="w-[30px] h-[30px]" />}
              imagecol="text-[green]"
            />
            <Cards
              mainbg="bg-yellow-400"
              bigText="Task Management"
              smallText="Use project.io to track, manage, complete, 
              and bring tasks and bring tasks together like the pieces of a puzzle, and make your team's
              projects a cohesive success every time."
              image={<FaTasks className="w-[30px] h-[30px]" />}
              imagecol="text-[yellow]"
            />
          </div>
        </div>
        <div className="w-full h-[250px] flex flex-col items-center justify-center">
          <div className="w-[85%] h-[150px] flex items-center justify-between">
            <div className="w-[100%] flex items-center justify-between">
              <div className="w-[80%]  font-medium">
                No need to start scratch. Jump-start your workflow with a proven
                playbook disigned for different teams. Customize it to make it
                yours.
              </div>
            </div>
            <div className="w-[30%]">
              <button className="border border-[blue] rounded-[5px] px-[20px] py-[15px] ">
                Explore all Use Cases
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center bg-blue-500 ">
        <div className="w-[93%] h-auto bg-blue-500 flex justify-center flex-col items-center">
          <div className="font-semibold text-[35px] text-white mt-[30px]">
            See Work in a whole new way
          </div>
          <div className="text-white text-center mt-[20px] font-semibold">
            View your team's project from every angle and bring fresh
            perspective <br /> to the task at hand.
          </div>
          {/* <div> */}
          <button className="bg-white px-[30px] py-[10px] rounded-[3px] mt-[30px] mb-[20px] font-semibold">
            Discover all project.io views
          </button>
          {/* </div> */}
        </div>
      </div>
      {/* {Hit deadline side} */}
      <div className="w-full h-auto flex  flex-col items-center bg-blue-500">
        <div className="w-[80%] h-[400px] mt-[60px] mb-[20px] rounded-[10px] bg-white flex justify-between items-center">
          <div className="w-[60%] h-full flex justify-center items-center">
            <img src={hello} alt=""  className="w-full  object-contain"/>
          </div>
          <div className="w-[35%] h-full flex flex-col flex-wrap">
            <div className=" w-[auto] h-[30px] items-center mt-[50px] ">
              <div className="flex items-center justify-start w-[95%]">
                <div className="w-[30px] h-[30px]">
                  <FaMendeley className=" h-full w-full text-blue-400 mt-[10px]" />
                </div>
                <div className="uppercase font-extrabold mt-[20px] ml-[10px]">
                  hit deadlines every time
                </div>
              </div>
              <div className="w-[95%] mt-[30px] font-semibold">
                From weekly sprint to annual planning, Timeline view keeps all
                tasks on track. Quickly get a glimps of what's coming down the
                pipeline and identify any gaps that might impede your team's
                progress.
              </div>
              <div className="underline text-[blue] text-[20px] font-semibold mt-[20px]">
                Learn more about Timeline view.
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full h-auto flex flex-col items-center bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38">
          <div className="w-[93%] h-[300px] flex items-center flex-col">
            <div className="mt-[80px] text-white font-bold text-[30px]">Get Started with project.io today</div>
            <div className="w-[50%] h-[60px] mt-[20px] items-center flex justify-between">
              <div className="w-[400px] h-[50px] ">
                <input type="text" className="w-full h-full rounded-[7px] placeholder:px-[2px] outline-none px-[30px]"  placeholder="Email"/>
              </div>
              <div className="w-[200px] h-[50px] flex justify-center items-center">
                <button className="bg-blue-600 text-white rounded-[10px] px-[26px] py-[12px]">Sign up - it's free!</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ThirdPart;
