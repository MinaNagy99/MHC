import React from "react";

function PreArrow({ onClick }) {
  return (
    <>
      <i
        onClick={onClick}
        className="fa-solid absolute right-[100%] top-[50%] text-2xl fa-circle-chevron-left"
      ></i>
    </>
  );
}

export default PreArrow;
