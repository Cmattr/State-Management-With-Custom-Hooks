import { useState, useEffect } from 'react';


const initialInventory = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

const useInventory = () => {
  const [inventory, setInventory] = useState(initialInventory);


  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('/products');
        const data = await response.json();
        setInventory(data);

        await new Promise(resolve => setTimeout(resolve, 1000));
        setInventory(initialInventory); 
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
  }, []);

  // Function to add a new product
  const addProduct = (newProduct) => {
    const updatedInventory = [...inventory, newProduct];
    setInventory(updatedInventory);
    fetch('api/products', { method: 'POST', body: JSON.stringify(newProduct) });
  };

  // Function to remove a product by ID
  const removeProduct = (productId) => {
    const updatedInventory = inventory.filter(product => product.id !== productId);
    setInventory(updatedInventory);
        fetch(`api/products/${productId}`, { method: 'DELETE' });
  };

  return {
    inventory,
    addProduct,
    removeProduct,
  };
};