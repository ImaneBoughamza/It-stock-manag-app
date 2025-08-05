import React, { useState } from 'react';
import './RequestForm.css';

const RequestEquipment = () => {
  const [formData, setFormData] = useState({
    equipment: '',
    quantity: 1,
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Request submitted:', formData);
  };

  return (
    <div className="request-page-wrapper">
      <div className="request-equipment">
        <h2>Request New Equipment</h2>
        <form onSubmit={handleSubmit} className="equipment-form">
          <label htmlFor="equipment">Equipment</label>
          <input
            type="text"
            id="equipment"
            name="equipment"
            value={formData.equipment}
            onChange={handleChange}
            required
          />

          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <label htmlFor="reason">Reason for Request</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default RequestEquipment;
