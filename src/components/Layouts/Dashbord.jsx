import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaBook,
  FaUserFriends,
  FaBookReader,
} from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

  // TODO
  // const isAdmin = true;
  const [isAdmin]=useAdmin()
  const isInstructor = true;



  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-xl bg-base-200">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="/">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/allclass">
                  <FaBookReader /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/allusers">
                  <FaUserFriends /> Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="dashord/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/mycart">
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink>payment history</NavLink>
              </li>
              <li>
                <NavLink>my booking</NavLink>
              </li>
            </>
          )}

          {/* {isInstructor ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome /> Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/myclass">
                  <FaBookOpen /> My Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/addclass">
                  <FaBookReader /> Add a Class
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="dashord/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/mycart">
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink>payment history</NavLink>
              </li>
              <li>
                <NavLink>my booking</NavLink>
              </li>
            </>
          )} */}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Instructors">
              <FaUserFriends /> Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/Classes">
              <FaBook />
              Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
