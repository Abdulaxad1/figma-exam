import React from 'react';
import './Brands.css';

function Brands() {
  const brandList = [
    { id: 1, name: "ZARA", logo: "./images/Zara.png" },
    { id: 2, name: "D&G", logo: "./images/DolceGabbana.png" },
    { id: 3, name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" },
    { id: 4, name: "CHANEL", logo: "./images/Chanel.png" },
    { id: 5, name: "PRADA", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg" },
    { id: 6, name: "BIBA", logo: "./images/Biba.png" }
  ];

  return (
    <section className="brands-section">
      <h2 className="brands-title">SHOP BY BRANDS</h2>
      
      <div className="brands-grid">
        {brandList.map((brand) => (
          <div key={brand.id} className="brand-card">
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;