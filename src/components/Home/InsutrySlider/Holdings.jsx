"use client";

import Image from "next/image";
import React from "react";
import TopSection from "../../shared/TopSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./arrows/NextArrow";
import PreArrow from "./arrows/preArrow";

function Holdings() {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    autoplay: true,
    autoplaySpeed: 2000, // Set autoplay speed
    arrows: true, // Disable arrows
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
        image: "/images/marine.jpg",
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
      <TopSection data={holdings.topSection} />

      <div className="slider-container w-[85%] m-auto relative">
        <Slider {...settings}>
          {holdings.data.map((data, index) => (
            <div key={index} className="p-5">
              <div className="relative">
                {/* Image Container */}
                <div className="w-full aspect-square relative">
                  <Image
                    quality={100}
                    fill
                    className="object-cover"
                    src={data.image}
                    alt={data.name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex justify-center items-center layerHolding absolute top-0 left-0 right-0 bottom-0">
                  <p>{data.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Holdings;
