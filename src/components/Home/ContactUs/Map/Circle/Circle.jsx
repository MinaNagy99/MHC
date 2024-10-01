"use client";
import React, { useContext } from "react";
import "./Circle.css";
import { AddressContext } from "@/context/addressContext";
function Circle({ companyName, top, left }) {
  const { setAddress } = useContext(AddressContext);
  const changeAddress = () => {
    setAddress(companyName);
  };
  return (
    <>
      <div
        onMouseEnter={changeAddress}
        style={{ top: `${top}%`, left: `${left}%` }}
        className="circle absolute"
      ></div>
    </>
  );
}

export default Circle;
