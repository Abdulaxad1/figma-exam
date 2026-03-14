import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './AllCategories.css';

function AllCategories(props) {
  const navigate = useNavigate();

  const { categories } = props;

  return (
    <div className="all-categories-page">

      <div className="back-nav" onClick={() => navigate('/')}>
        <FiArrowLeft /> <span>Back to Home</span>
      </div>

      <h1 className="page-title">Shop by All <span className="highlight">Categories</span></h1>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className="category-full-card"
            onClick={() => navigate('/')} 
          >
            <div className="image-wrapper">
              <img src={cat.img} alt={cat.name} />
            </div>
            <h3>{cat.name}</h3>
            <p>Explore all products in this category</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCategories;