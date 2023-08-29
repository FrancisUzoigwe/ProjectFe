import { useDispatch } from "react-redux";
import pics from "../../assets/undraw_feedback_re_urmj.svg";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSignin } from "../../apis/adminAuthAPI";
import Swal from "sweetalert2";
import { adminState } from "../../global/globalFile";

const AdminSigninPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mySchema = yup.object({
    adminEmail: yup.string().required(),
    adminPassword: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(mySchema),
  });

  const handleMySubmission = handleSubmit((data: any) => {
    const { adminEmail, adminPassword } = data;

    adminSignin({ adminEmail, adminPassword }).then((res: any) => {
      if (res) {
        dispatch(adminState(res));
        navigate("/access");
        Swal.fire({
          icon: "success",
          text: `You will love it here`,
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Complete All Credentials",
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  });
  return (
    <div className="flex h-[screen] bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 opacity-95">
      <div className="flex-1 flex-col justify-center items-center flex">
        <span className="font-bold text-pink-300  text-[70px]">Project.io</span>

        <form
          onSubmit={handleMySubmission}
          className="h-[400px] w-[500px] bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 opacity-95 rounded-[40px] items-center flex flex-col shadow-lg p-8"
        >
          <div className="font-bold text-2xl text-gray-400 mt-7">
            Log in to Project.io
          </div>
          <input
            placeholder="enter your email address"
            {...register("adminEmail")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-2 outline-pink-300"
          />
          {errors.adminEmail?.message && (
            <span className="capitalize text-rose-400 text-[13px]">
              required
            </span>
          )}
          <input
            type="password"
            placeholder="enter your password"
            {...register("adminPassword")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-2  outline-pink-300"
          />
          {errors.adminPassword?.message && (
            <span className="capitalize text-rose-400 text-[13px]">
              required
            </span>
          )}

          <button
            className="py-4 px-[35px] mt-7 bg-pink-500 hover:rounded-[40px] text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all "
            type="submit"
          >
            Login
          </button>

          <div className="mt-4">
            <div className="flex flex-col items-center text-sm">
              <div>Dont have an account?</div>
              <Link to={`/admin/signup`}>
                <span className="font-bold text-purple-500 hover:cursor-pointer transition-all">
                  Sign up here
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[850px] h-[100vh]  relative">
        <div className="absolute top-0 left-0 right-0">
          <img src={pics} alt="Image 2" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AdminSigninPage;
