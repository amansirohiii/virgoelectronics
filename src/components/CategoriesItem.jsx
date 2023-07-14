import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { items } from "./AllData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function CategoriesItem() {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImages = entry.target.querySelectorAll(".lazy-load");
            lazyImages.forEach((lazyImage) => {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy-load");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "200px" } // Adjust the rootMargin value as per your preference
    );

    observer.observe(containerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="proud-container">
      <div className="container" ref={containerRef}>
        <div className="products-grid">
          {items.map((item) => (
            <div key={item.id} className="product normal">
              <Link onClick={() => window.top(0, 0)} to={`/categories/product/${item.id}`}>
                <div className="product-header">
                  <LazyLoadImage
                    src={item.img}
                    alt="product1"
                    effect="blur"
                    className="lazy-load"
                    data-src={item.img}
                  />
                </div>
                <div className="product-details">
                  <p>{item.description}</p>
                  {/* <p className="item-price">{item.price}$</p> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default CategoriesItem;
