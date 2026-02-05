import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
        <a href="#home" className="nav-logo-container">
          <img src={process.env.PUBLIC_URL +"/images/LogoApp.png"} alt="FastGo Logo" className="navbar-logo-img" />
        <span className="navbar-logo-text">FASTGO</span>
      </a>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#problem" onClick={toggleMenu}>Visione</a></li>
        <li><a href="#technologies" onClick={toggleMenu}>Tech</a></li>
        <li><a href="#architecture" onClick={toggleMenu}>Architettura</a></li>
        <li><a href="#application" onClick={toggleMenu}>App</a></li>
        <li><a href="#repos" onClick={toggleMenu}>Codice</a></li>
        <li><a href="#team" onClick={toggleMenu}>Team</a></li>
      </ul>
      <button className="nav-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;