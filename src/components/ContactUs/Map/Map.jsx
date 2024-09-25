import React from "react";
import "./Map.css";
import Circle from "./Circle/Circle";
import Image from "next/image";

function Map() {
  return (
    <>
      <div className="w-full relative ">
        <Image
          width={500}
          height={500}
          src="/images/map.svg"
          className="object-cover h-full w-full"
          alt=""
        />

        <Circle companyName={"mhceg"} top={46.5} left={54.5} />
        <Circle companyName={"adal"} top={25} left={16} />
        <Circle companyName={"wolsey"} top={25} left={20} />
        <Circle companyName={"kaller"} top={47} left={23} />
      </div>
    </>
  );
}

export default Map;
