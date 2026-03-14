import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Hero.css';

function Hero() {
  const banner = {
    subTitle: "Best Deal Online on smart watches",
    mainTitle: "LATEST NIKE SHOES",
    discount: "UP TO 80% OFF",
    imageUrl: "https://freepngimg.com/save/27428-nike-shoes-transparent-background/1000x582" 
  };

  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-arrow left">
          <FiChevronLeft />
        </div>

        <div className="hero-content">
          <p className="hero-subtitle">{banner.subTitle}</p>
          <h1 className="hero-title">{banner.mainTitle}</h1>
          <p className="hero-discount">{banner.discount}</p>
          

          <div className="hero-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="hero-image-container">
          <img 
            src={banner.imageUrl} 
            alt="Latest Nike Shoes" 
            className="hero-image" 
          />
        </div>

        <div className="hero-arrow right">
          <FiChevronRight />
        </div>
      </div>
    </section>
  );
}

export default Hero;