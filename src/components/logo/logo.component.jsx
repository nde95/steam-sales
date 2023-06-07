import React from 'react';
import logoImage from '../../assets/logo1.png';
import './logo.styles.css'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <div className="logo-container">
        <img className='steam-games-logo' src={logoImage} alt="logo" />
      </div>
    </Link>
  );
}

export default Logo;