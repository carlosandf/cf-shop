import React from 'react';
import MenuNav from '@components/MenuNav';
import '@styles/NavDesktop.css';

function NavDesktop() {
  return (
    <nav className="navbar-desktop">
      <MenuNav type={'menu-desktop'} />
    </nav>
  );
}
export default NavDesktop;
