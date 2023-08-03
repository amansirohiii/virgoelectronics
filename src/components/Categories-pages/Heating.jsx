import CategoriesItemHeater from "./CategoriesItemHeating";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
export default function Heater(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])


  return (
    <>
    <Helmet>
        <title>Heater & Immersion Rod Manufacturer in Ghaziabad - Virgo Electronics</title>
        <meta name="description" content="Welcome to our Ghaziabad-based heater manufacturing company. We offer a wide range of high-quality heaters suitable for residential, industrial, and commercial spaces. Our heaters are energy-efficient, stylishly designed, and equipped with advanced features for optimal performance. As a leading heater supplier in Ghaziabad, we take pride in providing custom heater solutions to meet diverse customer needs. Explore our collection of affordable and durable heaters that combine aesthetics with functionality. Contact us today to discover why we are the preferred choice for heaters in Ghaziabad."/>
        <meta name="keywords" content="Ghaziabad Heater Manufacturer, Best Heaters in Ghaziabad, Top Heater Supplier Ghaziabad, Quality Heater Manufacturer Ghaziabad, Affordable Heaters Ghaziabad, Energy-efficient Heaters Ghaziabad, Custom Heaters Manufacturer Ghaziabad, Ghaziabad Industrial Heaters, Residential Heaters Ghaziabad, Ghaziabad Heater Exporter, High-Speed Heaters Ghaziabad, Ghaziabad Designer Heaters, Heater Wholesaler Ghaziabad, Ghaziabad Decorative Heaters Manufacturer, Commercial Heaters Ghaziabad, Ghaziabad Electric Heater Supplier, Ghaziabad Remote Control Heaters, Modern Heaters Ghaziabad, Heater Manufacturer in Ghaziabad, Immersion Rod manufacturer in Ghaziabad"/>
      </Helmet>
      <h1 className="seo-text">Heater & Immersion Rod Manufacturer in Ghaziabad</h1>
      <CategoriesItemHeater/>
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


