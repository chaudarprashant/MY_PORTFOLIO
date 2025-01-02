import React from 'react';
import './MobileNav.css';
import { IoMenu } from "react-icons/io5";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-header">
        <IoMenu size={30} aria-label="Menu" title="Menu" className='mobile-nav-icon'/>
        <span className='mobile-nav-title'>My Portfolio App</span>
      </div>
    </div>
  );
};

export default MobileNav;
