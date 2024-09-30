"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import TopSection from "./shared/TopSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import the Slider without SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Holdings() {
  const [isSliderMounted, setIsSliderMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMount = () => {
      if (typeof window !== "undefined") {
        setIsSliderMounted(true);
        setIsLoading(false); // Set loading to false when slider is ready
      }
    };

    handleMount(); // Call the function to set the state

    // Optionally: cleanup function if necessary
    return () => {
      setIsLoading(true); // Reset loading state if component unmounts
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000, // Set autoplay speed
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
      {/* Render the top section immediately */}
      <TopSection data={holdings.topSection} />

      {/* Only render the slider once it's mounted */}
      <div className="slider-container">
        {isLoading ? ( // Check loading state
          <div>Loading...</div> // Show loading text
        ) : (
          isSliderMounted && ( // Only render slider if mounted
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
                      />
                    </div>
                    {/* Overlay Text */}
                    <div className="flex justify-center items-center layerHolding absolute top-0 left-0 right-0 bottom-0">
                      <p>{data.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )
        )}
      </div>
    </>
  );
}

export default Holdings;
