import getData from './utils/getData.js';
import App from './App.js';
import ErrorPage from './templates/ErrorPage.js';

import dropdownMenu from './utils/dropdownMenu.js';

const render = document.getElementById('render')
const API = 'https://api.escuelajs.co/api/v1/products';

(async function () {
  
  try {
    const data = await getData(API);
    const app = await App(data);
    render.innerHTML = app;
  } catch (err){
    render.innerHTML = ErrorPage();
  }
  dropdownMenu();
  
})();

