import React from "react";
import HomeProducts from "./HomeProducts";
import Gallery from "./Gallery";
import ContactFooter from "./ContactFooter";
import Testimonies from "./testimonies";
import FAQ from "./FAQ";
import MainFooter from "./MainFooter";

function Home() {
  return (
    <div>
      <HomeProducts />
      <Gallery />
      <Testimonies />
      <FAQ />
      <ContactFooter />
      <MainFooter />
    </div>
  );
}

export default Home;
