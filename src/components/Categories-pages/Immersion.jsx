import CategoriesItemImmersion from "./CategoriesItemImmersion";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";

export default function Immersion(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])

  return (
    <>
      <CategoriesItemImmersion />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


