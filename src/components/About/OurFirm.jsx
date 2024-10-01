import React from "react";
import TopSection from "../shared/TopSection";
import Image from "next/image";

function OurFirm() {
  return (
    <>
      <div className="h-screen mt-28">
        <p className="text-l inline border-b-4 border-mainGold pb-2">
          OUR <span className="text-mainGold">FIRM</span>
        </p>
        <p className="mt-9">
          We’re a global long-term investor, building a fully integrated and
          profitable portfolio of specialized engineering companies across
          various industries with global geographical presence.
        </p>
        <Image src="/images/about.jpg" width={1000} height={1000} className="w-full mt-7" />
      </div>
    </>
  );
}

export default OurFirm;
