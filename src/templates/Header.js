import navDesktop from './navDesktop.js';
import navMobile from './navMobile.js';
const hamburger = './assets/icons/hamburger.svg'

function Header() {
  return (
    `
      <header>
        <div id="logo" class="logo-container">
          <h1>CfShop</h1>
        </div>
        <div class="hamburger">
          <img id="hamburger" src="${hamburger}" alt="Hamburger" />
        </div>
        ${navDesktop()}
        ${navMobile()}
      </header>
    `
  )
}
export default Header;
