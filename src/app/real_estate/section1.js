import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative h-auto flex m">
      <div className="flex flex-col items-center mt-36 mx-auto gap-20">
        <div className="flex justify-center gap-36">
          <h1 className="text-black font-bold text-5xl">
            Our Expertise in <br />
            Real Estate
          </h1>
          <p>
            Whether you're looking for a cozy apartment, a spacious
            <br />
            family house or a lucarative investment property, we're
            <br /> here to guide you every step of the way
          </p>
        </div>
        <div className="flex justify-between mt-10 w-full gap-10 mb-48">
            <Image src="/house1.jpg" alt="house" width={500} height={300} />
            <Image src="/house2.jpg" alt="house" width={500} height={300} />
        </div>
      </div>
    </section>
  );
}
