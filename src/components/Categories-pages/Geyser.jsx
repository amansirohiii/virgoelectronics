import CategoriesItemGeyser from "./CategoriesItemGeyser";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
export default function Geyser(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])

  return (
    <>
      <CategoriesItemGeyser />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


