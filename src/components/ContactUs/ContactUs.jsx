"use client";

import React, { useContext, useState, useEffect } from "react";
import Map from "./Map/Map";
import { AddressContext } from "@/context/addressContext";

function ContactUs() {
  const { currentAddress } = useContext(AddressContext);

  const initialContactUs = {
    details: [
      {
        icon: "fa-solid text-mainGold fa-envelope",
        text: "info@mosiacholding.com",
      },
      {
        icon: "fa-solid text-mainGold fa-location-dot",
        text: "#200, 1302 4th Street SW Calgary, AB T2R-0X8",
      },
    ],
    map: "images/map.png",
    socialMediaIcon: [
      {
        icon: "fa-brands fa-linkedin",
        link: "https://www.linkedin.com/company/mosaic-holding-corporation/about/",
      },
      {
        icon: "fa-brands fa-facebook",
        link: "https://www.facebook.com/profile.php?id=61565919099335&locale=ar_AR",
      },
      {
        icon: "fa-brands fa-twitter",
        link: "https://www.linkedin.com/company/mosaic-holding-corporation/about/",
      },
      ,
      ,
    ],
  };

  const [contactUs, setContactUs] = useState(initialContactUs);

  // useEffect(() => {
  //   if (currentAddress && currentAddress.address) {
  //     setContactUs((prevContactUs) => ({
  //       ...prevContactUs,
  //       details: prevContactUs.details.map((detail, index) => {
  //         if (index === 1) {
  //           return { ...detail, text: currentAddress.address };
  //         }
  //         return detail;
  //       }),
  //     }));
  //   }
  // }, [currentAddress]);

  return (
    <div className="grid md:grid-cols-2 mb-10 items-center md:w-[80%] w-[98%] mt-10 m-auto">
      <div className="col-span-1">
        <p className="text-l inline border-b-4 border-mainGold pb-2">
          CONTACT US
        </p>
        <div className="mt-10">
          {contactUs.details.map((d, i) => (
            <div key={i}>
              <a
                href={currentAddress.link}
                target="_blank"
                className="flex items-center"
              >
                <i className={`${d.icon} pe-3`}></i>
                <p className="text-md">{d.text}</p>
              </a>
            </div>
          ))}
        </div>
        <div className="flex">
          {contactUs.socialMediaIcon.map((SM, index) => (
            <div key={index}>
              <a target="_blank" href={SM.link}>
                <i className={`${SM.icon} pe-5 mt-5 text-lg`}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 md:mt-0 mt-10 flex items-center">
        <Map />
      </div>
    </div>
  );
}

export default ContactUs;
