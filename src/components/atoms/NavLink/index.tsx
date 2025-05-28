import { NavLink as RouterNavLink } from "react-router-dom";
import React from "react";

interface Props {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: Props) => {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `transition font-medium hover:text-[#FF9D00] ${
          isActive ? "text-[#FF9D00]" : "text-gray-700"
        }`
      }
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
