import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("all");
  const location = useLocation();

  useEffect(() => {
    // Function to get the category name from the URL path
    const getCategoryFromPath = () => {
      const path = location.pathname;
      const parts = path.split("/");
      if (parts.length >= 3) {
        const categoryFromUrl = parts[2].replace(/-/g, " "); // Replace hyphens with spaces
        return categoryFromUrl;
      }
      return "all"; // Default to "all" if category is not found in the path
    };

    const categoryFromPath = getCategoryFromPath();
    setBtnName(categoryFromPath);
  }, [location.pathname]);

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.top(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i>{" "}
              <span className="homee">Home</span>
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all">
              <button>All</button>
            </Link>
            <Link to="ceiling-fans">
              <button>Ceiling</button>
            </Link>
            <Link to="cooler">
              <button>Cooler</button>
            </Link>
            <Link to="pedestal-fans"
            ><button>Pedestal</button>
            </Link>
            <Link to="exhaust-fans" >
              <button>Exhaust Fan</button>
            </Link>
            <Link to="heating" >
              <button>Heating</button>
            </Link>
            <Link to="electric-iron" >
              <button>Electric Iron</button>
            </Link>
            <Link to="madhani" >
              <button>Madhani</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;