import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { IoFlashOutline } from 'react-icons/io5';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo white">
            <span style={{ color: "white" }}>UNITED DEALS</span>
          </div>
          <p style={{ color: '#77878F'}}>Customer Supports:</p>
          <p style={{ color: 'white' }}> (000) 555-0199</p>
          <p>4517 Washington Ave. <br />Manchester, Kentucky 39495</p>
          <p style={{ color: 'white' }}>info@kinbo.com</p>
        </div>
        
        <div className="footer-links">
          <h4>TOP CATEGORY</h4>
          <ul>
            <li>Computer & Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li>Accessories</li>
            <li>Camera & Photo</li>
            <li>TV & Homes</li>
            <li style={{ color: 'Yellow' }}>Browse All Products</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>Customer Help</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 United Deals. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;