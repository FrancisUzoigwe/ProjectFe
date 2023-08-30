import { useAdminTask } from "../../hooks/useAdminHook";
import { useDispatch, useSelector } from "react-redux";

const ViewTask = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state: any) => state.admin);
  const { data, isLoading } = useAdminTask();
  return (
    <div>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <div>
          {data.map((el: any) => (
            <div
              key={el._id}
              className="w-[350px] min-h-[230px] flex bg-slate-400 rounded"
            >
              <img
                src={el.taskAvatar}
                className="w-[100px] h-[100px] object-cover rounded-full border"
              />
              <div className="pl-[20px]">
                <p className="">{el.task}</p>
                <p className="">{el.priority}</p>
                <p className="">{el.name}</p>
                <span>{el.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewTask;
