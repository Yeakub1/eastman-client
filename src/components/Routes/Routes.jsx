import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Signup from "../Authentication/Singup/Signup";
import SignUpForm from "../Authentication/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashbord";
import Classes from "../Pages/Classes/Classes";
import ClassFrom from "../Pages/Dashbord/Instructors/ClassFrom";
import MyClass from "../Pages/Dashbord/Instructors/MyClass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Instructors",
        element: (
          <PrivateRoutes>
            <Instructors></Instructors>
          </PrivateRoutes>
        ),
      },
      {
        path: "/Classes",
        element: <Classes></Classes>
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <SignUpForm></SignUpForm>,
      },
    ],
  },

  {
    path: "dashbord",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addclass",
        element: <ClassFrom></ClassFrom>
      },
      {
        path: "myclass",
        element: <MyClass></MyClass>
      },
    ],
  },
]);

export default router;