import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="header flex justify-between text-text bg-background"
      style={{ fontFamily: "Space Grotesk, sans-serif" }}
    >
      <p>Wisconsin Home Helper</p>
    </header>
  );
};

export default Navbar;
