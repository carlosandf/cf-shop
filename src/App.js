import Header from './templates/Header.js';
import Product from './templates/Product.js';


async function App(data) {
  
  return (
    `
    <div>
      ${Header()}
      <div class="app">
        ${Product(data)}
      </div>
    </div>
    `
  )
}
export default App;
