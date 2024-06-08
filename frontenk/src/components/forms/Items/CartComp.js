import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CartComp() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    fetch('https://ecommerce-app-umqe.onrender.com/api/cart/')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        setLoading(false);
        fetchItemDetails(data);
      })
      .catch(error => {
        setError('Error fetching cart items:', error);
        setLoading(false);
      });
  };

  const fetchItemDetails = (cartItems) => {
    const itemIds = cartItems.map(item => item.item);
    const promises = itemIds.map(itemId =>
      axios.get(`https://ecommerce-app-umqe.onrender.com/api/items/${itemId}/`)
    );

    Promise.all(promises)
      .then(responses => {
        const details = responses.map(response => response.data);
        const itemDetailsMap = {};
        details.forEach(detail => {
          itemDetailsMap[detail.id] = detail;
        });
        setItemDetails(itemDetailsMap);
      })
      .catch(error => console.error('Error fetching item details:', error));
  };

  const handleRemoveFromCart = (itemId) => {
    axios.delete(`https://ecommerce-app-umqe.onrender.com/api/cart/remove/${itemId}/`)
      .then(() => {
        alert("Item removed from cart successfully");
        fetchCartItems(); 
      })
      .catch(() => {
        alert("Failed to remove item from cart");
        window.location.reload();
      });
  };

  return (
    <div style={{ marginLeft: '20px', marginTop: '20px' }}>
      <center><h2>Cart Items</h2></center>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #000000', padding: '8px', textAlign: 'left' }}>Title</th>
            <th style={{ border: '1px solid #000000', padding: '8px', textAlign: 'left' }}>Price</th>
            <th style={{ border: '1px solid #000000', padding: '8px', textAlign: 'left' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(cartItem => (
            <tr key={cartItem.id} style={{ border: '1px solid #000000' }}>
              <td style={{ border: '1px solid #000000', padding: '8px' }}>{itemDetails[cartItem.item] && itemDetails[cartItem.item].title}</td>
              <td style={{ border: '1px solid #000000', padding: '8px' }}>{itemDetails[cartItem.item] && `$${itemDetails[cartItem.item].variant_price}`}</td>
              <td style={{ border: '1px solid #000000', padding: '8px' }}>
                <button onClick={() => handleRemoveFromCart(cartItem.id)}
                  style={{ backgroundColor: '#c62828', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
                  Remove from Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartComp;
