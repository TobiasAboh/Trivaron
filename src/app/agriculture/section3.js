import Image from "next/image";


export default function Section3() {
    return (
      <div className="relative flex justify-evenly space-x-6 my-20">
        <div className="flex flex-col justify-end ">
          <Image
            src="/cocoa3.jpg"
            alt="cocoa"
            width={500}
            height={500}
            className="w-full object-cover rounded-3xl"
          />
          <div className="absolute text-white pb-4 pl-6 space-y-6">
            <h1 className="text-3xl font-bold">
              Cocoa production and
              <br />
              processing
            </h1>
            <p className="text-sm">
              As a commodities exporter, we specialize in cocoa production,
              <br /> processing and exportation, with a strong focus on social
              <br />
              responsibility.
            </p>
          </div>
        </div>
        <div className=" relative flex flex-col justify-between space-y-10">
          <div className="flex flex-col justify-end">
            <Image
              src="/farmland.jpg"
              alt="cocoa"
              width={500}
              height={500}
              className="w-2/3 h-full rounded-3xl"
            />
            <div className="absolute text-white pb-4 pl-5 space-y-4">
              <h1 className="text-3xl font-bold">The Farm</h1>
              <p className="text-sm">
                The symbol of excellence nestled on a 500-hectare
                <br />
                Arable land in Ibadan, Southwest Nigeria. Trivaron's
                <br />
                experience in agriculture is a testament to our
                <br />
                dedication to sustainable agriculture.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <Image
              src="/womanfarming.jpg"
              alt="cocoa"
              width={500}
              height={500}
              className="w-2/3 rounded-3xl"
            />
            <div className="absolute text-white pb-4 pl-5 space-y-4">
              <h1 className="text-3xl font-bold">Our Plantation</h1>
              <p className="text-sm">
                Our maiden cocoa plantation spans 250
                <br />
                acres, with ambitious plans for expansion
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };