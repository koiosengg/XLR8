import React from "react";
import HomeProducts from "./HomeProducts";
import Gallery from "./Gallery";
import ContactFooter from "./ContactFooter";
import Testimonies from "./testimonies";
import FAQ from "./FAQ";
import MainFooter from "./MainFooter";
import Advantages from "./Advantages";
import ProductBenefit from "./ProductBenefit";
import Hero from "./Hero";
function Home() {
  return (
    <div>
      <Hero />
      <Advantages />
      <HomeProducts />
      <ProductBenefit />
      <Gallery />
      <Testimonies />
      <FAQ />
      <ContactFooter />
      <MainFooter />
    </div>
  );
}

export default Home;
