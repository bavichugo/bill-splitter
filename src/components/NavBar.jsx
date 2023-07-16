import { NavLink } from "react-router-dom";
import logo from "../assets/split-bill-icon.png";

const linkStyles = "rounded-xl p-2 hover:bg-slate-700 text-sm";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-[20px] py-[12px]">
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img className="max-h-12 min-h-12" src={logo} alt="Bill Splitting Logo" />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-white" : "text-gray-400"}`
          }
        >
          New Expense
        </NavLink>
        <NavLink
          to="/info"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-white" : "text-gray-400"}`
          }
        >
          Info
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
