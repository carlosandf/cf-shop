import React, { useEffect, useState}  from 'react';
import Header from '@components/Header';
import Product from '@components/Product';
import useGetProducts from '@hooks/useGetProducts';
import ErrorPage from '@components/ErrorPage';
import '@styles/App.css';

const API = 'https://api.escuelajs.co/api/v1/products';


function App() {

  const products = useGetProducts(API);
  
  let result;
  if(Array.isArray(products)){
    result = <Product products={products} />
  } else {
    result = <ErrorPage />;
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
