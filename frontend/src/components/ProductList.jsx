import React, { useState, useEffect } from 'react';
import api from '../api/axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
