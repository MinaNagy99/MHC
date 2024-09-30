import React from "react";

function TopSection({ data }) {
  return (
    <>
      <div className="flex items-center mt-8 flex-col">
        <p className="text-l m-auto inline border-b-4 border-mainGold pb-2">
          {data.header}
        </p>
        {/* <div className="text-center mt-5">
          {data.paragraphs.map((p, index) => {
            return <p key={index}>{p}</p>;
          })}
        </div> */}
      </div>
    </>
  );
}

export default TopSection;
