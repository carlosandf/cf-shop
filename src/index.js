import getData from './utils/getData.js';
import App from './App.js';
import menu from './utils/menu.js';

const render = document.getElementById('render')
const API = 'https://api.escuelajs.co/api/v1/products';

(async function () {
  const data = await getData(API);
  const app = await App(data);
  render.innerHTML = app;
  menu();
})();
