import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";

import { AuthContext } from "../../Provider/AuthProvider";
import ActiveLink from "../../../utility/ActiveLink/ActiveLink";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  
    const handleLogOut = () => {
      logOut()
        .then((result) => {})
        .catch((error) => console.log(error));
    };
  return (
    <nav className="w-full bg-white shadow ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="navbar-start ml-0">
            <Link to="/">
              <h2 className="w-4/5">
                <img draggable="false" src={logo} alt="" />
              </h2>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={` lg:-ml-72 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="">
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li className="">
              <ActiveLink to="/Instructors">Instructors</ActiveLink>
            </li>

            <li>
              <ActiveLink className="mr-3" to="/Classes">
                Classes
              </ActiveLink>
            </li>
          </ul>
        </div>

        <div
          className={` pb-3 mt-8  md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0 ">
            {user?.email ? (
              <>
                <li>
                  <ActiveLink className="mr-3" to="/dashbord/mycart">
                    Dashbord
                  </ActiveLink>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
                <Link
                  to="/user-profile"
                  className="hover-text h-10 w-10 ml-4 cursor-pointer"
                >
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.photoURL}
                  />
                  <span className="tooltip-text" id="left">
                    {user?.displayName}
                  </span>
                </Link>
              </>
            ) : (
              <ActiveLink to="/login">LogIn</ActiveLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
