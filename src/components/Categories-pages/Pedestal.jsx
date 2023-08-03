import CategoriesItemPedestal from "./CategoriesItemPedestal";
// import Footer from "../Footer/Footer";
// import Newsletter from "../Newsletter";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
export default function Pedestal(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])


  return (
    <>
    <Helmet>
        <title>Pedestal Fan Manufacturer in Ghaziabad - Virgo Electronics</title>
        <meta name="description" content="Welcome to our Ghaziabad-based pedestal fan manufacturing company. We offer a wide range of high-quality pedestal fans suitable for residential, industrial, and commercial spaces. Our fans are energy-efficient, stylishly designed, and equipped with advanced features for optimal performance. As a leading fan supplier in Ghaziabad, we take pride in providing custom pedestal fan solutions to meet diverse customer needs. Explore our collection of affordable and durable pedestal fans that combine aesthetics with functionality. Contact us today to discover why we are the preferred choice for pedestal fans in Ghaziabad."/>
        <meta name="keywords" content="Ghaziabad Pedestal Fan Manufacturer, Best Pedestal Fans in Ghaziabad, Top Pedestal Fan Supplier Ghaziabad, Quality Pedestal Fan Manufacturer Ghaziabad, Affordable Pedestal Fans Ghaziabad, Energy-efficient Pedestal Fans Ghaziabad, Custom Pedestal Fans Manufacturer Ghaziabad, Ghaziabad Industrial Pedestal Fans, Residential Pedestal Fans Ghaziabad, Ghaziabad Fan Exporter, High-Speed Pedestal Fans Ghaziabad, Ghaziabad Designer Pedestal Fans, Pedestal Fan Wholesaler Ghaziabad, Ghaziabad Decorative Fans Manufacturer, Commercial Pedestal Fans Ghaziabad, Ghaziabad Electric Fan Supplier, Ghaziabad Remote Control Pedestal Fans, Modern Pedestal Fans Ghaziabad, Pedestal Fans Mannufacturer in Ghaziabad"/>
        </Helmet>
      <h1 className="seo-text">Pedestal Fans Manufacturer in Ghaziabad</h1>
      <CategoriesItemPedestal />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}


