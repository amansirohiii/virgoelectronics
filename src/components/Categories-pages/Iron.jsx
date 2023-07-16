import CategoriesItemIron from "./CategoriesItemIron";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";

export default function Iron(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])

  return (
    <>
      <CategoriesItemIron />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


