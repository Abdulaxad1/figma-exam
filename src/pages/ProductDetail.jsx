import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShoppingCart } from 'react-icons/fi';
import './ProductDetail.css';

function ProductDetail({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Mahsulot topilmadi!</h2>;

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <FiArrowLeft /> Back
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={product.img} alt={product.name} />
        </div>
        
        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">${product.price} <span className="old-price">${product.oldPrice}</span></p>
          
          <div className="detail-actions">
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              <FiShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;