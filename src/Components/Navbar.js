import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Navbar">
      <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>AS</h1>
      

      <ul className='NavbarLinks'>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/About"> About</Link></li>
        <li><Link to="/Project"> Project</Link></li>
        <li><Link to="/Resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
