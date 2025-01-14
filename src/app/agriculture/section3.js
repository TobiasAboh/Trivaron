import Image from "next/image";

export default function Section3() {
  return (
    <section className="relative h-auto flex px-6">
      <div className="flex flex-col-reverse items-center md:items-center md:flex-row md:justify-center space-x-0 gap-y-10 md:gap-y-6 md:space-x-6 my-20 mx-auto">
        <div className="flex flex-col justify-end">
          <Image
            src="/cocoa3.jpg"
            alt="cocoa"
            width={500}
            height={500}
            className="w-full md:w-full h-full md:h-full object-cover rounded-3xl"
          />
          <div className="absolute text-white pb-4 pl-4 md:pl-5 space-y-6">
            <h1 className="text-xl md:text-3xl font-bold">
              Cocoa production and
              <br />
              processing
            </h1>
            <p className="text-sm text-gray-200">
              As a commodities exporter, we specialize in cocoa production,
              <br className="hidden md:block" /> processing and exportation, with a<br className="block md:hidden" /> strong focus on social
              <br className="hidden md:block" />{" "}
              responsibility.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between space-y-10">
          <div className="flex flex-col justify-end">
            <picture>
              <source
                srcSet="/farmland_mobile.jpg"
                media="(max-width: 640px)"
              />
              <Image
                src="/farmland.jpg"
                alt="cocoa"
                width={500}
                height={500}
                className="w-full md:w-5/6 h-full h-full rounded-3xl"
              />
            </picture>

            <div className="absolute text-white pb-4 pl-4 md:pl-5 space-y-4">
              <h1 className="text-3xl font-bold">The Farm</h1>
              <p className="text-xs lg:text-sm text-gray-200">
                The symbol of excellence nestled on a <br className="block md:hidden"/>500-hectare
                <br className="hidden md:block" />
                {" "}Arable land in Ibadan, Southwest Nigeria. Trivaron's
                <br />
                experience in agriculture is a testament to our
                <br className="hidden md:block"/>
                dedication to sustainable agriculture.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <picture>
              <source
                srcSet="/womanfarming_mobile.jpg"
                media="(max-width: 640px)"
              />
              <Image
                src="/womanfarming.jpg"
                alt="cocoa"
                width={500}
                height={500}
                className="w-full md:w-5/6 rounded-3xl"
              />
            </picture>

            <div className="absolute text-white pb-4 pl-4 md:pl-5 space-y-4">
              <h1 className="text-3xl font-bold">Our Plantation</h1>
              <p className="text-sm text-gray-200">
                Our maiden cocoa plantation spans 250
                <br />
                acres, with ambitious plans for expansion
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
