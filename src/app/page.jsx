import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Firm from "@/components/Home/Firm";
import News from "@/components/Home/news";
import GSAPExample from "@/components/Home/SliderGsap";
import AddressContextProvider from "@/context/addressContext";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Holdings = dynamic(() =>
  import("../components/Home/InsutrySlider/Holdings.jsx", { ssr: false })
);
export default function Home() {
  return (
    <>
      <AddressContextProvider>
        <main style={{ fontFamily: "Georgia, serif" }}>
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
