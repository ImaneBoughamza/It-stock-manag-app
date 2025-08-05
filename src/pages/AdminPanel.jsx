// src/pages/AdminPanel.jsx
import React, { useState } from 'react';
import './AdminPanel.css';

const dummyUsers = [
  { id: 1, name: 'Imane Boughamza', email: 'imane@lear.com', role: 'Admin' },
  { id: 2, name: 'Sarah Lopez', email: 'sarah@lear.com', role: 'Staff' },
  { id: 3, name: 'Ali Karim', email: 'ali@lear.com', role: 'Staff' }
];

const AdminPanel = () => {
  const [users] = useState(dummyUsers);

  return (
    <div className="admin-panel-page">
      <h2>Admin Panel</h2>

      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className={`role ${user.role.toLowerCase()}`}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
