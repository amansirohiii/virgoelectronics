import CategoriesItemMadhani from "./CategoriesItemMadhani";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
export default function Madhani(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])


  return (
    <>
    <Helmet>
        <title>Madhani Manufacturer in Ghaziabad - Virgo Electronics</title>
        <meta name="description" content="Welcome to our Ghaziabad-based madhani manufacturing company. We offer a wide range of high-quality madhanis suitable for residential, industrial, and commercial spaces. Our madhanis are energy-efficient, stylishly designed, and equipped with advanced features for optimal performance. As a leading madhani supplier in Ghaziabad, we take pride in providing custom madhani solutions to meet diverse customer needs. Explore our collection of affordable and durable madhanis that combine aesthetics with functionality. Contact us today to discover why we are the preferred choice for madhanis in Ghaziabad."/>
        <meta name="keywords" content="Ghaziabad Madhani Manufacturer, Best Madhanis in Ghaziabad, Top Madhani Supplier Ghaziabad, Quality Madhani Manufacturer Ghaziabad, Affordable Madhanis Ghaziabad, Energy-efficient Madhanis Ghaziabad, Custom Madhanis Manufacturer Ghaziabad, Ghaziabad Industrial Madhanis, Residential Madhanis Ghaziabad, Ghaziabad Madhani Exporter, High-Speed Madhanis Ghaziabad, Ghaziabad Designer Madhanis, Madhani Wholesaler Ghaziabad, Ghaziabad Decorative Madhanis Manufacturer, Commercial Madhanis Ghaziabad, Ghaziabad Electric Madhani Supplier, Ghaziabad Remote Control Madhanis, Modern Madhanis Ghaziabad, Madhani Manufacturer in Ghaziabad, Madhani, Ghaziabad"/>
      </Helmet>
      <h1 className="seo-text">Madhani Manufacturer in Ghaziabad</h1>

      <CategoriesItemMadhani />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


