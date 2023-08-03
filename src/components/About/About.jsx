import React, { useEffect } from 'react';
import Image from '../../assests/images/logo.webp';
import './About.css';
import { Helmet } from 'react-helmet';

export default function About(props) {
    useEffect(() => {
      props.setProgress(100)
    }, [])
    return (
        <>
        <Helmet>
        <title>About Us - Virgo Electronics</title>
        <meta name="description" content="Virgo has been known for its quality Electrical Appliances. We are one of the leading manufactrures and are notable for our reliable, durable and performance-worthy appliances. The journey of the company began by Mr. Naresh Chand in 2000, when it was established as a small business. Since then, the product advancement and high-quality appliances delivered by us, has always boosted our pace in the market. With our rich history of quality and reliability, we have, over the years, also earned the trust and reputation from our clients. When it comes to meeting the standards of the industry, staying at par with the l quality, our appliances remain at the forefront. Adapting new technologies, exploring quality prospects to develop advanced appliances, remains our continuous motto. Manufacturing electrical home appliances like ceiling fans, table fans, water heater, room heater etc., we understand our responsibility towards our customers. We own our manufacturing plants in (MG Road Industrial Area) (Uttar Pradesh) for meeting the standards and the demands of quality appliances."/>
        <meta name="keywords" content="Virgo Electronics, Virgo Electronics Ghaziabad, Virgo Electronics Ghaziabad Uttar Pradesh, Virgo Electronics Ghaziabad UP, Virgo Electronics Ghaziabad India, Virgo Electronics, Virgo Electronics About, Virgo About us, About Virgo Ghaziabad, Virgo Electronics About us"/>
      </Helmet>
        <h2 className='seo-text'>About Us - Virgo Electronics</h2>
<div className="about-container">
      <div className="about-content">
        <div className="image-container">
          <img src={Image} alt="About" />
        </div>
        <div className="text-container">
          <h2>About Us</h2>
          <p>
          Virgo has been known for its quality Electrical Appliances. We are one of the leading manufactrures and are notable for our reliable, durable and performance-worthy appliances. The journey of the company began by Mr. Naresh Chand in 2000, when it was established as a small business. Since then, the product advancement and high-quality appliances delivered by us, has always boosted our pace in the market. With our rich history of quality and reliability, we have, over the years, also earned the trust and reputation from our clients. When it comes to meeting the standards of the industry, staying at par with the l quality, our appliances remain at the forefront. Adapting new technologies, exploring quality prospects to develop advanced appliances, remains our continuous motto. Manufacturing electrical home appliances like ceiling fans, table fans, water heater, room heater etc., we understand our responsibility towards our customers. We own our manufacturing plants in (MG Road Industrial Area) (Uttar Pradesh) for meeting the standards and the demands of quality appliances.
          </p>
          {/* <p>
            Nulla lacinia massa sapien, eget dignissim nisl facilisis sed.
            Integer vestibulum sollicitudin turpis, a efficitur turpis feugiat
            non. Donec cursus leo in turpis eleifend, et auctor enim faucibus.
            In non posuere odio. Morbi vitae sem sed est sollicitudin
            consectetur. Vestibulum sagittis tellus sed venenatis bibendum.
            Vestibulum id pharetra nunc. Mauris in nisl velit. Vivamus non
            condimentum leo, ut consectetur erat. Cras ut mi a odio suscipit
            fermentum eget eu eros. Nam bibendum lectus at aliquam tristique.
          </p> */}
        </div>
      </div>
    </div>

        </>


    );
}