import React from "react";
import TopSection from "./shared/TopSection";
import Image from "next/image";

function Holdings() {
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
    ],
    topSection: {
      header: "HOLDINGS",
      paragraphs: [
        "One ship may sink..but an entire fleet can withstand storms!",
        "This is our principle at MHC in diversifying our investments in engineering",
        "which is why we have chosen specific industries with a promising future.",
      ],
    },
  };
  return (
    <>
      <div className="mt-20">
        <TopSection data={holdings.topSection} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5 ">
          {holdings.data.map((data, index) => {
            return (
              <div key={index} className="col-span-1  p-5">
                <div className="relative h-full">
                  <Image
                    quality={100}
                    width={500}
                    height={500}
                    className="w-full h-full "
                    src={data.image}
                    alt=""
                  />
                  <div className="flex justify-center items-center layerHolding absolute top-0 left-0 right-0 bottom-0">
                    <p>{data.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Holdings;
