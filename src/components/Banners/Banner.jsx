import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner({ title, text, img }) {
  const bannerRef = useRef(null);

  useEffect(() => {
    const bannerElement = bannerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(bannerElement);

    return () => {
      observer.unobserve(bannerElement);
    };
  }, []);

  return (
    <div ref={bannerRef} className="banner">
      <div className="container">
        <div className="banner-container">
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.Top(0, 0)} to="products/ceiling-fans">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img src={img} alt="banner ceiling fan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
