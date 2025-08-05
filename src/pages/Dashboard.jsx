// src/pages/Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import { FaEnvelope, FaExclamationCircle, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {/* Metric Cards */}
      <div className="metrics">
        <div className="metric-card">
          <div className="metric-icon"><FaEnvelope /></div>
          <div className="metric-number">150</div>
          <div className="metric-label">TOTAL ASSETS</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon"><FaExclamationCircle /></div>
          <div className="metric-number">5</div>
          <div className="metric-label">PENDING REQUESTS</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon"><FaExclamationCircle /></div>
          <div className="metric-number">3</div>
          <div className="metric-label">LOW STOCK ALERTS</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon"><FaPlus /></div>
          <button className="metric-button">ADD STOCK</button>
        </div>
      </div>

      {/* Panels */}
      <div className="panels">
        <div className="panel">
          <div className="panel-title">Announcements</div>
          <div className="announcement">
            <div className="announcement-date">April 15, 2024</div>
            <div className="announcement-text">
              New email security measures will be implemented next week.
            </div>
          </div>
          <div className="announcement">
            <div className="announcement-date">April 10, 2024</div>
            <div className="announcement-text">
              Monthly maintenances scheduled for April 25, 2024.
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-title">Recent Requests</div>
          <table className="request-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Item</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Laptop</td>
                <td>Apr 20</td>
                <td className="status approved">Approved</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Monitor</td>
                <td>Apr 19</td>
                <td className="status pending">Pending</td>
              </tr>
              <tr>
                <td>Alice Johns</td>
                <td>Keyboard</td>
                <td>Apr 18</td>
                <td className="status denied">Denied</td>
              </tr>
              <tr>
                <td>Bob Brown</td>
                <td>Mouse</td>
                <td>Apr 17</td>
                <td className="status approved">Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
