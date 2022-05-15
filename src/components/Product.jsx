import React from 'react';
import '@styles/style.css';


function Product(props) {
  
  const { products } = props;
  
  return(
    products.map(product => {
      return (
        <div className="container">
          <picture className="img-container">
            <img src={product.images[0]} alt={product.description} />
          </picture>
          <section className="info">
            <div className="info-description">
              <p>{product.description}</p>
            </div>
            <div>
              <h4>${product.price}</h4>
            </div>
          </section>
          <div className="button-container">
            <button>Comprar</button> 
          </div>
        </div>
      )
    })
  );
}
export default Product;
