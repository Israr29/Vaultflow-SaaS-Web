import { useState } from "react";
import "./Navbar.css";
import navbarlogo from "/src/assets/Navbar-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={navbarlogo} alt="Vaultflow Logo" />
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>

        {/* Dropdown starts here */}
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

        <div className="nav-buttons">
          <button className="btn-outline">Talk to an expert</button>
          <button className="btn">Download the app</button>
        </div>
      </div>

      
    </header>
  );
}

export default Navbar;
