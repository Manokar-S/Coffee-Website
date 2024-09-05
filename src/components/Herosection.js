import React from 'react';
import './Herosection.css';
import heroImage from 'C:/Users/hp/aspcrud-frontend/src/Images/coffee-hero-section.png'; // Update the path as needed

const Herosection = () => {
  return (
    <section className="hero-section">
      <div className="section-container">
        <div className="hero-container">
          <div className="hero-details">
            <h2 className="hero-title">Best Coffee</h2>
            <h3 className="hero-subtitle">Make your day great with our special coffee!</h3>
            <p className="hero-description">
              Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.
            </p>
            <div className="hero-buttons">
              <button className="button order-now-button">Order Now</button>
              <button className="button contact-us-button">Contact Us</button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Coffee" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
