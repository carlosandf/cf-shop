import React, { useEffect, useState}  from 'react';
import Header from '@components/Header';
import Product from '@components/Product';
import getData from '@utils/getData.js';

const API = 'https://api.escuelajs.co/api/v1/products';


function App() {

  const [products,  setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getData(API); 
      setProducts(data);
    })();
  }, []);
  
  return (
    <div>
      <Header />
      <div className="app">
        <Product products={products} />
      </div>
    </div>
  );
}
export default App;
