import React from "react";
import "./ProductSection.css";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const products = [
    { name: "Ceiling Fan", color: "#FF6384", icon: "🌀", link: "/products/ceiling" },
    { name: "Cooler", color: "#36A2EB", icon: "🌬️", link: "/products/cooler" },
    { name: "Pedestal Fan", color: "#FFCE56", icon: "🌀", link: "/products/pedestal" },
    { name: "Heaters", color: "#4BC0C0", icon: "🔥", link: "/products/heater" },
    { name: "Immersion Rod", color: "#FF9F40", icon: "🔥", link: "/products/immersion" },
  ];

  return (
    <div className="product-section">
      <h2 className="product-heading">Products</h2>
      <div className="product-circles">
        {products.map((product, index) => (
          <Link onClick={() => window.scrollTo(0, 10)}
          to={product.link} key={index} className="product-link">
            <div
              className="product-circle"
              style={{ backgroundColor: product.color }}
            >
              <span className="product-icon">{product.icon}</span>
              <span className="product-name">{product.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
