// import Banner from "../components/Banner";
// import BannerReverse from "../components/BannerReverse";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
// import Newsletter from "../components/Newsletter";
// import ProudProducts from "../components/ProudProducts";
import FeaturedSlider from "../Featured/FeaturedSlider";
// import Banner1 from "../img/banner/banner1.jpg";
// import Banner2 from "../img/banner/banner2.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ProudProducts />
      <Banner
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      /> */}
      <FeaturedSlider />
      {/* <BannerReverse
        title="Comfortable & Elegante Living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      <Newsletter /> */}
       <Footer />
    </>
  );
}

