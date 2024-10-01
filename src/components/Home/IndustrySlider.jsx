"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function IndustrySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false, // Disable arrows

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const holdings = {
    data: [
      {
        name: "Architecture",
        image: "/images/archetiture.jpg",
      },
      {
        name: "Urban Planning",
        image: "/images/urbanPlanning.jpg",
      },
      {
        name: "Marine",
        image: "/images/marine.png",
      },
      {
        name: "Oil & Gas",
        image: "/images/oil&gas.jpg",
      },
      {
        name: "Electromechanics",
        image: "/images/Electromechanics.jpg",
      },
      {
        name: "Structural",
        image: "/images/Structural.jpg",
      },
    ],
    topSection: {
      header: "INDUSTRY",
      paragraphs: [
        "One ship may sink..but an entire fleet can withstand storms!",
        "This is our principle at MHC in diversifying our investments in engineering",
        "which is why we have chosen specific industries with a promising future.",
      ],
    },
  };
  return (
    <>
      <div className="slider-container ">
        <Slider {...settings}>
          {holdings.data.map((data, index) => {
            return (
              <div key={index} className="p-5">
                <div className="relative">
                  {/* Image Container */}
                  <div className="w-full aspect-square relative">
                    <Image
                      quality={100}
                      className="object-cover"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  {/* Overlay Text */}
                  <div className="flex justify-center items-center layerHolding absolute top-0 left-0 right-0 bottom-0">
                    <p>{data.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default IndustrySlider;
