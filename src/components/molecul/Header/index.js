import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <p className='logo-app'>MERN-BLOG</p>
        <Link to='/login'>
        <p className='menu-item'>Logout</p>
        </Link>
    </div>
  )
}

export default Header