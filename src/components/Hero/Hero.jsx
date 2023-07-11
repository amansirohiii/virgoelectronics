import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-heading">VIRGO ELECTRONICS</h1>
        <h2 className="hero-subheading">VIRGO fans - cool without compromise</h2>
         <a href="/products/all"><button className="hero-button">Products</button></a>

      </div>
    </div>
  );
}


