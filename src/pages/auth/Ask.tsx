import { Link } from "react-router-dom";
import myAdmin from "../../assets/undraw_heatmap_uyye.svg";

const Ask = () => {
  return (
    <div className="w-full h-[100vh] bg-whiteA flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38">
      <div className="w-[95%]  h-[600px] flex justify-between items-center">
        <img src={myAdmin} alt="src" className="w-[800px]" />
        <div>
          <Link to="/admin/signin">
            <div className="flex items-center flex-col">
              <div className="rounded-[10px] w-[500px] items-center justify-center flex text-[20px] px-[50px] shadow-md hover:scale-[1.09] transition-all duration-300 py-4 bg-white text-purple-800 mt-[20px] font-bold cursor-pointer">
                Signin as Admin
              </div>
            </div>
          </Link>
          <Link to="/signin">
            <div>
              <div className="flex items-center flex-col">
                <div className="rounded-[10px] w-[500px] items-center justify-center flex px-[20px] shadow-md hover:scale-[1.09] transition-all duration-300 text-[20px] py-4 bg-white text-purple-800 mt-[20px] font-bold cursor-pointer">
                  Signin as User
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ask;
