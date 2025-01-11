import Image from "next/image";

export default function Section3() {
  return (
    <section className="relative h-auto flex">
      <div className="flex gap-10 mx-auto">
        <div className="flex flex-col justify-end w-5/6">
          <Image
            src="/town.jpg"
            alt="house"
            width={500}
            height={300}
            className="w-full h-full rounded-3xl"
          />
          <div className="absolute text-white pb-4 pl-6 space-y-6">
            <h1 className="text-3xl font-bold">Expert Guidance</h1>
            <p className="text-sm">
              Our team of seasoned professionals ensures you
              <br />
              make informed decisions every step of the way
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-end">
            <Image
              src="/apartments.jpg"
              alt="house"
              width={500}
              height={300}
              className="h-full rounded-3xl"
            />
            <div className="absolute text-white pb-4 pl-6 space-y-6">
              <h1 className="text-3xl font-bold">Client-First Approach</h1>
              <p className="text-sm">
                Your satisfaction is our priority. We're committed
                <br /> to delivering exceptional service everytime
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
              <h1 className="text-3xl font-bold">Market Expertise</h1>
              <p className="text-sm">
                With deep knowledge of the market, we connect
                <br />
                you to the best opportunities available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
