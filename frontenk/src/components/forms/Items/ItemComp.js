import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemComp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://ecommerce-app-umqe.onrender.com/api/items/')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const url = `https://ecommerce-app-umqe.onrender.com/api/search-items/?query=${searchQuery}`;
      const response = await axios.get(url);
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleAddToCart = (itemId) => {
    axios.post('https://ecommerce-app-umqe.onrender.com/api/cart/add/', { item: itemId })
      .then((response) => {
        
        
      })
      .catch((error) => {
        alert("Failed to add item to cart");
        
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ marginLeft: '20px', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <button onClick={handleSearch}>Search</button>
      <br></br>
      <br></br>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #000000', padding: '8px', textAlign: 'left' }}>Title</th>
            <th style={{ border: '1px solid #000000', padding: '8px', textAlign: 'left' }}>Variant Price</th>
            <th style={{ border: '1px solid #000000', padding: '8px', textAlign: 'left' }}>Image</th>
            <th style={{ border: '1px solid #000000', padding: '8px', textAlign: 'left' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} style={{ border: '1px solid #000000' }}>
              <td style={{ border: '1px solid #000000', padding: '8px' }}>{item.title}</td>
              <td style={{ border: '1px solid #000000', padding: '8px' }}>${item.variant_price}</td>
              <td style={{ border: '1px solid #000000', padding: '8px' }}><img src={item.image_src} alt="item" style={{ width: '100px', height: 'auto' }} /></td>
              <td style={{ border: '1px solid #000000', padding: '8px' }}>
                <button onClick={() => handleAddToCart(item.id)}
                  style={{ backgroundColor: '#2e7d32', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }} >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemComp;
