import React from 'react';
import '../navbar/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className='nav'>
      <Link to='/' aria-label="Home"><i className="fa-solid fa-house"></i></Link>
      <Link to='/links' aria-label="Links"><i className="fa-solid fa-paperclip"></i></Link>
      <Link to='/education' aria-label="Education"><i className="fa-solid fa-graduation-cap"></i></Link>
      <Link to='/work' aria-label="work"><i className="fa-solid fa-brain"></i></Link>
      <p onClick={toggleDarkMode} aria-label="Toggle Dark Mode"><i className="fa-solid fa-moon"></i></p>
    </div>
  );
};

export default Navbar;
