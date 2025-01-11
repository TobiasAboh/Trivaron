import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-full pt-32 pb-52 md:py-0 md:h-screen">
      <picture>
        <source srcSet="/cocoaseed_mobile.png" media="(max-width: 640px)" />
        <Image
          src="/cocoaseed.png"
          alt="cocoa seeds"
          fill
          className="bg-black rounded-b-3xl"
        />
      </picture>

      <div className="relative flex flex-col  justify-start items-center text-center h-full text-white md:pt-44">
        <h1 className="font-bold text-2xl md:text-5xl mb-5">
          Check Our Latest <br className="block md:hidden" /><span className="text-green-400">Updates</span>
        </h1>
        <p className="mt-4 text-center">
          Explore our latest updates, insights, and breakthroughs in agriculture
          <br />
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
  );
}
