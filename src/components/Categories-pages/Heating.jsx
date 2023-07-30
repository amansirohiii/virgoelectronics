import CategoriesItemHeater from "./CategoriesItemHeating";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
export default function Heater(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])
  useEffect(() => {
    document.title = 'Heater & Immersion - Virgo Electronics';
  }, []);

  return (
    <>
      <CategoriesItemHeater/>
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


