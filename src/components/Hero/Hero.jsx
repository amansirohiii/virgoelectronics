import React from "react";
import "./Hero.css";
import Bg from "../../assests/images/bg.webp";
import Logo from "../../assests/images/logo1.webp";

export default function Hero() {
  return (
    <div className="hero-banner">
      <div className="bg-image" style={{ backgroundImage: `url(${Bg})` }}></div>
      <div className="hero-content">
        <div className="logo-container">
          <img src={Logo} alt="Virgo Electronics" className="logo" />
        </div>
        <h2 className="hero-subheading">ELECTRONICS</h2>
        <a href="/products/all">
          <button className="hero-button">Products</button>
        </a>
      </div>
    </div>
  );
}
