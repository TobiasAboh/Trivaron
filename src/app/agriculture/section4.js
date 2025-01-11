import Image from "next/image";

export default function Section4() {
  return (
    <section className="h-auto my-20">
      <div className="flex flex-col justify-center items-center md:items-stretch md:justify-center">
        <div className="block md:hidden space-y-10 pl-6">
          <h1 className="text-4xl font-bold">
            Our <span className="text-green-400">Irrigation Dam</span>
          </h1>
          <p className="">
            Trivaron's state-of-the-art farm infrastructure, includes a
            1-mile long and a 45-feet deep irrigation dam, valued at
            $2 million, ensure optimal crop yields while minimizing
            environment impact.
          </p>
        </div>


        <picture>
          <source
            srcSet="/irrigationdam_mobile.jpg"
            media="(max-width: 640px)"
          />
          <Image
            src="/irrigationdam.jpg"
            alt="dam"
            width={500}
            height={500}
            className="w-full"
          />
        </picture>

        <div className="hidden md:block absolute ml-24 space-y-6">
          <h1 className="text-4xl font-bold">
            Our <span className="text-green-400">Irrigation Dam</span>
          </h1>
          <p>
            Trivaron's state-of-the-art farm infrastructure, includes a<br />
            1-mile long and a 45-feet deep irrigation dam, valued at
            <br />
            $2 million, ensure optimal crop yields while minimizing
            <br />
            environment impact.
          </p>
        </div>
      </div>
    </section>
  );
}
