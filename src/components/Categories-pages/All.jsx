import CategoriesItem from "../CategoriesItem";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
function All(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])

  return (
    <>
    <Helmet>
        <title>All Products - Virgo Electronics</title>

        <meta
          name="description"
          content="Explore a wide range of products from Virgo Electronics, including ceiling fans, coolers, pedestal fans, exhaust fans, heaters, immersion rods, and madhanis. Find energy-efficient and reliable products for your cooling and heating needs."
        />

        <meta
          name="keywords"
          content="ceiling fans, coolers, pedestal fans, exhaust fans, heaters, immersion rods, madhanis, Virgo Electronics, Ghaziabad, energy-efficient, reliable products, cooling, heating"
        />
        </Helmet>
      <h1 className="seo-text">All Products - Virgo Electronics</h1>
      <CategoriesItem />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}

export default All;
