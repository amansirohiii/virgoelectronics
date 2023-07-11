import Banner from "../Banners/Banner";
import BannerReverse from "../Banners/BannerReverse";
// import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
// import Newsletter from "../components/Newsletter";
// import ProudProducts from "../components/ProudProducts";
import FeaturedSlider from "../Featured/FeaturedSlider";
import Banner1 from "../../assests/images/Cooler/cooler1.webp";
import Banner2 from "../../assests/images/Ceiling/ceiling1.webp";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    props.setProgress(100)
  }, [])
  return (
    <>
      <Hero />
      {/* <ProudProducts /> */}
      <Banner
        title="Creative harmonious living"
        text=" Virgo Coolers are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <FeaturedSlider />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" Virgo Fans are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      {/* <Newsletter /> */}
       {/* <Footer /> */}
    </>
  );
}

