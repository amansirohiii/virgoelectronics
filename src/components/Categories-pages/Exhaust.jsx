import CategoriesItemExhaust from "./CategoriesItemExhaust";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
export default function Exhaust(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])


  return (
    <>
    <Helmet>
        <title>Exhaust Fans Manufacturer in Ghaziabad - Virgo Electronics</title>
        <meta name="description" content="Welcome to our Ghaziabad-based exhaust fan manufacturing company. We offer a wide range of high-quality exhaust fans suitable for residential, industrial, and commercial spaces. Our fans are energy-efficient, stylishly designed, and equipped with advanced features for optimal performance. As a leading fan supplier in Ghaziabad, we take pride in providing custom exhaust fan solutions to meet diverse customer needs. Explore our collection of affordable and durable exhaust fans that combine aesthetics with functionality. Contact us today to discover why we are the preferred choice for exhaust fans in Ghaziabad."/>
        <meta name="keywords" content="Ghaziabad Exhaust Fan Manufacturer, Best Exhaust Fans in Ghaziabad, Top Exhaust Fan Supplier Ghaziabad, Quality Exhaust Fan Manufacturer Ghaziabad, Affordable Exhaust Fans Ghaziabad, Energy-efficient Exhaust Fans Ghaziabad, Custom Exhaust Fans Manufacturer Ghaziabad, Ghaziabad Industrial Exhaust Fans, Residential Exhaust Fans Ghaziabad, Ghaziabad Fan Exporter, High-Speed Exhaust Fans Ghaziabad, Ghaziabad Designer Exhaust Fans, Exhaust Fan Wholesaler Ghaziabad, Ghaziabad Decorative Fans Manufacturer, Commercial Exhaust Fans Ghaziabad, Ghaziabad Electric Fan Supplier, Ghaziabad Remote Control Exhaust Fans, Modern Exhaust Fans Ghaziabad, Ghaziabad Bladeless Exhaust Fans, Exhaust Fan Manufacturer in Ghaziabad"/>
      </Helmet>
      <h1 className="seo-text">Exhaust Fans Manufacturer in Ghaziabad</h1>
      <CategoriesItemExhaust />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


