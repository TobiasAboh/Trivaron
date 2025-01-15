"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Section2() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact_us");
  };
  return (
    <section className="h-auto px-6">
      <div className="flex flex-col md:flex-row justify-around gap-18">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-20">
            Welcome to
            <br className="hidden md:block" />{" "}
            {/* <span className="inline md:hidden"> </span> */}
            <span className="text-green-400">Trivaron Ltd</span>
          </h1>

          <div className="hidden md:block">
            <Image
              src="/cocoaExport.jpeg"
              alt="cocoaExport"
              width={400}
              height={100}
              className="md:w-11/12 lg:w-full mx-auto mt-6 mb-10 rounded-3xl"
            />
            <div>
              <h1 className="text-5xl font-bold mb-5">
                Cocoa <span className="text-green-400">Export</span>
              </h1>
              <p className="text-sm md:text-lg">
                Trivaron Ltd is an exporter of Cocoa, meeting international
                needs
                <br /> with an array of Cocoa products available with our Farm
                to direct
                <br /> shipment program across Nigeria.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-20">
          <p className="text-gray-500 text-sm md:text-md">
            At Trivaron Ltd, we're proud to be amongst the key players in
            <br className="hidden md:block" /> Nigeria's green revolution
            journey.
            <br />
            <br />
            Our food initiatives are commitments steered towards
            <br className="hidden md:block" />
            stewardship and firm global partnerships.
          </p>
          <div className="">
            <Image src="/forrest.jpg" alt="services" width={400} height={400} />
          </div>
        </div>

        <div className="block md:hidden flex flex-col-reverse mt-10">
          <Image
            src="/cocoaExport.jpeg"
            alt="cocoaExport"
            width={400}
            height={100}
            className="md:w-1/2 lg:w-11/12 mx-auto mt-6 mb-2 rounded-3xl"
          />
          <div className="">
            <h1 className="text-3xl font-bold mb-5">
              Cocoa <span className="text-green-400">Export</span>
            </h1>
            <p className="text-sm">
              Trivaron Ltd is an exporter of Cocoa, meeting international needs
              <br className="hidden md:block" /> with an array of Cocoa products
              available with our Farm to direct
              <br className="hidden md:block" /> shipment program across
              Nigeria.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-around flex-col-reverse md:flex-row gap-12 my-20">
        <div className="border-2 border-gray-300 rounded-3xl shadow-2xl p-5 md:p-10">
          {/* <Image src="/services.jpg" alt="forrest" width={400} height={500} /> */}
          <ul className="text-md md:text-3xl space-y-2">
            <li>- Cocoa Export</li>
            <li>- Farm mapping</li>
            <li>- Input distribution</li>
            <li>- Field monitoring</li>
            <li>- Harvesting</li>
            <li>- Inventory management</li>
            <li>- Cocoa plantation management</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Expert Services For
            <br />
            <span className="text-green-400">Optimal Results</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-500">
            Our comprehensive range of services is designed to
            <br />
            meet the unique needs of our clients.
          </p>
          <button
            onClick={handleNavigate}
            className="w-fit px-6 py-2 mt-6 text-lg font-medium text-white bg-black rounded-2xl hover:bg-gray-600"
          >
            <div className="flex flex-row gap-5 items-center">
              <img
                src="/requestqoute.png"
                alt="request quote"
                className="w-6 h-6"
              />
              Contact us
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
