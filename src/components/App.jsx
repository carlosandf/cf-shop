import React, { useEffect, useState}  from 'react';
import Header from '@components/Header';
import Product from '@components/Product';
import getData from '@utils/getData.js';

const API = 'https://api.escuelajs.co/api/v1/products';


function App() {

  const [products,  setProducts] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const data = await getData(API); 
      setProducts(data);
    }
    fetchData()
  }, []);
  
  return (
    <div>
      <Header />
      <div className="app">
            <Product images={products[0].images[0]} description={products[0].description} price={products[0].price} />
      </div>
    </div>
  );
}
export default App;
