import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <section>
      <ul className="list_items">
        <li>
          <Link to="section-1" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="section-2" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="section-3" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
