import CategoriesItemCooler from "./CategoriesItemCooler";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

export default function Cooler(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])


  return (
    <>
    <Helmet>
        <title>Cooler Manufacturer in Ghaziabad - Virgo Electronics</title>
        <meta name="description" content="Welcome to our Ghaziabad-based cooler manufacturing company. We offer a wide range of high-quality coolers suitable for residential, industrial, and commercial spaces. Our coolers are energy-efficient, stylishly designed, and equipped with advanced features for optimal performance. As a leading cooler supplier in Ghaziabad, we take pride in providing custom cooler solutions to meet diverse customer needs. Explore our collection of affordable and durable coolers that combine aesthetics with functionality. Contact us today to discover why we are the preferred choice for coolers in Ghaziabad."/>
        <meta name="keywords" content="Ghaziabad Cooler Manufacturer, Best Coolers in Ghaziabad, Top Cooler Supplier Ghaziabad, Quality Cooler Manufacturer Ghaziabad, Affordable Coolers Ghaziabad, Energy-efficient Coolers Ghaziabad, Custom Coolers Manufacturer Ghaziabad, Ghaziabad Industrial Coolers, Residential Coolers Ghaziabad, Ghaziabad Cooler Exporter, High-Speed Coolers Ghaziabad, Ghaziabad Designer Coolers, Cooler Wholesaler Ghaziabad, Ghaziabad Decorative Coolers Manufacturer, Commercial Coolers Ghaziabad, Ghaziabad Electric Cooler Supplier, Ghaziabad Remote Control Coolers, Modern Coolers Ghaziabad, Ghaziabad Bladeless Coolers, Cooler Manufacturer in Ghaziabad"/>
      </Helmet>
      <h1 className="seo-text">Cooler Manufacturer in Ghaziabad</h1>
      <CategoriesItemCooler />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


