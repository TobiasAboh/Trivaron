import Image from "next/image";

export default function Agriculture() {
  return (
    <div>
      <div className="relative h-screen">
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
          <h1 className="font-bold md:text-5xl mb-5">
            Cultivating the Future of Farming
          </h1>
          <h1 className="font-bold md:text-5xl mb-10 text-green-400">
            One Acre at a Time
          </h1>

          <button className="w-fit px-6 py-2 mt-6 text-lg font-medium text-black bg-white rounded-2xl hover:bg-gray-200">
            <div className="flex flex-row gap-5">
              <img src="/requestquoteblack.svg" alt="request quote" />
              Request quote
            </div>
          </button>
        </div>
      </div>

      <div className="relative h-screen">
        <Image src="/stats.jpg" alt="stats" fill />
        <div className="relative z-10 flex gap-24 justify-center items-center pt-44">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-3xl font-bold text-green-500">800+</h1>
            <p className="text-gray-500">Acres of farmland cultivated</p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <h1 className="text-3xl font-bold text-green-500">220</h1>
            <p className="text-gray-500">
              Acres dedicated to cocoa cultivation in the
              <br />
              southwest with plans of expansion
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <h1 className="text-3xl font-bold text-green-500">100%</h1>
            <p className="text-gray-500">
              Committed to sustainability and
              <br />
              innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
