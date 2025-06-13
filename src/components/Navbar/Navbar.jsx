import "./Navbar.css";
import navbarlogo from '/src/assets/Navbar-logo.png'; 


function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
            <img src={navbarlogo} />
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About us</a>
          <button className="btn">Download the app</button>
          <button className="btn-outline">Talk to an expert</button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
