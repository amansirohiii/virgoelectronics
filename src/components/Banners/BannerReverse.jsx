import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function BannerReverse({ title, text, img }) {
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
    <div ref={bannerRef} className="banner bannerrev">
      <div className="container">
        <div className="banner-container-reverse">
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.Top(0, 0)} to="products/ceiling">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img src={img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerReverse;
