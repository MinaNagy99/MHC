"use client";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Firm from "@/components/Home/Firm";
import Holdings from "@/components/Home/Holdings";
import News from "@/components/Home/news";
import GSAPExample from "@/components/Home/SliderGsap";
import AddressContextProvider from "@/context/addressContext";
  import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Set flag to indicate client-side rendering has occurred
    setIsClient(true);
  }, []);
  return (
    <>
      {console.log(isClient)}
      <AddressContextProvider>
        <main style={{ fontFamily: "Georgia, serif" }}>
          <GSAPExample />
          <Firm />
          {isClient ? <Holdings /> : <p>Loading</p>}
          <News />
          <ContactUs />
        </main>
      </AddressContextProvider>
    </>
  );
}
