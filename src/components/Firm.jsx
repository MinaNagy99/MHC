import Image from "next/image";
import React from "react";

function Firm() {
  return (
    <>
      <div className="grid items-center grid-cols-2 bg-black px-2 md:ps-36 ">
        <div className="col-span-1">
          <p className="text-l inline border-b-4 border-mainGold pb-2">
            OUR <span className="text-mainGold">FIRM</span>
          </p>
          <p className="md:mt-14 mt-5 text-md">
            We’re a global long-term investor, building a fully integrated and
            profitable portfolio
          </p>
          <p>
            {" "}
            of specialized engineering companies across various industries with
            global geographical presence.
          </p>
          <button className="bg-mainGold rounded-xl px-5 py-1 md:mt-10 mt-5 ">
            View More
          </button>
        </div>
        <div className="col-span-1">
          <Image
            width={1000}
            height={1000}
            className="w-full"
            src="/images/firmm.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Firm;
