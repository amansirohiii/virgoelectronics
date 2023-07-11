import CategoriesItemPedestal from "./CategoriesItemPedestal";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
export default function Pedestal(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])

  return (
    <>
      <CategoriesItemPedestal />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


