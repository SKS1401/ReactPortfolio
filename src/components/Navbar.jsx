import React from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css';

const Navbar = () => {
  return (
    <section id="navbar">
      <div>
        <h2><span style={{ color: 'orange' }}>S</span>rabosti<span style={{ color: 'orange' }}>S</span>hoibo</h2>
      </div>
      <ul>
        <li className='link'><Link to="/">About</Link></li>
        <li className='link'><Link to="/skills">Skills</Link></li>
        <li className='link'><Link to="/projects">Projects</Link></li>
        <li className='link'><Link to="/contact">Contact</Link></li>
        <li className='link'><a id="profile-link" href="https://github.com/SKS1401" target="_blank" rel="noopener noreferrer">Github Profile</a></li>
      </ul>
    </section>
  );
};

export default Navbar;
