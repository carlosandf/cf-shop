import React from 'react';
import '@styles/MenuNav.css';

function MenuNav({type}) {
  return (
    <ul className={type}>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">About</a></li>
    </ul>
  );
}

export default MenuNav;