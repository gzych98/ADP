'use client'
import { useState, useEffect } from 'react';
import './navbar.css'
import '../../../src/styles/globals.css'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleNav();
  }
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (event.target && isDropdownOpen && !(event.target as Element).matches('.dropdown-toggle')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isDropdownOpen]);
  return (
    <nav>
      <div className='navbar'>
        <div className='nav-logo'>
          <a href="/">
            <img
              src="logo_black.png"
              alt="Logo"
              width={214}
              height={50}
              className={`navbar-logo ${isMenuOpen ? 'show-logo' : ''}`}
            />
          </a>

          <div className='padding-left-1-5em'>

          </div>
          <a href="/" className='navbar__logo__name-non-visible' id='title'>Akademia Debat Profilaktycznych</a>
        </div>
        <button className='button-navbar-menu' type="button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="menu-icon fa-1x" />
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          <ul className='nav-main-ul'>
            <li>
              <a href="/#contact" onClick={toggleMenu}>Kontakt</a>
            </li>
            <li>
              <a className="dropdown-toggle show-pointer" onClick={toggleDropdown}>Grupa docelowa</a>
              <ul className={`navbarDropdown ${isDropdownOpen ? 'show' : ''}`}>
                <li><a href="/#service-form-www" onClick={toggleMenu}>Dzieci</a></li>
                <li><a href="/#service-identyfikacja" onClick={toggleMenu}>Młodzież</a></li>
                <li><a href="/#" onClick={toggleMenu}>Seniorzy</a></li>
              </ul>
            </li>
          </ul>
          <form className="search-form inactive" >
            <div className="search-box">
              <input className="search-input" type="text" placeholder="Find your love..." />
              <FontAwesomeIcon icon={faSearch} className="search-icon fa-1x" />
            </div>
          </form>
        </div>
      </div>
    </nav >
  );
};

export default NavBar;