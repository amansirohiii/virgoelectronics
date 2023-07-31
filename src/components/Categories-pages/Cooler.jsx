import CategoriesItemCooler from "./CategoriesItemCooler";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
export default function Cooler(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])
  useEffect(() => {
    document.title = 'Coolers - Virgo Electronics';
  }, []);

  return (
    <>
      <CategoriesItemCooler />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


