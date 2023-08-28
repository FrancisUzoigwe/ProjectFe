import User from "../../pages/screen/User";
import UserSider from "../static/UserSider";

const UserLayout = () => {
  return (
    <div className="w-full h-[100vh] flex justify-between">
      <UserSider />
      <User />
    </div>
  );
};

export default UserLayout;
