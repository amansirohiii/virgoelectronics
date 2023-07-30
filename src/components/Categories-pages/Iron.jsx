import CategoriesItemIron from "./CategoriesItemIron";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";

export default function Iron(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])
  useEffect(() => {
    document.title = 'Electric Iron - Virgo Electronics';
  }, []);

  return (
    <>
      <CategoriesItemIron />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


