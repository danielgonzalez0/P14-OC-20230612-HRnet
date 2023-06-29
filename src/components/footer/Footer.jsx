import React from 'react';
import footerLogo from './logo-white.png';


const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={footerLogo} alt="wealth health logo" />
        <p>WEALTH HEALTH all rights reserved</p>
      </div>
      <ul>
        <li>Privacy</li>
        <li>Policy</li>
        <li>Terms of service</li>
      </ul>
    </footer>
  );
};

export default Footer;
