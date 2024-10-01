import React from "react";
import TopSection from "../shared/TopSection";
import Image from "next/image";
const news = {
  topSection: {
    header: "NEWS",
    paragraphs: [
      "Everything you want to know about MHC, from completed and",
      " upcoming deals to investment market news, can be found here",
    ],
  },
  details: [
    {
      image: "/images/adal.png",
      title:
        "We believe in continuously developing our team's capabilities. Adal is a new member of the MHC Group",
      paragraph:
        "MHC is a global holding company that invests in the field of engineering services. We manage a diverse portfolio of specialized engineering consultancy firms across the world.",
      data: "MARCh 2024",
      tagName: "ARCH",
    },
    {
      image: "/images/wolsey.png",
      title:
        "A new collaboration for development and support, assisting Wolsey in achieving its goal.",
      paragraph:
        "MHC is a global holding company that invests in the field of engineering services. We manage a diverse portfolio of specialized engineering consultancy firms across the world.",
      data: "MARCh 2024",
      tagName: "ARCH",
    },
    {
      image: "/images/kaller.png",
      title:
        "To help many people change their lifestyle for the better, we are now acquiring kallerarchitects",
      paragraph:
        "MHC is a global holding company that invests in the field of engineering services. We manage a diverse portfolio of specialized engineering consultancy firms across the world.",
      data: "MARCh 2024",
      tagName: "ARCH",
    },
  ],
};

function News() {
  return (
    <>
      <TopSection data={news.topSection} />
      <div className="grid lg:w-[75%]   w-full m-auto lg:grid-cols-3 sm:grid-cols-2">
        {news.details.map((n, index) => {
          return (
            <div className="col-span-1 p-5" key={index}>
              <div className="bg-white text-black">
                <div className="w-full pt-[75%] relative overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={n.image}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <p className="text-mainGold mb-5">{n.title}</p>
                  <p className="text-sm">{n.paragraph}</p>
                  <div className="flex font-secondFontFamily text-sm mt-8 justify-between">
                    <p>{n.data}</p>
                    <p>{n.tagName}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default News;
