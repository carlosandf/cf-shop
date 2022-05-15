import React from 'react';
import '@styles/Product.css';


function Product(props) {
  
  const { products } = props;
  
  return(
    products.map(product => {
      return (
        <div className="container">
          <picture className="img-container">
            <img src={product.images[0]} alt={product.description} />
          </picture>
          <div className='info-container'>
            <section className="info--description">
              <div className="info--description__copy">
                <p>{product.description}</p>
              </div>
              <div className="info--description__price">
                <p>${product.price}</p>
              </div>
            </section>
            <div className="button-container">
              <button>Comprar</button> 
            </div>
          </div>
        </div>
      )
    })
  );
}
export default Product;
