import Image from "next/image";

export default function Section2() {
  return (
    <section className="h-auto ">
      <div className="flex justify-around gap-18">
        <h1 className="text-5xl font-bold">
          Welcome to
          <br />
          <span className="text-green-400">Trivaron Ltd</span>
        </h1>
        <div className="flex flex-col space-y-20">
          <p className="text-gray-500">
            At Trivaron Ltd, we're proud to be amongst the key players in
            <br /> Nigeria's green revolution journey.
            <br />
            <br />
            Our food initiatives are commitments steered towards
            <br />
            stewardship and firm global partnerships.
          </p>
          <div className="">
            <Image src="/forrest.jpg" alt="services" width={400} height={400} />
          </div>
        </div>
      </div>

      <div className="flex justify-around gap-12 my-20">
        <div>
          <Image src="/services.jpg" alt="forrest" width={400} height={500} />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">
            Expert Services For
            <br />
            <span className="text-green-400">Optimal Results</span>
          </h1>
          <p className="text-gray-500">
            Our comprehensive range of services is designed to
            <br />
            meet the unique needs of our clients.
          </p>
          <button className="w-fit px-6 py-2 mt-6 text-lg font-medium text-white bg-black rounded-2xl hover:bg-gray-600">
            <div className="flex flex-row gap-5 items-center">
              <img
                src="/requestqoute.png"
                alt="request quote"
                className="w-6 h-6"
              />
              Request quote
            </div>
          </button>
        </div>
      </div>

    </section>
  );
}
