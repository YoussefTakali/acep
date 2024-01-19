import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';
function Navbar({ onNavMenuClick }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        onNavMenuClick();
    };
  return (
    <nav className={`navbar ${isNavOpen ? 'show' : ''}`}>
      <div className='sublist'>
        <a className="menu-items nav-menu" onClick={toggleNav}>
          &#9776;
        </a>
        <div className="nav-links">
        <HashLink to="/#section0" smooth className='menu-items nav-item'>Accueil</HashLink>
        <HashLink to="/#AboutUs" smooth className='menu-items nav-item'>A Propos</HashLink>
        <HashLink to="/#Services" smooth className='menu-items nav-item'>Services</HashLink>
        <HashLink to="/#References" smooth className='menu-items nav-item'>Références</HashLink>
        <HashLink to="/products/#Products" className='menu-items nav-item'>Produits</HashLink>
        <HashLink to="/#ContactUs" smooth className='menu-items nav-item'>Contact</HashLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
