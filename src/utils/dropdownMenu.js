const dropdownMenu = () => {
  const menu = document.getElementById('menu-mobile');
  const hamburger = document.getElementById('hamburger');
  
  hamburger.addEventListener('click', e => {
    menu.classList.add('spread');
  });
  
  window.addEventListener('click', e => {
    if (e.target != menu && e.target != hamburger) {
      menu.classList.remove('spread');
    }
  })
}
export default dropdownMenu;
