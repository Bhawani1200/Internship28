import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { womenssaree } from "../../../Data/womensdress";
import { mensdress } from "../../../Data/mensdress";
import { newarrivals } from "../../../Data/newarrivals";

const HomePage = () => {
  return (
    <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
      <MainCarousel />
      <div>
        <HomeSectionCarousel data={womenssaree} sectionName={"Womens Saree"}/>
        <HomeSectionCarousel data={mensdress} sectionName={"Mens Dress"}/>
        <HomeSectionCarousel data={newarrivals} sectionName={"New Arrivals"} />
      </div>
    </div>
  );
};

export default HomePage;
