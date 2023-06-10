import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Signup from "../Authentication/Singup/Signup";
import SignUpForm from "../Authentication/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoutes from "./PrivateRoutes";
import MyCart from "../Pages/Dashbord/Students/MyCart";
import Dashboard from "../Layouts/Dashbord";


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
    path: 'dashbord',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      }
    ]
    
  }

]);

export default router;