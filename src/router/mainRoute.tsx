import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingPage from "../pages/auth/LandingPage";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";
import AdminSigninPage from "../pages/admin/AdminSigninPage";
import AdminSignupPage from "../pages/admin/AdminSignupPage";
import MainLayout from "../components/common/MainLayout";
import Ask from "../pages/auth/Ask";
import UserLayout from "../components/common/UserLayout";
import User from "../pages/screen/User";
import Task from "../pages/screen/Task";
import Ongoing from "../pages/screen/Ongoing";
import History from "../pages/screen/History";
import AdminLayout from "../components/common/AdminLayout";
import ViewTask from "../pages/screen/ViewTask";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/ask",
    element: <Ask />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/admin/signin",
    element: <AdminSigninPage />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignupPage />,
  },
  {
    path: "/access",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Task />,
      },
      {
        element: <Ongoing />,
        index: true,
        path: "/access/ongoing",
      },
      {
        element: <History />,
        index: true,
        path: "/access/done",
      },
      {
        element: <ViewTask />,
        index: true,
        path: "/access/view-task",
      },
    ],
  },
  {
    path: "/user-dashboard",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <User />,
      },
    ],
  },
]);
