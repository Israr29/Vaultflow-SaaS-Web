import { motion } from "framer-motion";

import { useState } from "react";
import "./Navbar.css";
import navbarlogo from "/src/assets/Navbar-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="navbar"
    >
      <div className="logo">
        <img src={navbarlogo} alt="Vaultflow Logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#about" className="dropdown-toggle">
            About us <span className="arrow">▼</span>
          </a>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#team">Our Team</a>
              <a href="#careers">Careers</a>
              <a href="#company">Company Info</a>
            </div>
          )}
        </div>

        <div className="nav-buttons ">
          <button className="btn-outline">Talk to an expert</button>
          <button className="btn">Download the app</button>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
