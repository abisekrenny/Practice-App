import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Link to="/"> Home </Link>
        <Link to="/dashboard"> Dashboard </Link>
        <Link to="/Contact"> Contact </Link>
    </div>
  )
}

export default Navbar