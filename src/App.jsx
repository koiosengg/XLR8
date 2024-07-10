import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Component from "./components/Component";
import AboutUs from "./components/AboutUs";
import Error404 from "./components/Error404";
import Contact from "./components/Contact";
import Gokart from "./components/Gokart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/Gokart" element={<Gokart />} />
            <Route path="components" element={<Component />} />
            <Route path="aboutus" element={<AboutUs/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
