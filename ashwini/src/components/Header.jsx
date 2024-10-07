import { useState } from 'react';
import './Header.css'; 
import { FaChevronDown, FaChevronUp, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="logo">
          <h1>Shikhar</h1>
        </div>
        
        {/* Burger icon for mobile */}
        <div className="burger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
          <li
            className="header-item"
            onMouseEnter={() => toggleDropdown('deliver')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a 
              href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
              className={`header-link ${openDropdown === 'deliver' ? 'active' : ''}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              What we deliver {openDropdown === 'deliver' ? <FaChevronUp /> : <FaChevronDown />}
            </a>
            {openDropdown === 'deliver' && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  <li>
                    <a 
                      href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
                      className="dropdown-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Infrastructure
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
                      className="dropdown-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Buildings
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
                      className="dropdown-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Power & Energy
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="header-item"
            onMouseEnter={() => toggleDropdown('about')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a 
              href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
              className={`header-link ${openDropdown === 'about' ? 'active' : ''}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Who we are {openDropdown === 'about' ? <FaChevronUp /> : <FaChevronDown />}
            </a>
            {openDropdown === 'about' && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  <li>
                    <a 
                      href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
                      className="dropdown-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Company Info
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
                      className="dropdown-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
                      className="dropdown-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        
        <div className="header-right">
          <a 
            href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
            className="header-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Media
          </a>
          <a 
            href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
            className="header-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Careers
          </a>
          <a 
            href="https://67015976823fa20008f5fdd4--jolly-genie-38abea.netlify.app" 
            className="header-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <FaSearch className="search-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
