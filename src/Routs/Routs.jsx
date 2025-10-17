import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: "about-us", Component: AboutUs },
            { path: "profile", Component: Profile },
            { path: "signup", Component: SignUp },
            { path: "signin", Component: SignIn },
        ]
    }
])