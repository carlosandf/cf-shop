import React from 'react';
import '@styles/style.css';


function Product({images, description, price}) {

  return(
    <div className="container">
      <picture className="img-container">
        <img src={images} alt={description} />
      </picture>
      <section className="info">
        <div className="info-description">
          <p>{description}</p>
        </div>
        <div>
          <h4>${price}</h4>
        </div>
      </section>
      <div className="button-container">
        <button>Comprar</button> 
      </div>
    </div>
  );
}
export default Product;
