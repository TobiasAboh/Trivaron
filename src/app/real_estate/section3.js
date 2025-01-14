import Image from "next/image";

export default function Section3() {
  return (
    <section className="relative h-auto flex px-6 md:px-0 pt-16 pb-16 md:pb-36 md:pt-36">
      <div className="flex flex-col-reverse md:flex-row gap-10 mx-auto">
        <div className="flex flex-col justify-end w-full md:w-5/6">
          <Image
            src="/town.jpg"
            alt="house"
            width={500}
            height={300}
            className="w-full h-full rounded-3xl"
          />
          <div className="absolute text-white pb-4 pl-4 pr-2 md:pr-0 md:pl-6 space-y-6">
            <h1 className="text-xl md:text-3xl font-bold">Expert Guidance</h1>
            <p className="text-sm">
              Our team of seasoned professionals ensures you
              <br className="hidden md:block" /> make informed decisions every
              step of <br className="block md:hidden" /> the way
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:justify-between">
          <div className="flex flex-col justify-end">
            <Image
              src="/apartments.jpg"
              alt="house"
              width={500}
              height={300}
              className="h-full rounded-3xl"
            />
            <div className="absolute text-white pb-4 pl-6 space-y-6">
              <h1 className="text-xl md:text-3xl font-bold">
                Client-First Approach
              </h1>
              <p className="text-sm">
                Your satisfaction is our priority. We're committed
                <br className="hidden md:block" /> to delivering exceptional
                <br className="block md:hidden" /> service everytime
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <Image
              src="/apartments2.jpg"
              alt="house"
              width={500}
              height={300}
              className="h-full rounded-3xl"
            />
            <div className="absolute text-white pb-4 pl-6 space-y-6">
              <h1 className="text-xl md:text-3xl font-bold">
                Market Expertise
              </h1>
              <p className="text-sm">
                With deep knowledge of the market, we connect
                <br className="hidden md:block" /> you to the best opportunities{" "}
                <br className="block md:hidden" />
                available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
