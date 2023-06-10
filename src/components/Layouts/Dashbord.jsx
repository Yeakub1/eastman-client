import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaAlignLeft,
  FaShoppingCart,
} from "react-icons/fa";

const Dashboard = () => {
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
        <ul className="menu p-4 w-80 h-full text-white bg-[#2C3E50]">
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaAlignLeft /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashbord/mycart">
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
