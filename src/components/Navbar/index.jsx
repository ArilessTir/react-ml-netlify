import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { name: "Home", component: "/" },
    { name: "Prediction", component: "/prediction" },
    { name: "Git", component: "#" },
  ];
  return (
    <ul>
      {routes.map((item) => (
        <li>
          <NavLink to={item.component}>{item.name} </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
