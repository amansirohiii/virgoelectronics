import React from "react";
import { Link } from "react-router-dom";
import { items } from "../AllData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CategoriesItem() {
  const filteredItems = items.filter((item) => item.category === "iron");

  return (
    <>
      <div className="proud-container">
        <div className="container">
        <h1 style={{ display: 'none' }}>Electric Iron Manufacturer in Ghaziabad</h1>
          <div className="products-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="product normal">
                <Link onClick={() => window.top(0, 0)} to={`/categories/product/${item.id}`}>
                  <div className="product-header">
                    <div className="image-placeholder" style={{ height: "100%" }} />
                    <LazyLoadImage
                      src={item.img}
                      alt={item.description}
                      effect="blur"
                    />
                  </div>
                  <div className="product-details">
                  <h2 className="seo-h2">{item.description}</h2>
                    {/* <p>{item.description}</p> */}
                    {/* <p className="item-price">{item.price}$</p> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItem;
