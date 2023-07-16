import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("all");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.top(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> <span className="homee">Home</span>
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
              <button onClick={() => handleBtnName("heating")}>Heating</button>
            </Link>
            <Link to="iron">
              <button onClick={() => handleBtnName("iron")}>Electric Iron</button>
            </Link>
            {/* <Link to="geyser">
              <button onClick={() => handleBtnName("geyser")}>
                Geyser
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
