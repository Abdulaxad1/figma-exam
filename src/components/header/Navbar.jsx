import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import './Navbar.css';

function Navbar(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { categories } = props;

  return (
    <nav className="nav-bar">
      <div 
        className="all-categories-container"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <button className="all-cat-btn" onClick={() => window.location.href='/categories'}>
          All Categories 
        </button><FiChevronDown />

        {showDropdown && (
          <ul className="dropdown-list">
            {categories.map((cat, index) => (
              <li key={index}>
                <Link to="/categories">{cat.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>


      <ul className="nav-links">
        {categories.slice(0, 8).map((cat, index) => (
          <li key={index} className="nav-link-item">
            {cat.name} <FiChevronDown className="small-arrow" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;