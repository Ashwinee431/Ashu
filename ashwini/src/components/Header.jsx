import { useState } from 'react';
import './Header.css'; 
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="logo">
          <h1>Skanska</h1>
        </div>
        <ul className="header-menu">
          <li
            className="header-item"
            onMouseEnter={() => toggleDropdown('deliver')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#deliver" className={`header-link ${openDropdown === 'deliver' ? 'active' : ''}`}>
              What we deliver {openDropdown === 'deliver' ? <FaChevronUp /> : <FaChevronDown />}
            </a>
            {openDropdown === 'deliver' && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  <li><a href="#infrastructure" className="dropdown-link">Infrastructure</a></li>
                  <li><a href="#buildings" className="dropdown-link">Buildings</a></li>
                  <li><a href="#power" className="dropdown-link">Power & Energy</a></li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="header-item"
            onMouseEnter={() => toggleDropdown('about')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#about" className={`header-link ${openDropdown === 'about' ? 'active' : ''}`}>
              Who we are {openDropdown === 'about' ? <FaChevronUp /> : <FaChevronDown />}
            </a>
            {openDropdown === 'about' && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  <li><a href="#company" className="dropdown-link">Company Info</a></li>
                  <li><a href="#leadership" className="dropdown-link">Leadership</a></li>
                  <li><a href="#careers" className="dropdown-link">Careers</a></li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className="header-right">
          <a href="#media" className="header-link">Media</a>
          <a href="#careers" className="header-link">Careers</a>
          <a href="#contact" className="header-link">Contact</a>
          <FaSearch className="search-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
