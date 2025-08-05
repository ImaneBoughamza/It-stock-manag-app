// File: src/pages/StockManagement.jsx
import React, { useState } from 'react';
import './StockManagement.css';

const sampleStock = [
  { id: 1, name: 'Laptop', category: 'Electronics', quantity: 12, location: 'Room 101' },
  { id: 2, name: 'Mouse', category: 'Accessories', quantity: 35, location: 'Room 101' },
  { id: 3, name: 'Router', category: 'Networking', quantity: 7, location: 'Server Room' },
  { id: 4, name: 'Monitor', category: 'Electronics', quantity: 18, location: 'Room 102' },
];

const StockManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStock = sampleStock.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="stock-page">
      <h2>Stock Management</h2>
      <input
        type="text"
        className="stock-search"
        placeholder="Search by name, category or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="stock-table-wrapper">
        <table className="stock-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockManagement;
