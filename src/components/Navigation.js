import React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';


const Navbar = () => (
  <header>
    <h2 className="logo">BookStore CMS</h2>
    <ul className="links">
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
    <MdAccountCircle className="account" />
  </header>
);

export default Navbar;