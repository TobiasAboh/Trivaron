import Image from "next/image";
import HeroSection from "./herosection";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import BlogSection from "../components/blogsection";

export default function RealEstate() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <BlogSection />
    </>
  );
}
