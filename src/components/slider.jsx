"use client"; // Add this at the top of your component

import Image from "next/image";
import React, { useEffect } from "react";
import { Zoom } from "react-slideshow-image";

const ZoomInExample = () => {
  const images = ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg"];
  const texts = [
    {
      firstWord: "Exclusive",
      secondWord: "Opportunities",
    },
    {
      firstWord: "Generational ",
      secondWord: "Wealth",
    },
    {
      firstWord: "Tailored ",
      secondWord: "Portfolios",
    },
  ];
  useEffect(() => {
    console.log("comnponent did mount");
    return () => {};
  });

  return (
    <Zoom
      scale={5}
      autoplay={true}
      indicators={true}
      duration={2000}
      arrows={false}
    >
      {images.map((each, index) => (
        <div
          key={index}
          className="relative h-screen"
          style={{ width: "100%" }}
        >
          <Image
            width={100}
            height={100}
            className="!object-cover h-full w-full"
            alt="Slide Image"
            src={each}
          />
          <div className="absolute layer top-0 w-full h-screen">
            <div className="h-full md:ps-36 ps-4  inline-flex flex-col justify-center">
              <p className="text-mainGold font-secondFontFamily leading-10">
                MOSAIC HOLDING
              </p>

              <div className="flex items-center">
                <p className="text-xl text-white leading-8">
                  {texts[index].firstWord}
                </p>
              </div>
              <p className="text-responsive-xl text-mainGold">
                {texts[index].secondWord}
              </p>
              <div className="flex items-center ps-2">
                <i className="fa-solid text-mainGold font-extrabold text-[30px] fa-angle-right pe-3"></i>
                <p className="font-secondFontFamily">OUR FIRM</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Zoom>
  );
};

export default ZoomInExample;
