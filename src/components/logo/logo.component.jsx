import React from 'react';
import logoImage from '../../assets/logo1.png';
import './logo.styles.css'

const Logo = () => {
  return (
    <div className="logo-container">
        <img className='steam-games-logo' src={logoImage} alt="logo" />
    </div>
  );
}

export default Logo;