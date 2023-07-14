import React, {useState, useEffect} from "react";
import "./Hero.css";
import Bg from "../../assests/images/bg.jpg";

export default function Hero() {

  const heroStyle = {
    backgroundImage: `url(${Bg})`,
    // opacity: 0.5,
  };

  return (
    <div className="hero-banner" style={heroStyle}>
      <div className="hero-content">
        <h1 className="hero-heading">VIRGO ELECTRONICS</h1>
        <h2 className="hero-subheading">VIRGO fans - cool without compromise</h2>
        <a href="/products/all">
          <button className="hero-button">Products</button>
        </a>
      </div>
    </div>
  );
}
