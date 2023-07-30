import CategoriesItemExhaust from "./CategoriesItemExhaust";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
export default function Exhaust(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])
  useEffect(() => {
    document.title = 'Exhaust Fans - Virgo Electronics';
  }, []);

  return (
    <>
      <CategoriesItemExhaust />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


