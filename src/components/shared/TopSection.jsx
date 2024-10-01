import React from "react";

function TopSection({ data }) {
  return (
    <>
      <div
        className={` text-center ${data.className && data.className}    mt-8 `}
      >
        <p className="text-l m-auto  inline border-b-4 border-mainGold pb-2">
          {data.header}
        </p>
      </div>
    </>
  );
}

export default TopSection;
