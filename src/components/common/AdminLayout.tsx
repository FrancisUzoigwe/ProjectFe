import { useSelector } from "react-redux";
import AdminSider from "../static/AdminSider";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38">
      <AdminSider />
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

export default AdminLayout;
