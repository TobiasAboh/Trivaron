import Image from "next/image";

export default function Section1() {
  return (
    //Section 1
    <section className="relative h-auto">
      <Image src="/stats.jpg" alt="stats" fill />
      <div className="relative z-10 flex flex-col md:flex-row gap-24 justify-center items-center pt-28 md:pt-44">
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
      <div className="relative z-10 my-20 flex justify-center items-center">
        <div className="flex flex-col px-4 md:px-0">
          <picture>
            <source srcSet="/container2.png" media="(max-width: 640px)"/>
            <Image
              src="/container.png"
              alt="stats"
              width={1000}
              height={100}
              className="h-full"
            />
          </picture>

          <div className="absolute pl-8 md:pl-16 space-y-5 mt-10">
            <h1 className="text-3xl text-white font-bold">
              Strategic Partnerships for Innovation
            </h1>
            <p className="text-white text-sm">
              We're proud to partner with the renowned Cocoa Research Institute
              of
              <br /> Nigeria (CRIN), ensuring that our farming practices are
              informed by the
              <br /> latest research and innovations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
