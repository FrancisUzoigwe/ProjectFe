import { Link, useNavigate } from "react-router-dom";
import pics from "../../assets/undraw_tasting_re_3k5a.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Swal from "sweetalert2";
import { userRegister } from "../../apis/userAuthAPI";

const SignupPage = () => {
  const navigate = useNavigate();
  const [myImage, setMyImage] = useState<string>(pics);
  const [myAvatar, setMyAvatar] = useState<string>("");

  const handleUserImage = (event: any) => {
    const myLocalImage = event.target.files[0];
    const mySavedImage = URL.createObjectURL(myLocalImage);
    setMyImage(myLocalImage);
    setMyAvatar(mySavedImage);
  };

  const mySchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(mySchema),
  });

  const handleMySubmission = handleSubmit((data: any) => {
    const { name, email, password } = data;
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("avatar", myImage);

    userRegister(myForm).then((res: any) => {
      if (res) {
        navigate("/signin");
        Swal.fire({
          icon: "success",
          text: `Welcome to Project.io: ${name}`,
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
      signInText: "Don't have an account?",
      action: "Sign up here",
    },
    es: {
      signUpText: "Regístrate en Project.io",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo electrónico",
      passwordPlaceholder: "Contraseña",
      confirmPasswordPlaceholder: "Confirmar contraseña",
      registerButton: "Registrarse",
      signInText: "¿Ya tienes una cuenta? ",
      action: "Inicia sesión aquí",
    },
    fr: {
      signUpText: "Inscrivez-vous sur Project.io",
      namePlaceholder: "Nom",
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Mot de passe",
      confirmPasswordPlaceholder: "Confirmez le mot de passe",
      registerButton: "S'inscrire",
      signInText: "Vous avez déjà un compte ?",
      action: "Connectez-vous ici",
    },
  };

  const selectedStrings = languageStrings[selectedLanguage];

  return (
    <div className="flex min-h-[100vh] bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38">
      <div className="flex-1 flex-col justify-end w-full items-center flex mb-2">
        <span className="font-bold text-pink-300  text-[70px]">Project.io</span>

        <form
          onSubmit={handleMySubmission}
          className="min-h-[400px] w-[500px] bg-gradient-to-r from-purple-50 via-purple-200 to-purple-50 opacity-95 rounded-[40px] items-center flex flex-col shadow-lg py-5 px-4"
        >
          <div className="font-bold text-2xl text-gray-400 my-3">
            {selectedStrings.signUpText}
          </div>
          <div className="w-[200px] relative h-[200px] overflow-hidden object-cover border rounded-[20px]">
            <img
              className="w-full h-full"
              src={myAvatar ? myAvatar : myImage}
            />
          </div>
          <label
            htmlFor="pix"
            className=" px-[35px] py-4 rounded-md text-purple-200 bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38 mt-2 hover:rounded-[40px] hover:scale-[1.02] transition-all duration-300 bg-pink-500"
          >
            upload
          </label>
          <input
            type="file"
            id="pix"
            className="hidden"
            accept="image/jpeg image/svg image/png image/jpg"
            onChange={handleUserImage}
          />
          <input
            placeholder={selectedStrings.namePlaceholder}
            {...register("name")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-2 outline-pink-300"
          />
          {errors.name?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}
          <input
            placeholder={selectedStrings.emailPlaceholder}
            {...register("email")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-3 outline-pink-300"
          />
          {errors.email?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}
          <input
            placeholder={selectedStrings.passwordPlaceholder}
            {...register("password")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-3 outline-pink-300"
          />
          {errors.password?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}
          <input
            placeholder={selectedStrings.confirmPasswordPlaceholder}
            {...register("confirm")}
            className="w-full text-pink-300 border rounded-lg px-3 py-2 mt-3  outline-pink-300"
          />
          {errors.confirm?.message && (
            <span className="capitalize text-[13px] text-rose-400">
              required
            </span>
          )}

          <button
            className="py-4 px-[35px] mt-7 bg-gradient-to-r from-purple-600 to-pink-300 transform rotate-38 hover:rounded-[40px] text-pink-100 rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all "
            type="submit"
          >
            {selectedStrings.registerButton}
          </button>
          <div className="mt-4">
            <div className="flex flex-col items-center text-sm">
              <div>{selectedStrings.signInText}</div>
              <Link to={`/signin`}>
                <span className="font-bold text-purple-500 hover:cursor-pointer transition-all">
                  {selectedStrings.action}
                </span>
              </Link>
            </div>
          </div>
          <select
            className="mt-4 border outline-none w-[200px] bg-purple-300 text-purple-100 px-3 py-2"
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </form>
      </div>
      <div className="w-[850px] flex items-center sticky top-0 h-[100vh]">
        <img src={pics} alt="Image 2" className="w-[800px]" />
      </div>
    </div>
  );
};

export default SignupPage;
