import Image from "next/image";
import Link from "next/link";

import Section1 from "./section1";

const Card = (props) => {
  const { title, image } = props;
  return (
    <a
      href={`/${title.toLowerCase().replaceAll(" ", "_")}`}
      className="flex flex-col relative justify-end bg-cover w-48 h-32 md:w-28 md:h-28 rounded-2xl text-white p-2 hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={{ backgroundImage: image }}
    >
      {title}
    </a>
  );
};

export default function Home() {
  return (
    <>
      <section className="relative h-auto md:h-screen pt-16 md:pt-36">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-300 via-green-300 to-white opacity-70">
          <picture className="hidden md:block absolute bottom-0 z-10 bg-black w-full bg-gradient-to-b from-green-300 via- to-white opacity-90">
            <source
              srcSet="/Trivaron_mobile.png"
              media="(max-width: 640px)"
              className=""
            />
            <Image
              src="/Trivaron.png"
              alt="hero"
              width={1000}
              height={500}
              priority
              className="rounded-b-3xl w-full h-5/6"
            />
          </picture>
        </div>
      
        <div className="absolute flex flex-col items-center md:items-start lg:ml-36 relative z-10">
          <picture>
            <Image
              className="pb-5"
              src="/trivaronlogo2.png"
              alt="Trivaron Logo"
              width={150}
              height={100}
            />
          </picture>

          <h1 className="text-xl mb-5 font-bold">
            Growing <span className="text-green-600">Tomorrow</span> Today
          </h1>
          <div className="flex flex-col md:flex-row gap-4 pb-10">
            <Card title="Agriculture" image="url('/cocoa.png')" />
            <Card title="Energy" image="url('/energy.png')" />
            <Card title="Real Estate" image="url('/realestate.png')" />
          </div>
        </div>
      </section>
      <Section1 />
    </>
  );
}
