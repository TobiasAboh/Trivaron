import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/duplex.png"
        alt="energy"
        fill
        className="bg-black rounded-b-3xl"
      />
      <div className="relative flex flex-col  justify-start items-center text-center h-full text-white pt-44">
        <div className="px-5 py-1 rounded-3xl bg-white w-fit bg-opacity-20">
          Real Estate
        </div>
        <h1 className="text-5xl font-bold mt-8">
          Your Trusted Partner in <span className="text-green-400">Real State</span>
        </h1>
        <p className="mt-4">
          Discover the perfect property for lifestyle, budget and future
        </p>
        <button className="w-fit px-6 py-2 text-lg mt-12 font-medium text-white bg-green-400 rounded-2xl hover:bg-gray-200">
          <div className="flex flex-row gap-5 items-center">
            <img
              src="/requestqoute.png"
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
