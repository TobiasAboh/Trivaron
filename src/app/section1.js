import Image from "next/image";
import BlogSection from "./components/blogsection";

export default function Section1() {
  return (
    <section className="relative h-auto w-screen">
      <div className="bg-white pt-20">
        <h1 className="text-black text-center font-bold text-5xl mt-10">
          A Little Bit <span className="text-blue-400">About Us</span>
        </h1>
        <div className="flex flex-col items-center justify-center mt-6 text-center text-sm md:text-lg text-gray-500">
          <p>
            We are experts in energy and agriculture, offering innovative
            solutions for the oil and gas
            <br />
            industry alongside sustainable farming practices.{" "}
            <br className="inline sm:hidden" />
            <br className="inline sm:hidden" />
            <span className="">From cutting-edge energy support to
            <br />
            smart, eco-friendly agriculture, we are comitted to driving
            innovation and building a
            <br />
            sustainable future</span>
          </p>
          <div className="flex gap-5 mt-6">
            <button className="bg-green-400 text-white font-bold py-2 px-6 rounded-full">
              Contact us
            </button>
            <button>Learn more</button>
          </div>
        </div>
        <picture>
          <source srcSet="/leafdesign_mobile.jpg" media="(max-width: 640px)" />
          <Image
          src="/leafdesign.jpg"
          alt="ornaments"
          width={1000}
          height={500}
          className="w-full bg-white mt-8"
        />
        </picture>
        
        <BlogSection />
        <h1 className="text-center font-bold text-2xl mt-28">Partners</h1>
        <Image
          src="/partners.jpg"
          alt="Description of the SVG"
          width={400}
          height={100}
          className=" w-11/12 md:w-5/6 mx-auto mt-6 mb-28"
        />
      </div>
    </section>
  );
}
