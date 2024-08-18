import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <Link to="/" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </div>
  );
}

export default Navbar;
