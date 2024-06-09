import React from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

const Link = (props: LinkProps) => {
  const { children, to } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sky-600  py-2 px-4 rounded-lg transition duration-250 ease-linear ${
          isActive ? "bg-sky-100 font-bold" : "font-semibold hover:bg-sky-100"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default Link;
