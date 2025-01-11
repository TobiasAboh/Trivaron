import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative h-auto flex px-6 md:px-0 pt-16 md:pt-36">
      <div className="flex flex-col-reverse md:flex-col justify-center items-center mx-auto gap-12 md:gap-20">
        <div className="flex flex-col items-center md:flex-row gap-6 md:gap-36 w-fit">
          <h1 className="text-black font-bold text-2xl md:text-5xl">
            Our Expertise in <br className="hidden md:block" />
            Real Estate
          </h1>
          <p className="text-sm md:text-lg">
            Whether you're looking for a cozy apartment, a spacious
            <br className="hidden md:block" />{" "}
            family house or a lucarative investment property, we're
            <br className="hidden md:block" /> here to guide you every step of the way
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-0 md:mt-10 w-full gap-10 md:mb-48">
            <Image src="/house1.jpg" alt="house" width={500} height={300} />
            <Image src="/house2.jpg" alt="house" width={500} height={300} />
        </div>
      </div>
    </section>
  );
}
