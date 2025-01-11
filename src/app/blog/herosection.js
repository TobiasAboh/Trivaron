import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/cocoaseed.png"
        alt="cocoa seeds"
        fill
        className="bg-black rounded-b-3xl"
      />
      <div className="relative flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-3xl md:text-5xl font-bold">
          Check Our Latest <span className="text-green-400">Updates</span>
        </h1>
        <p className="mt-4 text-center">
          Explore our latest updates, insights, and breakthroughs in agriculture
          <br className="hidden md:block"/>
          and energy.
        </p>
        <button className="w-fit px-6 py-2 mt-12 text-lg font-medium text-black bg-white rounded-2xl hover:bg-gray-200">
          <div className="flex flex-row gap-5 items-center">
            <img
              src="/requestquoteblack.svg"
              alt="request quote"
              className="w-6 h-6"
            />
            Request quote
          </div>
        </button>
      </div>
    </section>
  );}