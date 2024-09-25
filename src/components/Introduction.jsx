"use client"; // Add this at the top of your component

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Introduction() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg"];
  const texts = [
    {
      subHead: "MOSAIC HOLDING",
      firstWord: "Exclusive",
      secondWord: "MOSAIC",
      thirdWord: "HOLDING",
      fourthWord: "Opportunities",
      fifthWord: "OUR FIRM",
    },
    {
      subHead: "Hello World",
      firstWord: "hhhdshfds",
      secondWord: "sdfdsdfdsf",
      thirdWord: "bbfdfgdfggdf",
      fourthWord: "sdffdgfdgdfgfdg",
      fifthWord: "asddsfsdfdsf",
    },
    {
      subHead: "sfdfsddsfdf",
      firstWord: "sdfsdfdsf",
      secondWord: "dsdsfdsfds",
      thirdWord: "sdfdsfdsfd",
      fourthWord: "dsdfsfdfd",
      fifthWord: "sdfdsffds",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Adjust to 8 seconds (5s pause + 3s animation)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <>
      <div className="relative h-screen">
        {/* Motion div for Image */}
        <motion.div
          className="w-full h-screen image"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 5, 1] }} // Scale up and then instantly scale back
          transition={{
            duration: 3, // 3 seconds for scaling in
            times: [0, 0.75, 1], // 75% of the time for scaling in, 25% for instant scale out
            ease: ["easeInOut", "easeIn", "linear"], // Ease in for the scale in, linear for instant scale out
            repeat: Infinity, // Infinite loop
            repeatDelay: 5, // Delay after each animation cycle (5 seconds pause)
          }}
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            className="absolute layer top-0 w-full h-screen"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 5, 1] }} // Scale up and then instantly scale back
            transition={{
              duration: 3, // 3 seconds for scaling in
              times: [0, 0.75, 1], // 75% of the time for scaling in, 25% for instant scale out
              ease: ["easeInOut", "easeIn", "linear"], // Ease in for the scale in, linear for instant scale out
              repeat: Infinity, // Infinite loop
              repeatDelay: 5, // 5-second pause between animations
            }}
          >
            <div className="h-full md:ps-36 ps-12 inline-flex flex-col justify-center">
              <p className="text-mainGold font-secondFontFamily leading-10">
                {texts[currentIndex].subHead}
              </p>

              <div className="flex items-center">
                <p className="text-xl text-white leading-8">
                  {texts[currentIndex].firstWord}
                </p>
                <div className="ps-3">
                  <p className="text-mainGold text-[8px]">
                    {texts[currentIndex].secondWord}
                  </p>
                  <p className="text-[8px] text-white">
                    {texts[currentIndex].thirdWord}
                  </p>
                </div>
              </div>
              <p className="text-responsive-xl text-mainGold">
                {texts[currentIndex].fourthWord}
              </p>
              <div className="flex items-center ps-2">
                <i className="fa-solid text-mainGold font-extrabold text-[30px] fa-angle-right pe-3"></i>
                <p className="font-secondFontFamily">
                  {texts[currentIndex].fifthWord}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Introduction;
