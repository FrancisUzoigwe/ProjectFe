// import Typewriter from "typewriter-effect";
import { useAdminTask } from "../../hooks/useAdminHook";

const ViewTask = () => {
  const { data, isLoading } = useAdminTask();

  return (
    <div>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <div>
          {data?.map((el: any) => (
            <div
              key={el?._id}
              className="w-[350px] hover:scale-[1.03] duration-300 transition-all cursor-pointer m-3 p-2 rounded shadow-md bg-white h-[200px] border"
            >
              <div className="flex mb-1">
                <img
                  src={el?.taskAvatar}
                  alt=""
                  className="bg-green-500 border object-cover w-[150px] h-[150px] rounded "
                />
                <div className="flex flex-col ml-2 h-[150px] justify-between">
                  <span className=" capitalize font-bold text-[13px] text-rose-400">
                    Time: {el?.createdAt}
                  </span>
                  <span className="capitalize font-bold text-[13px] text-purple-400">
                    name: {el?.name}
                  </span>
                  <span className="capitalize font-bold text-[13px] text-slate-400">
                    priority: {el?.priority}
                  </span>
                </div>
              </div>
              <span className="uppercase font-bold text-green-400">
                Task:
                <span className="text-[12px] lowercase"> {el?.task}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewTask;

// import { useAdminTask } from "../../hooks/useAdminHook";

// const ViewTask = () => {
//   const { data, isLoading } = useAdminTask();
//   return (
//     <div>
//       <div className="p-3 w-full min-h-[100vh] flex justify-center flex-wrap">
//         {isLoading ? (
//           <div>...loading</div>
//         ) : (
//           <div>
//             {data?.map((el: any) => {
//               <div key={el?._id} className="w-[350px] p-2 rounded shadow-md bg-white h-[200px] border">
//                 <div className="flex mb-1">
//                   <img
//                     src={el?.taskAvatar}
//                     alt=""
//                     className="bg-green-500 object-cover w-[150px] h-[150px] rounded "
//                   />
//                   <div className="flex flex-col ml-2 h-[150px] justify-between">
//                     <span className=" capitalize font-bold text-[13px] text-rose-400">
//                       Time:{el?.createdAt}
//                     </span>
//                     <span className="capitalize font-bold text-[13px] text-purple-400">
//                       name:{el?.name}
//                     </span>
//                     <span className="capitalize font-bold text-[13px] text-slate-400">
//                       priority:{el?.priority}
//                     </span>
//                   </div>
//                 </div>
//                 <span className="uppercase font-bold text-green-400">
//                   Task:
//                 </span>
//               </div>;
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewTask;
