
import React from 'react';
import './shoppingCart.css';

const ShoppingCart = ({ cart, updateQuantity, removeItem, applyCoupon, totalAmount, couponCode, handleCouponChange }) => {
  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li className="cart-item" key={item.id}>
            <span>{item.name} - ${item.amount * item.quantity}</span>
            <div>
              Quantity:
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <div className="coupon-section">
        <input
          className="coupon-input"
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => handleCouponChange(e.target.value)}
        />
        <button className="apply-coupon-button" onClick={applyCoupon}>Apply Coupon</button>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default ShoppingCart;
