import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-full pt-32 pb-52 md:py-0 md:h-screen">
      <picture>
        <source srcSet="/duplex_mobile.png" media="(max-width: 640px)" />
        <Image
        src="/duplex.png"
        alt="energy"
        fill
        className="bg-black rounded-b-3xl"
      />
      </picture>
      
      <div className="relative flex flex-col  justify-start items-center text-center h-full text-white md:pt-44">
        <div className="px-5 py-1 mb-5 rounded-3xl bg-white w-fit bg-opacity-20">
          Real Estate
        </div>
        <h1 className="font-bold text-2xl md:text-5xl mb-5">
          Your Trusted Partner in<br className="block md:hidden" />{" "}<span className="text-green-400">Real State</span>
        </h1>
        <p className="mt-4 hidden md:block">
          Discover the perfect property for lifestyle, budget and future
        </p>
        <button className="w-fit px-6 py-2 text-lg mt-6 font-medium text-black bg-white rounded-2xl hover:bg-gray-200">
          <div className="flex flex-row gap-5 items-center">
            <img
              src="/requestquoteblack.svg"
              alt="request quote"
              className="w-6 h-6"
            />
            Contact us
          </div>
        </button>
      </div>
    </section>
  );
}
