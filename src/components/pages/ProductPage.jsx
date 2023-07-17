import { useParams } from "react-router-dom";
import { items } from "../AllData";
import FeaturedSlider from "../Featured/FeaturedSlider";
import "./ProductPage.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductPage(props) {
  useEffect(() => {
    props.setProgress(100);
  }, []);

  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  const renderSpecifications = () => {
    const itemId = parseInt(id);

    if (itemId >= 1 && itemId <= 7) {
      return (
        <><div className="specifications">
          <div className="spec">
            <p className="spec-title">Color:</p>
            <p className="title-desc">{item[0].color}</p>
          </div>
          <div className="spec">
            <p className="spec-title">Sweep:</p>
            <p className="title-desc">{item[0].sweep}</p>
          </div>
          <div className="spec">
            <p className="spec-title">Bearing:</p>
            <p className="title-desc">{item[0].bearing}</p>
          </div>
          </div>
        </>
      );
    } else if (itemId >= 8 && itemId <= 18) {
      return (
        <>
        <div className="specifications">
          <div className="spec">
            <p className="spec-title">Size:</p>
            <p className="title-desc">{item[0].size}</p>
          </div>
          <div className="spec">
            <p className="spec-title">Motor:</p>
            <p className="title-desc">{item[0].motor}</p>
          </div>
          <div className="spec">
            <p className="spec-title">Tank Capacity:</p>
            <p className="title-desc">{item[0].capacity}</p>
          </div>
</div>
        </>
      );
    } else if (itemId >= 19 && itemId <= 20) {
      <div className="hide-spec"></div>
      return null;
    }
    else if (itemId >= 21 && itemId <= 22) {
      <div className="hide-spec"></div>
      return null;
    }
    else if (itemId >= 23 && itemId <= 24) {
      <div className="hide-spec"></div>
      return null;
    }
    else if (itemId >= 25 && itemId <= 27) {
      <div className="hide-spec"></div>
      return null;
    }
    else if (itemId >= 28 && itemId <= 100) {
      <div className="hide-spec"></div>
      return null;
    }


    return null; // Return null if no specifications match the item ID
  };


  function renderSpecs(specs) {
    return specs.split('\n').map((line, index) => {
      const [key, value] = line.split(':');
      if (key && value) {
        return (
          <React.Fragment key={index}>
            <strong>{key.trim()}:</strong> {value.trim()}
            <br />
          </React.Fragment>
        );
      }
      return null;
    });
  }
  return (
    <>
      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={item[0].img} alt="product" />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{renderSpecs(item[0].specs)}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
                <button className="product-enquiry-btn">Enquiry</button>
              </Link>
            </div>
          </div>
          <span className="specss">
          {renderSpecifications()}
          </span>

             </div>

        <br />
        <FeaturedSlider />
      </div>
    </>
  );
}

export default ProductPage;
