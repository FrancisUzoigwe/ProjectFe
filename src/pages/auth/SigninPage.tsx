import { Link, useNavigate } from "react-router-dom";
import pics from "../../assets/undraw_tasting_re_3k5a.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { userState } from "../../global/globalFile";
import { userSignin } from "../../apis/userAuthAPI";
import { useDispatch } from "react-redux";

const SigninPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mySchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(mySchema),
  });

  const handleMySubmission = handleSubmit((data: any) => {
    const { email, password } = data;

    userSignin({ email, password }).then((res: any) => {
      if (res) {
        dispatch(userState(res));
        navigate("/user-dashboard");
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
    <div className="flex min-h-[100vh] bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38">
      <div className="flex-1 flex-col w-full items-center justify-center flex mb-2">
        <span className="font-bold text-pink-300  text-[70px]">Project.io</span>

        <form
          onSubmit={handleMySubmission}
          className="min-h-[240px] w-[500px] bg-gradient-to-r from-purple-50 via-purple-200 to-purple-50 opacity-95 rounded-[40px] items-center flex flex-col shadow-lg py-5 px-4"
        >
          <div className="font-bold text-2xl text-gray-400 my-3">
            Register on Project.io
          </div>

          <input
            placeholder="enter your email address"
            {...register("email")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-3 outline-pink-300"
          />
          {errors.email?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}
          <input
            placeholder="confirm your password"
            {...register("password")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-3 outline-pink-300"
          />
          {errors.password?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}

          <button
            className="py-4 px-[35px] mt-7 bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38 hover:rounded-[40px] text-pink-100 rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all "
            type="submit"
          >
            Login
          </button>
          <div className="mt-4">
            <div className="flex flex-col items-center text-sm">
              <div>Don't have an account?</div>
              <Link to={`/signup`}>
                <span className="font-bold text-purple-500 hover:cursor-pointer transition-all">
                  Sign up here
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[850px] flex items-center sticky top-0 h-[100vh]">
        <img src={pics} alt="Image 2" className="w-[800px]" />
      </div>
    </div>
  );
};

export default SigninPage;
