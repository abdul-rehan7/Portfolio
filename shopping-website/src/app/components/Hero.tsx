"use client"

import React from "react";
import Slider from "react-slick";
import Slides from "../components/Slides";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  const slideData = [
    {
      id: 0,
      img: "imgs/1.png",
      title: "Trending Item",
      mainTitle: "Women's Latest Fashion Sale",
      price: "20",
    },
    {
      id: 1,
      img: "imgs/2.png",
      title: "Exclusive Sale",
      mainTitle: "Black Friday Special",
      price: "30",
    },
    {
      id: 2,
      img: "imgs/3.png",
      title: "Exclusive Offer",
      mainTitle: "CYBER MONDAY",
      price: "20",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slides
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
