import React from 'react';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='navbar-ctr'>
      <div className='navbar'>
        <div className='navbar-logo'>
          Dashboard
        </div>
        <div className="search-bar-ctr">
            <div className="search-icon-display">
        <CiSearch  className='se-icon'/>
          <input type="text" placeholder="Search anything..." className="search-bar" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
