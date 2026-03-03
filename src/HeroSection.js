import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="hero-content">
            <h1>Welcome to Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon Restaurant is a traditional native food restaurant that serves authentic local dishes made from fresh ingredients and cultural recipes.<br />
            It offers a warm, welcoming atmosphere where guests can enjoy homemade meals and experience rich traditional flavors in a comfortable setting.</p>
            <button className="hero-button">Reserve a Table</button>
        </div>
        <div className="hero-image">
            <img src="/restauranfood.jpg" alt="Little Lemon Restaurant" />
        </div>
    </section>
  );
}
export default HeroSection;