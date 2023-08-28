import trello from "../../assets/hello.png"
const SecondPart = () => {
  return (
    <div className="bg-white w-full h-auto flex justify-center">
        <div className="w-[93%] h-[auto]">
            <div className="font-medium text-[20px]">Page 101</div>
            <div className="font-semibold text-[30px] mt-[10px]">A Productivity powerhouse</div>
            <div className="font-medium text-[16px] w-[41%] mt-[20px]">Simple, flexible, and powerful. All it takes are boards, lists and  cards to get a clear view of 
                who' doing what and what needs to be gotten done. Learn more in our <span className="underline">guide for getting started</span>
            </div>
        <div className="w-full h-auto mt-[20px] flex flex-col ">
            <div className="flex justify-between items-center w-[100%]">
                <div className="w-[75%]">
                <div className="flex hover:shadow-xl duration-300 cursor-pointer w-[65%] h-[150px]">
                    <div className="w-[10px] h-[full] bg-green-400 rounded-tl-[5px] rounded-bl-[5px]"></div>
                    <div className="ml-[10px]">
                    <div className="font-semibold mt-[5px]">Boards</div>
                    <div className="mt-[5px]">Project.io boards keep taks organized and work moving 
                        foward. In a glance , see everything from "things to do" to "aww yeah, we did it"
                    </div>
                    </div>
                </div>
                <div className="flex hover:shadow-xl duration-300 cursor-pointer w-[65%] h-[150px] mt-[50px]">
                    <div className="w-[10px] h-[full] bg-green-400 rounded-tl-[5px] rounded-bl-[5px]"></div>
                    <div className="ml-[10px]">
                    <div className="font-semibold mt-[5px]">Lists</div>
                    <div className="mt-[5px]">the different stages of a task. Start as simple as To Do, Doing or Done-or build a workflow
                    custom fit to yorur team's needs. There's no wronf way to project.io
                    </div>
                    </div>
                </div>
                <div className="flex hover:shadow-xl duration-300 cursor-pointer w-[65%] h-[150px] mt-[50px]">
                    <div className="w-[10px] h-[90%] bg-green-400 rounded-tl-[5px] rounded-bl-[5px]"></div>
                    <div className="ml-[10px]">
                    <div className="font-semibold mt-[5px]">Cards</div>
                    <div className="mt-[5px]">Cards respresent tasks and ideas and hold all the information 
                    to get the job done. As you make progress, move cards across lists to show theier status.
                    </div>
                    </div>
                </div>
                </div>
                <div className="w-[100%] mt-[-70px]">
                    <div className="w-[100%] h-[400px] ">
                        <img src={trello} alt="" className="object-cover  w-full " />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SecondPart