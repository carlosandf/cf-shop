import React, { useEffect, useState}  from 'react';
import Header from '@components/Header';
import Product from '@components/Product';
import getData from '@utils/getData.js';
import ErrorPage from '@components/ErrorPage';
import '@styles/App.css';

const API = 'https://api.escuelajs.co/api/v1/products';


function App() {

  const [products,  setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getData(API); 
      setProducts(data);
    })();
  }, []);
  
  let result;
  if(Array.isArray(products)){
    result = <Product products={products} />
  } else {
    result = products;
  }

  return (
    <>
      <Header />
      <div className="products-container">
        {result}
      </div>
    </>
  );
}
export default App;
