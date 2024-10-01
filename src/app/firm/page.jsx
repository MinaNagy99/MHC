import Management from "@/components/About/Management";
import OurFirm from "@/components/About/OurFirm";

// app/about/page.jsx
export default function AboutPage() {
  return (
    <>
      <div className="px-24">
        <OurFirm />
        <Management />
      </div>
    </>
  );
}
