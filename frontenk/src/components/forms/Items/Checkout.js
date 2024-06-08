import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Checkout completed successfully!');
  };

  return (
    <div className="main-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <div className="checkout-form" style={{
        backgroundColor: '#ffffff',
        border: '1px solid #dddddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '100%',
        maxWidth: '600px',
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', textAlign: 'center' }}>Checkout</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Shipping Information */}
          <h3 style={{ marginBottom: '10px' }}>Shipping Information</h3>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Zip Code:</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>

          
          <h3 style={{ marginBottom: '10px' }}>Payment Information</h3>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Name on Card:</label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>Expiry Date:</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ fontWeight: 'bold' }}>CVV:</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cccccc' }}
            />
          </div>

          <button type="submit" style={{ backgroundColor: '#007bff', color: '#ffffff', border: 'none', padding: '12px 20px', cursor: 'pointer', borderRadius: '4px', fontSize: '1rem' }}>Complete Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
