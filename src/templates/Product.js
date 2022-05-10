function Product(data) {
  const nodes = [];
  data.forEach(item => {
    const photo = item.images[0];
    const description = item.description;
    const price = item.price;
    const node =
    `
      <div class="container">
        <picture class="img-container">
          <img src="${photo}" alt="${description}" />
        </picture>
        <section class="info">
          <div class="info-description">
            <p>${description}</p>
          </div>
          <div>
            <h4>$${price}</h4>
          </div>
        </section>
        <div class="button-container">
          <button>Comprar</button> 
        </div>
      </div>
    `
  
    return nodes.push(node);
  })
  
  return nodes.join('');
}
export default Product;
