import CategoriesItemCeiling from "./CategoriesItemCeiling";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

export default function Ceiling(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])

  return (
    <>
    <Helmet>
        <title>Ceiling Fans Manufacturer in Ghaziabad - Virgo Electronics</title>
        <meta name="description" content="Welcome to our Ghaziabad-based ceiling fan manufacturing company. We offer a wide range of high-quality ceiling fans suitable for residential, industrial, and commercial spaces. Our fans are energy-efficient, stylishly designed, and equipped with advanced features for optimal performance. As a leading fan supplier in Ghaziabad, we take pride in providing custom ceiling fan solutions to meet diverse customer needs. Explore our collection of affordable and durable ceiling fans that combine aesthetics with functionality. Contact us today to discover why we are the preferred choice for ceiling fans in Ghaziabad."/>

        <meta name="keywords" content="Ghaziabad Ceiling Fan Manufacturer, Best Ceiling Fans in Ghaziabad, Top Ceiling Fan Supplier Ghaziabad, Quality Ceiling Fan Manufacturer Ghaziabad, Affordable Ceiling Fans Ghaziabad, Energy-efficient Ceiling Fans Ghaziabad, Custom Ceiling Fans Manufacturer Ghaziabad, Ghaziabad Industrial Ceiling Fans, Residential Ceiling Fans Ghaziabad, Ghaziabad Fan Exporter, High-Speed Ceiling Fans Ghaziabad, Ghaziabad Designer Ceiling Fans, Ceiling Fan Wholesaler Ghaziabad, Ghaziabad Decorative Fans Manufacturer, Commercial Ceiling Fans Ghaziabad, Ghaziabad Electric Fan Supplier, Ghaziabad Remote Control Ceiling Fans, Modern Ceiling Fans Ghaziabad, Ghaziabad Bladeless Ceiling Fans, Ceiling Fan Manufacturer in Ghaziabad"/>

      </Helmet>
      <h1 className="seo-text">Ceiling Fans Manufacturer in Ghaziabad</h1>
      <CategoriesItemCeiling />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


