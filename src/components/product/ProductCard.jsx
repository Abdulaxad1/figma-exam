import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="card-badge">{product.tag}</div>
        <img src={product.img} alt={product.name} className="product-img" />
      <div className="product-info">
        <p className="category-label">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="price-row">
          <button className="buy-btn">BUY NOW - ${product.price}</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard; 