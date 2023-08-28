import {createBrowserRouter} from "react-router-dom"
import FirstLayout from "../components/common/FirstLayout"
import LandingPage from "../pages/auth/LandingPage"
import SigninPage from "../pages/auth/SigninPage"
import SignupPage from "../pages/auth/SignupPage"
import AdminSigninPage from "../pages/admin/AdminSigninPage"
import AdminSignupPage from "../pages/admin/AdminSignupPage"
import HomePage from "../pages/screen/HomePage"
import MainLayout from "../components/common/MainLayout"
import Ask from "../pages/auth/Ask"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <FirstLayout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            }
        ]
    },
    {
        path: "/ask",
        element: <Ask/>
    },
    {
        path: "/signin",
        element: <SigninPage/>
    },
    {
        path: "/signup",
        element: <SignupPage/>
    },
    {
       path: "/admin/signin",
       element: <AdminSigninPage/> 
    },
    {
       path: "/admin/signup",
       element: <AdminSignupPage/> 
    },
    {
        path: "/access",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }
        ]
    }
])