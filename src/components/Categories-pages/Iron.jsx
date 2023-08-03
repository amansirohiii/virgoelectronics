import CategoriesItemIron from "./CategoriesItemIron";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

export default function Iron(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])


  return (
    <>
    <Helmet>
        <title>Electric Iron Manufacturer in Ghaziabad - Virgo Electronics</title>
        <meta name="description" content="Welcome to our Ghaziabad-based electric iron manufacturing company. We offer a wide range of high-quality electric irons suitable for residential, industrial, and commercial spaces. Our irons are energy-efficient, stylishly designed, and equipped with advanced features for optimal performance. Explore our collection of affordable and durable irons that combine aesthetics with functionality. Contact us today to discover why we are the preferred choice for electric irons in Ghaziabad."/>
        <meta name="keywords" content="Ghaziabad Electric Iron Manufacturer, Best Electric Irons in Ghaziabad, Top Electric Iron Supplier Ghaziabad, Quality Electric Iron Manufacturer Ghaziabad, Affordable Electric Irons Ghaziabad, Energy-efficient Electric Irons Ghaziabad, Custom Electric Irons Manufacturer Ghaziabad, Ghaziabad Industrial Electric Irons, Residential Electric Irons Ghaziabad, Ghaziabad Electric Iron Exporter, High-Speed Electric Irons Ghaziabad, Ghaziabad Designer Electric Irons, Electric Iron Wholesaler Ghaziabad, Ghaziabad Decorative Electric Irons Manufacturer, Commercial Electric Irons Ghaziabad, Ghaziabad Electric Iron Supplier, Ghaziabad Remote Control Electric Irons, Modern Electric Irons Ghaziabad, Electric Iron Manufacturer in Ghaziabad"/>
      </Helmet>
      <h1 className="seo-text">Electric Iron Manufacturer in Ghaziabad</h1>
      <CategoriesItemIron />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


