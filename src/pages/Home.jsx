import React from "react";
import CradSection from "../components/CradSection";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className=" main z-10 overflow-x-hidden  w-full flex flex-col bg-gradient-to-l  to-[#62b5ec]  from-[#003355]">
      <Navbar />
      <Header />
      <CradSection />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
