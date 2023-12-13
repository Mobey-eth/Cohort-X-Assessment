
import React from 'react';
import './Products.css'; 
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpeg';

const products = [
    {
      id: 1,
      name: "Nike Air Jordan 1",
      amount: 150,
      image: image1,
    },
    {
      id: 2,
      name: "Nike Air Jordan 4",
      amount: 200,
      image: image2,
    },
    {
      id: 3,
      name: "Nike Air Jordan 6",
      amount: 180,
      image: image3,
    },
    {
      id: 4,
      name: "Nike Air Jordan 11",
      amount: 220,
      image: image4,
    },
    {
      id: 5,
      name: "Nike Air Jordan 13",
      amount: 190,
      image: image5,
    },
    {
      id: 6,
      name: "Nike Air Jordan 18",
      amount: 250,
      image: image6,
    },
    {
      id: 7,
      name: "Nike Air Jordan 23",
      amount: 230,
      image: image7,
    },
    {
      id: 8,
      name: "Nike Air Jordan 33",
      amount: 260,
      image: image8,
    },
    {
      id: 9,
      name: "Nike Air Jordan 35",
      amount: 280,
      image: image9,
    },
    {
      id: 10,
      name: "Nike Air Jordan 36",
      amount: 300,
      image: image10,
    },
  ]; 

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>${product.amount}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
