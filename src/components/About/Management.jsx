import React from "react";
import TopSection from "../shared/TopSection";
import Image from "next/image";

function Management() {
  const management = { header: "Manangement", className: "text-start" };
  return (
    <>
      <div className="grid grid-cols-2 items-center">
        <div className="col-span-1">
          <TopSection data={management} />
          <p className="my-8">
            The senior management team members of the company have over 75 years
            of EPC engineering and investment management expertise.
          </p>
          <p>
            Our highest management body, comprising our functional and
            investment heads, deliberates on management proposals on investment,
            risks and oversees all major business, governance, and policy issues
            concerning the group and company holdings as a whole.
          </p>
        </div>
        <div className="col-span-1   p-20">
          <Image
            src="/images/management.jpg"
            width={500}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Management;
