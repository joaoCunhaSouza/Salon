import React, { useState } from 'react';
import "./styles-employee.css";
import '../main-page.css';

export function Stock() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Shampoo Professional', stock: '5 units', category: 'Progressive', price: 'R$ 70.00', active: true },
    { id: 2, name: 'Conditioner XYZ', stock: '3 units', category: 'Cabelos', price: 'R$ 85.00', active: false },
    { id: 3, name: 'Hair Gel Ultra', stock: '10 units', category: 'Styling', price: 'R$ 45.00', active: true },
    { id: 4, name: 'Hair Spray Extra Hold', stock: '8 units', category: 'Styling', price: 'R$ 55.00', active: true },
    { id: 5, name: 'Facial Cleanser Gel', stock: '12 units', category: 'Skin Care', price: 'R$ 40.00', active: true },
    { id: 6, name: 'Body Lotion Moisture', stock: '6 units', category: 'Skin Care', price: 'R$ 30.00', active: true },
    { id: 7, name: 'Shampoo Anti-dandruff', stock: '4 units', category: 'Shampoo', price: 'R$ 50.00', active: false },
    { id: 8, name: 'Conditioner Moisturizer', stock: '7 units', category: 'Conditioner', price: 'R$ 60.00', active: true },
    { id: 9, name: 'Body Scrub Exfoliant', stock: '9 units', category: 'Skin Care', price: 'R$ 75.00', active: true },
    { id: 10, name: 'Moisturizing Hand Cream', stock: '15 units', category: 'Skin Care', price: 'R$ 25.00', active: true },
  ]);
  
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Editing product with ID: ${id}`);
  };

  const handleToggleActive = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, active: !product.active } : product
    ));
  };

  return (
    <div className="wireframe stock">
      <h1>Stock Management</h1>
      <div className="actions">
        <button className="add-button">+ Add Product</button>
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
        />
        <button className="filter-button">Filter</button>
        <button className="export-button">Export CSV</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Price</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={product.active} 
                  onChange={() => handleToggleActive(product.id)} 
                />
              </td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(product.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
