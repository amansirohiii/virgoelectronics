import CategoriesItem from "../CategoriesItem";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
function All(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])
  useEffect(() => {
    document.title = 'All Products - Virgo Electronics';
  }, []);
  return (
    <>
      <CategoriesItem />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default All;
