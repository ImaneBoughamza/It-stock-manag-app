// File: src/layouts/EmployeeLayout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './EmployeeLayout.css';

const EmployeeLayout = () => {
  return (
    <div className="employee-layout">
      <aside className="employee-sidebar">
        <h2 className="logo">LEARNET</h2>
        <nav>
          <Link to="/dashboard-emp" className="nav-link">Dashboard</Link>
          <Link to="/my-assets" className="nav-link">My Assets</Link>
          <Link to="/my-requests" className="nav-link">My Requests</Link>
          <Link to="/support" className="nav-link">Support</Link>
        </nav>
      </aside>
      <main className="employee-main">
        <Outlet />
      </main>
    </div>
  );
};

export default EmployeeLayout;