import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import avatar from '../assets/avatar.png'; // ✅ Image inside src/assets

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Build<span style={{ color: 'black' }}>Link</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/handyman">Handyman</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>

      <div className="navbar-search-wrapper">
 <div className="navbar-search">
  <div className="search-icon-wrapper">
    <Search className="search-icon" />
  </div>
  <input type="text" placeholder="Search..." />
</div>

        <img src={avatar} alt="User Avatar" className="navbar-avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
