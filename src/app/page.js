import Image from "next/image";

import BlogCard from "./components/blogcard";

const Card = (props) => {
  const { title, image } = props;
  return (
    <a
      href="#"
      className="flex flex-col relative justify-end bg-cover w-48 h-48 rounded-2xl text-white p-2 hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={{ backgroundImage: image }}
    >
      <Image
        src="/redirecticon.png"
        className="absolute top-2 sm:top-4 right-2 sm:right-4"
        alt="visit"
        width={50}
        height={50}
      />
      {title}
    </a>
  );
};

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen pt-24"
        style={{ backgroundImage: "url('/herobg_upscaled.jpg')" }}
      >
        <div className="flex flex-col ml-36">
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
          <div className="flex gap-10">
            <button className="flex gap-6 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full items-center">
              <Image
                src="/requestqoute.png"
                alt="request quote"
                width={25}
                height={25}
              />
              Request a quote
            </button>
            <button className="flex gap-6 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full items-center">
              <Image
                src="/learnmoreicon.png"
                alt="request quote"
                width={25}
                height={25}
              />
              Learn More
            </button>
          </div>
        </div>
        <h1 className="text-center font-bold text-5xl mt-20">Partners</h1>
        <img src="partners.svg" alt="Description of the SVG" />
        <h1 className="text-center font-bold text-5xl mt-10">
          A Little Bit <span className="text-blue-400">About Us</span>
        </h1>
        <div className="flex flex-col items-center justify-center mt-6 text-gray-500">
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
        <img src="homepagedesign.svg" alt="ornaments" className="w-screen" />
        <h1 className="font-bold text-5xl mt-10 ml-36">News Updates</h1>
        <div className="flex gap-80 mt-4 ml-36">
          <div>
            <p>Explore our latest updates, insights, and breakthroughs in</p>
            <p>agriculture and energy.</p>
          </div>
          <a href="#" className="text-green-400 underline">
            See all
          </a>
        </div>
        <div className="flex gap-10 mt-10 ml-36">
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
        <div
          className="bg-black bg-cover bg-center h-screen mt-10 pt-40"
          style={{ backgroundImage: "url('/crops.svg')" }}
        >
          <h1 className=" flex flex-col items-center text-white font-bold text-5xl">
            Reach out to Trivaron today <span>to be part of the change</span>
          </h1>
          <p className="flex flex-col items-center text-gray-200 mt-6">
            Join us in fostering a sustainable future in agriculture. Whether
            you are a supplier,
            <span>
              partner, or supporter, we're excited to connect with you
            </span>
          </p>
          <button className="flex gap-6 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full items-center mx-auto mt-10">
            <Image
              src="/requestqoute.png"
              alt="request quote"
              width={25}
              height={25}
            />
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
