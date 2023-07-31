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
  const getCategoryName = (category) => {
    // Replace these mappings with the actual category names you want to display
    const categoryMap = {
      ceiling: "Ceiling Fans",
      cooler: "Coolers",
      pedestal: "Pedestal Fans",
      exhaust: "Exhaust Fans",
      heating: "Heater & Immersion",
      iron: "Electric Iron",
      madhani: "Madhani",

    };

    return categoryMap[category] || "All Products";
  };



  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));
  if (item) {
    const categoryName = getCategoryName(item[0].category);
    const websiteName = "Virgo Electronics";

    // Set the page title to "productname - category name - website name"
    document.title = `${item[0].description} - ${categoryName} - ${websiteName}`;
  };

  const renderSpecifications = () => {
    const itemId = parseInt(id);

    if (itemId >= 8 && itemId <= 18) {
      return (
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
      );
    } else {
      return (

      <div className="hide-spec"></div>
      // return null;

      );
    }



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
