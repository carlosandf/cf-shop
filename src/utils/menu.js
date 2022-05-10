const menu = async () => {
  const menu = await document.getElementById('menu-mobile');
  const hamburger = await document.getElementById('hamburger');
  
  hamburger.addEventListener('click', e => {
    menu.classList.toggle('spread');
  });
  
  window.addEventListener('click', e => {
    if (e.target != menu && e.target != hamburger) {
      menu.classList.toggle('spread');
    }
  })
}
export default menu;
