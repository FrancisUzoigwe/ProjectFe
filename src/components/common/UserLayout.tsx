import { useSelector } from "react-redux";
import UserSider from "../static/UserSider";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div className="bg-[#f48abd] relative">
      <UserSider />
      <div className="w-full flex justify-end ">
        <div
          className={`w-[${
            !toggle ? "calc(100vw-250px)" : "calc(100vw-70px)"
          }] min-h-[100vh]`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
