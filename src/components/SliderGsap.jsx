"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const GsapSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  const images = ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg"];
  const texts = [
    { firstWord: "Exclusive", secondWord: "Opportunities" },
    { firstWord: "Generational", secondWord: "Wealth" },
    { firstWord: "Tailored", secondWord: "Portfolios" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]); // Added images.length as a dependency

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;

    // Animate image and text out
    gsap.to([imageRefs.current[currentIndex], textRefs.current], {
      scale: 5,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });

    // Animate next image and text in
    gsap.fromTo(
      [imageRefs.current[nextIndex], textRefs.current],
      { scale: 5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" }
    );
  }, [currentIndex, images.length]); // Added images.length as a dependency

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {images.map((src, index) => (
        <div
          key={src}
          ref={(el) => (imageRefs.current[index] = el)}
          className="absolute inset-0"
          style={{ opacity: index === 0 ? 1 : 0 }}
        >
          <Image alt="" src={src} width={1000} height={1000} objectFit="cover" className="h-full w-full" />
        </div>
      ))}
      <div
        className="absolute inset-0 md:ps-36 ps-4 bg-black bg-opacity-50 flex items-center justify-start"
        ref={textRefs}
      >
        <div className="text-start">
          <h2 className="text-mainGold font-secondFontFamily leading-10">
            MOSAIC HOLDING
          </h2>
          <p className="text-xl text-white leading-8">
            {texts[currentIndex].firstWord}
          </p>
          <p className="text-responsive-xl text-mainGold">
            {texts[currentIndex].secondWord}
          </p>
          <div className="flex items-center ps-2">
            <i className="fa-solid text-mainGold font-extrabold text-[30px] fa-angle-right pe-2"></i>
            <span className="font-secondFontFamily">OUR FIRM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapSlideshow;
