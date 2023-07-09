import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="ceiling">
              <button onClick={() => handleBtnName("ceiling")}>
                Ceiling
              </button>
            </Link>
            <Link to="cooler">
              <button onClick={() => handleBtnName("cooler")}>
                Cooler
              </button>
            </Link>
            <Link to="pedestal">
              <button onClick={() => handleBtnName("pedestal")}>Pedestal</button>
            </Link>
            <Link to="heater">
              <button onClick={() => handleBtnName("heater")}>Heater</button>
            </Link>
            <Link to="immersion">
              <button onClick={() => handleBtnName("immersion")}>Immersion</button>
            </Link>
            <Link to="skin-care">
              <button onClick={() => handleBtnName("skin care")}>
                Skin Care
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
