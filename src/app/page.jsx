"use client";

import ContactUs from "@/components/ContactUs/ContactUs";
import Firm from "@/components/Firm";
import Holdings from "@/components/Holdings";
import IndustrySlider from "@/components/IndustrySlider";
import News from "@/components/news";
import Slider from "@/components/slider";
import GSAPExample from "@/components/SliderGsap";
import AddressContextProvider from "@/context/addressContext";
export default function Home() {
  return (
    <>
      <AddressContextProvider>
        <main style={{ fontFamily: "Georgia, serif" }}>
          {/* <Slider /> */}
          <GSAPExample />
          <Firm />
          <Holdings />
          <News />
          <ContactUs />
        </main>
      </AddressContextProvider>
    </>
  );
}
