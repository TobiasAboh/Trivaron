import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative h-auto w-screen px-6 md:px-0">
      <div className="flex flex-col justify-center items-center w-fit mx-auto mt-36 space-y-8 md:space-y-16">
        <div className="flex flex-col justify-between md:flex-row w-full">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Expertise in Oil
            <br className="hidden md:block" />{" "}
            and Gas
          </h1>
          <p className="text-sm md:text-base mt-6 mb-12 md:my-0">
            At Trivaron, we are dedicated to providing
            <br />
            innovative and sustainable power solutions for
            <br className="hidden md:block" />{" "}
            rural communities, irrigation systems, and farm
            <br className="hidden md:block" />{" "}
            settlments.
          </p>
        </div>
        <div>
          <picture>
            <source srcSet="/oilrig3_mobile.jpg" media="(max-width: 640px)" />
            <Image
              src="/oilrig3.jpg"
              alt="oil"
              width={1000}
              height={400}
              className="w-full h-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
