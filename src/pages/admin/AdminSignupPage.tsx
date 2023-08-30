import { Link, useNavigate } from "react-router-dom";
import pics from "../../assets/undraw_feedback_re_urmj.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { adminRegister } from "../../apis/adminAuthAPI";
import Swal from "sweetalert2";

const AdminSignupPage = () => {
  const navigate = useNavigate();
  const [myImage, setMyImage] = useState<string>(pics);
  const [myAvatar, setMyAvatar] = useState<string>("");

  const handleAdminImage = (event: any) => {
    const myLocalImage = event.target.files[0];
    const mySavedImage = URL.createObjectURL(myLocalImage);
    setMyImage(myLocalImage);
    setMyAvatar(mySavedImage);
  };

  const mySchema = yup.object({
    adminName: yup.string().required(),
    adminEmail: yup.string().required(),
    adminPassword: yup.string().required(),
    adminConfirm: yup.string().oneOf([yup.ref("adminPassword")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(mySchema),
  });

  const handleMySubmission = handleSubmit((data: any) => {
    const { adminName, adminEmail, adminPassword } = data;
    const myForm = new FormData();
    myForm.append("adminName", adminName);
    myForm.append("adminEmail", adminEmail);
    myForm.append("adminPassword", adminPassword);
    myForm.append("avatar", myImage);

    adminRegister(myForm).then((res: any) => {
      if (res) {
        navigate("/admin/signin");
        Swal.fire({
          icon: "success",
          text: `Welcome to Project.io: ${adminName}`,
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

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languageStrings: any = {
    en: {
      signUpText: "Register on Project.io",
      namePlaceholder: "enter your name",
      emailPlaceholder: "enter your email address",
      passwordPlaceholder: "enter your password",
      confirmPasswordPlaceholder: "retype password",
      registerButton: "Register",
      signInText: "Already have an account?",
      action: "Sign in here",
    },
    es: {
      signUpText: "Regístrate en Project.io",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo electrónico",
      passwordPlaceholder: "Contraseña",
      confirmPasswordPlaceholder: "Confirmar contraseña",
      registerButton: "Registrarse",
      signInText: "¿Ya tienes una cuenta?",
      action: "Inicia sesión aquí",
    },
    fr: {
      signUpText: "Inscrivez-vous sur Project.io",
      namePlaceholder: "Nom",
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Mot de passe",
      confirmPasswordPlaceholder: "Confirmez le mot de passe",
      registerButton: "S'inscrire",
      signInText: "Vous avez déjà un compte ? Connectez-vous ici",
      action: "Connectez-vous ici",
    },
  };

  const selectedStrings = languageStrings[selectedLanguage];

  return (
    <div className="flex h-[screen] p-2 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 opacity-95">
      <div className="flex-1 flex-col justify-center items-center flex">
        <span className="font-bold text-pink-300  text-[70px]">Project.io</span>

        <form
          onSubmit={handleMySubmission}
          className="min-h-[400px] w-[500px] bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 opacity-95 rounded-[40px] items-center flex flex-col shadow-lg py-5 px-4"
        >
          <div className="font-bold text-2xl text-gray-400 my-3">
            {selectedStrings.signUpText}
          </div>
          <div className="w-[200px] relative h-[200px] overflow-hidden border rounded-[20px]">
            <img
              className="w-full object-cover h-full"
              src={myAvatar ? myAvatar : myImage}
            />
          </div>
          <label
            htmlFor="pix"
            className=" px-[35px] py-4 rounded-md text-pink-100 mt-2 hover:rounded-[40px] hover:scale-[1.02] transition-all cursor-pointer duration-300 bg-pink-500"
          >
            upload
          </label>
          <input
            type="file"
            id="pix"
            className="hidden"
            accept="image/jpeg image/svg image/png image/jpg"
            onChange={handleAdminImage}
          />
          <input
            placeholder={selectedStrings.namePlaceholder}
            {...register("adminName")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-2 outline-pink-300"
          />
          {errors.adminName?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}
          <input
            placeholder={selectedStrings.emailPlaceholder}
            {...register("adminEmail")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-3 outline-pink-300"
          />
          {errors.adminEmail?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}
          <input
            placeholder={selectedStrings.passwordPlaceholder}
            {...register("adminPassword")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-3 outline-pink-300"
          />
          {errors.adminPassword?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}
          <input
            placeholder={selectedStrings.confirmPasswordPlaceholder}
            {...register("adminConfirm")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-3  outline-pink-300"
          />
          {errors.adminConfirm?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}

          <button
            className="py-4 px-[35px] mt-7 bg-pink-500 hover:rounded-[40px] text-pink-100 rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all "
            type="submit"
          >
            {selectedStrings.registerButton}
          </button>
          <div className="mt-4">
            <div className="flex flex-col items-center text-sm">
              <div> {selectedStrings.signInText}</div>
              <Link to={`/admin/signin`}>
                <span className="font-bold text-purple-500 hover:cursor-pointer transition-all">
                  {selectedStrings.action}
                </span>
              </Link>
            </div>
          </div>
          <select
            className="mt-4 border outline-none w-[200px] bg-pink-100 text-rose-400 px-3 py-2"
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </form>
      </div>
      <div className="w-[850px] h-[100vh]  relative">
        <div className="absolute top-0 left-0 right-0">
          <img src={pics} alt="Image 2" className="w-[800px] fixed" />
        </div>
      </div>
    </div>
  );
};

export default AdminSignupPage;
