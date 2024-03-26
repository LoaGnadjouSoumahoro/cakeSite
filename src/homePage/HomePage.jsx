import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import SectionMain from "../components/sectionMain/SectionMain";
import Aside from "../components/aside/Aside";
import Article from "../components/article/Article";

const HomePage = () => {
  return (
    <div className="layout">
      <div className="menu">
        <Navbar />
      </div>
      <div className="container1">
        <SectionMain />
      </div>
      <div className="container2">
        <Aside />
      </div>
      <div
        className="footer
      "
      >
        <Article />
      </div>
    </div>
  );
};

export default HomePage;
