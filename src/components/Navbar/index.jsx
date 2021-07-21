import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/titanic.png";

const Navbar = () => {
  const routes = [
    { name: "Home", component: "/" },
    { name: "Prediction", component: "/prediction" },
    { name: "Git", component: "#" },
  ];
  return (
    <nav className="w-full bg-blue-200 h-20 relative">
      <img
        className="absolute top-1/2 transform -translate-y-1/2 pl-4 w-20 h-20"
        src={logo}
        alt=""
      />
      <ul className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-16">
        {routes.map((item) => (
          <li className="text-xl hover:text-gray-700 transition delay-75">
            <NavLink
              to={`/${item.component}`}
              activeClassName="font-bold text-2xl"
              end
            >
              {item.name}{" "}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
