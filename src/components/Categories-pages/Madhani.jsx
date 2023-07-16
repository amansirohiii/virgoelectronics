import CategoriesItemMadhani from "./CategoriesItemMadhani";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
export default function Madhani(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])

  return (
    <>
      <CategoriesItemMadhani />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


