import React from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import hamburger from '@icons/hamburger.svg';
import '@styles/Header.css';

function Header() {
  return (
    <header className='header'>
      <div id="logo" className="logo-container">
        <h1>CfShop</h1>
      </div>
      <div className="hamburger">
        <img id="hamburger" src={hamburger} alt="Hamburger" />
      </div>
      <NavDesktop />
      <NavMobile />
    </header>
  );
}
export default Header;
