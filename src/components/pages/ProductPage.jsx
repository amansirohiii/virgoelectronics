import { useParams } from "react-router-dom";
import { items } from "../AllData";
import FeaturedSlider from "../Featured/FeaturedSlider";
// import Newsletter from "../components/Newsletter";
import Footer from "../Footer/Footer";
// import React, { useState } from "react";
import "../ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));
  // const [image, setImage] = useState(item[0].img);
const image = item[0].img;
  // const changeImage = (e) => {
  //   setImage(e.target.src);
  // };

  return (
    <>
      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              {/* <div className="small-imgs">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
              </div> */}
            </div>
            <div className="product-right">
              <p className="product-spec">{item[0].specs}</p>
              <div className="atc-buy">
                {/* Removed the "add to cart" and "buy now" buttons */}
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Texture:</p>
              <p className="title-desc">{item[0].texture}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">{item[0].weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">{item[0].size}</p>
            </div>
          </div>
        </div>
        <br />
        <FeaturedSlider />
        {/* <Newsletter /> */}
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
