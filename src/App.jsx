
import React, { useState, useEffect } from 'react';
import ProductList from './components/Products';  // 
import ShoppingCart from './components/shoppingCart';
import Navbar from './components/Navbar';
import './App.css'

const App = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState('');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(cart.map(item => (item.id === itemId ? { ...item, quantity: newQuantity } : item)));
  };

  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const applyCoupon = () => {
    if (couponCode === 'WEB3BRIDGECOHORTx') {
      setCart(cart.map(item => ({ ...item, amount: item.amount * 0.9 })));
      alert('Coupon applied successfully!');
    } else {
      alert('Invalid coupon code');
    }
  };

  const totalAmount = cart.reduce((total, item) => total + item.amount * item.quantity, 0);

  const handleCouponChange = (value) => {
    setCouponCode(value);
  };

  return (
    <div>
      <Navbar /> 
      <h1 className='Too-close'>Welcome to Jordan's Unique Collection</h1>
      <ProductList addToCart={addToCart} />
      <ShoppingCart
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        applyCoupon={applyCoupon}
        totalAmount={totalAmount}
        couponCode={couponCode}
        handleCouponChange={handleCouponChange}
      />
    </div>
  );
};

export default App;
