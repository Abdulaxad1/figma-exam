import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import './Cart.css';

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">Savatchangiz bo'sh</div>
      ) : (
        <div className="cart-content">
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price}</p>
                </div>
                <button className="remove-btn"><FiTrash2 /></button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Summary</h3>
            <div className="summary-row">
              <span>Total Products:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="summary-row total">
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;