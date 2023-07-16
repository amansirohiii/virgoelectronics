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
              <button onClick={() => handleBtnName("ceiling fans")}>
                Ceiling
              </button>
            </Link>
            <Link to="cooler">
              <button onClick={() => handleBtnName("cooler")}>
                Cooler
              </button>
            </Link>
            <Link to="pedestal">
              <button onClick={() => handleBtnName("pedestal fans")}>Pedestal</button>
            </Link>
            <Link to="exhaust">
              <button onClick={() => handleBtnName("exhaust fans")}>
                Exhaust Fan
              </button>
            </Link>
            <Link to="heating">
              <button onClick={() => handleBtnName("heating")}>Heating</button>
            </Link>
            <Link to="iron">
              <button onClick={() => handleBtnName("electric iron")}>Electric Iron</button>
            </Link>
            <Link to="madhani">
              <button onClick={() => handleBtnName("Madhani")}>Madhani</button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
