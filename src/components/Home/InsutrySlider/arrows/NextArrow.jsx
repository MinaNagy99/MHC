import React from "react";

function NextArrow({ onClick }) {
  return (
    <>
      <i
        onClick={onClick}
        className="fa-solid fa-circle-chevron-right text-2xl absolute left-[100%] top-[50%]"
      ></i>
    </>
  );
}

export default NextArrow;
