import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Signup from "../Authentication/Singup/Signup";
import SignUpForm from "../Authentication/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";


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
        element: <Instructors></Instructors>
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
]);

export default router;