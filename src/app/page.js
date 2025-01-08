import Image from "next/image";

import BlogCard from "./components/blogcard";

const Card = (props) => {
  const { title, image } = props;
  return (
    <a
      href={`/${title.toLowerCase()}`}
      className="flex flex-col relative justify-end bg-cover w-32 h-32 rounded-2xl text-white p-2 hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
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
      <div
        className="relative w-full h-screen md:h-screen pt-20"
        // style={{ backgroundImage: "url('/herobg_large.png')" }}
      >
        <picture>
          <source srcSet="/hero_portrait6.jpg" media="(max-width: 640px)" />
          {/* <source srcSet="/herobg_large.png" media="(max-width: 1024px)" /> */}

          <Image
            src="/herofixed.jpg"
            alt="hero"
            fill
            priority
            className="object-cover w-full md:h-screen md:w-screen z-0 rounded-b-3xl object-right md:object-center"
            sizes="100vw"
          />
        </picture>
        <div className="flex flex-col ml-20 lg:ml-36 relative z-10">
          <Image
            className="pb-10"
            src="/trivaronlogo2.png"
            alt="Trivaron Logo"
            width={150}
            height={100}
          />
          <div className="flex gap-4 pb-10">
            <Card title="Agriculture" image="url('/cocoa.png')" />
            <Card title="Energy" image="url('/energy.png')" />
            <Card title="Real Estate" image="url('/realestate.png')" />
          </div>
          <div className="flex gap-8">
            <button className="flex gap-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full items-center">
              <Image
                src="/requestqoute.png"
                alt="request quote"
                width={20}
                height={20}
              />
              Request a quote
            </button>
            <button className="flex gap-6 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full items-center">
              <Image
                src="/learnmoreicon.png"
                alt="request quote"
                width={20}
                height={20}
              />
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white pt-20">
        <h1 className="text-center font-bold text-5xl">Partners</h1>
        <img src="partners2.jpg" alt="Description of the SVG" />
        <h1 className="text-black text-center font-bold text-5xl mt-10">
          A Little Bit <span className="text-blue-400">About Us</span>
        </h1>
        <div className="flex flex-col items-center justify-center mt-6 text-center text-gray-500">
          <p>
            We expertise in energy and agriculture, offering innovative
            solutions for the oil and gas
          </p>
          <p>
            industry alongside sustainable farming practices. From cutting-edge
            energy support to
          </p>
          <p>
            smart, eco-friendly agriculture, we are comitted to driving
            innovation and building a
          </p>
          <p>sustainable future</p>
        </div>
        <img
          src="homepagedesign.svg"
          alt="ornaments"
          className="w-screen bg-white"
        />
        <h1 className="text-black font-bold text-3xl md:text-5xl mt-10 mx-auto text-center md:mx-0 md:text-left md:ml-36">
          News Updates
        </h1>
        <div className="flex flex-col md:flex-row gap-80 mt-4 mx-auto text-center md:text-left md:ml-36 text-sm md:text-base text-gray-500">
          <div>
            <p>Explore our latest updates, insights, and breakthroughs in</p>
            <p>agriculture and energy.</p>
          </div>
          <a href="#" className="text-green-400 underline">
            See all
          </a>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:gap-10 mt-10 md:ml-36 pb-10">
          <BlogCard
            title="How to grow your own organic produce"
            image="/testimage.svg"
            description="Learn how to grow your own organic produce using sustainable farming practices."
          />
          <BlogCard
            title="The future of renewable energy"
            image="/testimage.svg"
            description="Discover the latest developments in renewable energy and how they can benefit your business."
          />
        </div>
        
      </div>
    </>
  );
}
