import React from 'react';
import useInventory from './hooks/ProductDetails'

const ProductList = () => {
  const { inventory, removeProduct } = useInventory();

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {inventory.map(product => (
          <li key={product.id}>
            {product.name} 
            <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;