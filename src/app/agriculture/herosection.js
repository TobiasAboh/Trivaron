import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-full pt-32 pb-52 md:py-0 md:h-screen flex">
      <picture>
        <source srcSet="/agric_hero_mobile.png" media="(max-width: 640px)" />
        <Image
          src="/agric_hero.png"
          alt="agriculture"
          fill
          className="bg-black rounded-b-3xl"
        />
      </picture>

      <div className="relative flex flex-col justify-center items-center md:items-start h-full text-white mx-auto text-center md:text-start md:ml-36">
        <div className="px-5 py-1 mb-5 rounded-3xl bg-white w-fit bg-opacity-20">
          Agriculture
        </div>
        <h1 className="font-bold font-sans text-2xl md:text-5xl mb-5">
          Cultivating the Future of
          <br />
          Farming{" "}
          <span
            className="font-bold font-sans text-2xl md:text-5xl mb-10
            text-green-400"
          >
            One Acre at a Time
          </span>
        </h1>

        <button className="w-fit px-6 py-2 mt-6 text-lg font-medium text-black bg-white rounded-2xl hover:bg-gray-200">
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
