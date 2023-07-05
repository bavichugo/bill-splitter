import { NavLink } from "react-router-dom";
import logo from "../assets/split-bill-icon.png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linkStyles = "rounded-xl p-2 hover:bg-slate-700 text-sm";
const inputStyles =
  "max-w-xs w-full max-h-10 h-10 rounded-xl bg-transparent border border-gray-500 bg-gray-700 text-sm px-2 text-white";
const inputStylesHover = "hover:border-white";

const NavBar = () => {
  const filterExpenses = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="flex justify-between items-center px-[20px] py-[12px]">
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img className="max-h-12" src={logo} alt="Bill Splitting Logo" />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-white" : "text-gray-400"}`
          }
        >
          Lunch/Dinner
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkStyles} ${isActive ? "text-white" : "text-gray-400"}`
          }
        >
          Contact
        </NavLink>
      </div>
      <div id="search-box" className={`flex items-center ${inputStyles} ${inputStylesHover}`}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          htmlFor="search-box"
          placeholder="Search previous expenses"
          className="bg-transparent ml-4 h-full w-full focus:outline-none"
          onChange={filterExpenses}
        />
      </div>
    </div>
  );
};

export default NavBar;
