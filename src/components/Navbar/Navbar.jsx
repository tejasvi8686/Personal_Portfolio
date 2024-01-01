import React from "react";

import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header id="nav-section" className="w-full lg:flex flex-col">
      <nav className="w-full flex justify-between">
        <div className="flex">
          <Link id="nav-logo" to="/">
            tejasvi-raj
          </Link>
          <Link to="/" id="nav-link">
            _hello
          </Link>
          <Link to="/aboutus" id="nav-link">
            _about-me
          </Link>
          <Link to="/projects" id="nav-link">
            _projects
          </Link>
        </div>
        <Link to="/contactme" id="nav-link-contact">
          _contactme
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
