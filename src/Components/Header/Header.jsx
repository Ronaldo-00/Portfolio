import React, { useState } from 'react';
import {Link} from 'react-scroll'
import './Header.css'
import { FaBars } from 'react-icons/fa';  // Import arrow up icon from react-icons library
const Header = () => {
  const [activeItem, setActiveItem] = useState('home'); // State to manage active item
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const [navLeft, setNavLeft] = useState('-100%');
    const openToggle = () => {
      setNavLeft('0%');
    };
    const closeToggle = () => {
      setNavLeft('-100%');
    };
  return (
    <div>
      <div className="header">
        <div className="logo">
          <a href='/#'><h3>MUTHU RAMAN</h3></a>
        </div>
        <button className="open-btn" onClick={openToggle}> <FaBars /></button>
        <div className="navlinks" id='mainNav' style={{ left: navLeft }}>
          <button className="close-btn" onClick={closeToggle}>X</button>
          <ul>
            <li ><Link to='hero' className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>Home</Link> </li>
            <li ><Link to='about' className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')}>About</Link></li>
            <li ><Link to='project' className={activeItem === 'projects' ? 'active' : ''} onClick={() => handleItemClick('projects')}>Projects</Link></li>
            <li ><Link to='contact' className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

