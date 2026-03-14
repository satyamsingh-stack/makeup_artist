import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a></li>
        <li><a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')}>Achievements</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        <li><Link to="/appointment">Book Now</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;