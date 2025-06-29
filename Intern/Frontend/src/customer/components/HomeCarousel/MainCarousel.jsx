import React from "react";
import "../../../index.css";
import { HomeCarouselData } from "./HomeCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  // 0: { items: 1 },
  // 720: { items: 2 },
  // 1024: { items: 5.5 },
};
const MainCarousel = () => {
  const items = HomeCarouselData.map((item) => (
    <div
      className="carousel-item"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        padding: "0 10px",
        marginTop: "0px",
      }}
    >
      <img
        className="carImg cursor-pointer"
        role="presentation"
        src={item.image}
        alt="/"
        responsive={responsive}
        autoPlayInterval={1000}
        style={{
          width: "100%",
          height: "800px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </div>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayInterval={1000}
      infinite
      disableButtonsControls
      disableDotsControls={false}
    />
  );
};
export default MainCarousel;
