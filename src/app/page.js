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
      <Image
        src="/redirecticon.png"
        className="absolute top-2 sm:top-2 right-2 sm:right-2"
        alt="visit"
        width={30}
        height={30}
      />
      {title}
    </a>
  );
};

export default function Home() {
  return (
    <>
      <section className="relative h-auto md:h-screen pt-16 md:pt-36">
        {/* <div className="h-full w-full"> */}
          <picture className="bg-black w-full h-full">
            <source
              srcSet="/hero_mobile.png"
              media="(max-width: 640px)"
              className="bg-black"
            />
            <Image
              src="/herofixed.jpg"
              alt="hero"
              fill
              priority
              className="rounded-b-3xl"
              // layout="fill"
              // objectFit="cover"
            />
          </picture>
        {/* </div> */}

        <div className=" absolute flex flex-col items-center md:items-start lg:ml-36 relative z-10">
          <picture>
            {/* <source srcSet="/trivaronlogo4.png" media="(max-width: 640px)" /> */}
            <Image
              className="pb-5"
              src="/trivaronlogo2.png"
              alt="Trivaron Logo"
              width={150}
              height={100}
            />
          </picture>

          <h1 className="text-xl mb-5 font-bold">
            Growing <span className="text-green-400">Tomorrow</span> Today
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
