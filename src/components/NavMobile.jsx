import React from 'react';
import MenuNav from '@components/MenuNav';
import '@styles/NavMobile.css';

function NavMobile() {
  return (
    <nav id="menu-mobile" className="navbar-mobile">
      <MenuNav type={'menu-mobile'} />
    </nav>
  );
}
export default NavMobile;
