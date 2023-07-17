import React from "react";
import "./ProductSection.css";
import { Link } from "react-router-dom";

import CeilingIcon from "../../assests/images/Icons/ceiling.png";
import CoolerIcon from "../../assests/images/Icons/cooler.png";
import PedestalIcon from "../../assests/images/Icons/pedestal.png";
import HeatingIcon from "../../assests/images/Icons/heating.png";
import ExhaustIcon from "../../assests/images/Icons/exhaust.png";
import IronIcon from "../../assests/images/Icons/iron.png";
// import MadhaniIcon from "../../assests/images/Icons/madhani.png";



const ProductSection = () => {
  const products = [
    { name: "Ceiling Fan", color: "#FF6384", icon: CeilingIcon, link: "/products/ceiling" },
    { name: "Cooler", color: "#36A2EB", icon: CoolerIcon, link: "/products/cooler" },
    { name: "Pedestal Fan", color: "#FFCE56", icon: PedestalIcon, link: "/products/pedestal" },
    { name: "Heating", color: "#4BC0C0", icon: HeatingIcon, link: "/products/heating" },
    { name: "Exhaust Fan", color: "#FF6384", icon: ExhaustIcon, link: "/products/exhaust" },
    { name: "Electric Iron", color: "#36A2EB", icon: IronIcon, link: "/products/iron" },
    { name: "Madhani", color: "#FFCE56", icon: IronIcon, link: "/products/madhani" },
  ];

  return (
    <div className="product-section">
      <h2 className="product-heading">Products</h2>
      <div className="product-circles">
        {products.map((product, index) => (
          <Link onClick={() => window.scrollTo(0, 10)} to={product.link} key={index} className="product-link">
            <div className="product-circle" >
              <img src={product.icon} alt={product.name} className="product-icon" />
              {/* <span className="product-name">{product.name}</span> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
