import CategoriesItem from "../CategoriesItem";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
function All(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])
  return (
    <>
      <CategoriesItem />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default All;
