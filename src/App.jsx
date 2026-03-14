import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AllCategories from './pages/AllCategories';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 1125, oldPrice: 1500, img: "./images/phone.png", category: "Shoes", tag: "New" },
    { id: 2, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 1125, oldPrice: 1500, img: "./images/phone.png", category: "Shoes", tag: "New" },
    { id: 3, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 1125, oldPrice: 1500, img: "./images/phone.png", category: "Shoes", tag: "New" },
    { id: 4, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: 1125, oldPrice: 1500, img: "./images/phone.png", category: "Shoes", tag: "New" },
  ];

  const categories = [
    { name: "Mobile", img: "./images/mobile.png" },
    { name: "Cosmetics", img: "./images/cosmetics.png" },
    { name: "Electronics", img: "./images/electronics.png" },
    { name: "Furniture", img: "./images/furniture.png" },
    { name: "Watches", img: "./images/watches.png" },
    { name: "Decor", img: "./images/decor.png" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Header categories={categories} cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home products={products} categories={categories} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} products={products} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        <Route path="/categories" element={<AllCategories categories={categories} />} />
      </Routes>
      <Footer />  
    </>
  );
}

export default App;
