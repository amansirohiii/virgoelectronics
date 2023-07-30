import CategoriesItemCeiling from "./CategoriesItemCeiling";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
export default function Ceiling(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])
  useEffect(() => {
    document.title = 'Ceiling Fans - Virgo Electronics';
  }, []);

  return (
    <>
      <CategoriesItemCeiling />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


