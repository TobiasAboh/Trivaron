import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/agric_hero.png"
        alt="agriculture"
        fill
        className="bg-black rounded-b-3xl"
      />

      <div className="relative z-10 flex flex-col justify-center h-full text-white ml-36">
        <div className="px-5 py-1 mb-5 rounded-3xl bg-white w-fit bg-opacity-20">
          Agriculture
        </div>
        <h1 className="font-bold font-sans md:text-5xl mb-5 ">
          Cultivating the Future of Farming
        </h1>
        <h1 className="font-bold font-sans md:text-5xl mb-10 text-green-400">
          One Acre at a Time
        </h1>

        <button className="w-fit px-6 py-2 mt-6 text-lg font-medium text-black bg-white rounded-2xl hover:bg-gray-200">
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
