import React from 'react';
import Hero from '../components/hero/Hero';
import Brands from '../components/brands/Brands';
import ProductCard from '../components/product/ProductCard';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home({ products, categories }) {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Hero />
      <Brands />
      <section className="deals-section">
        <div className="section-header">
          <h2>TODAY'S DEALS OF THE DAY</h2>
          <div className="timer">Deals ends in: <span>16d : 21h : 57m : 23s</span></div>
          <button className="view-all" onClick={() => navigate('/categories')}>VIEW ALL</button>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="categories-section">
        <div className="section-header">
          <h2>SHOP FROM <span className="highlight">TOP CATEGORIES</span></h2>
          <button className="view-all" onClick={() => navigate('/categories')}>VIEW ALL</button>
        </div>
        <div className="categories-list">
          {categories.map((cat, index) => (
            <div key={index} className="cat-item" onClick={() => navigate('/categories')}>
              <div className="cat-img-box">
                <img src={cat.img} alt={cat.name} />
              </div>
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;