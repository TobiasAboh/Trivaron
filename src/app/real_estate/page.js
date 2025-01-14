import Image from "next/image";
import HeroSection from "./herosection";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

export default function RealEstate() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />

      <div className="flex flex-col justify-center items-center text-3xl mb-16 gap-10">
        <h1>Partner</h1>
        <Image
          src="/TychonLogo1.jpg"
          alt="Tychon"
          width={200}
          height={200}
          className="w-1/4 h-1/2 bg-white"
        />
      </div>
    </>
  );
}
