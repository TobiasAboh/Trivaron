import Image from "next/image";

export default function Section5() {
  return (
    <section className="relative h-auto px-6 md:px-0">
      <div className="flex flex-col md:flex-row justify-start md:ml-24 gap-12 md:gap-32 my-20">
        <div className="flex flex-col space-y-5">
          <h1 className="text-5xl font-bold">Our Mission</h1>
          <div className="text-sm md:text-md py-1 px-4 bg-white border-2 border-green-400 rounded-full text-green-400 w-fit">
            Transforming Nigeria's Agricultural Sector
          </div>
          <div className="space-y-8">
            <p className="text-sm md:text-lg">
              At <span>Trivaron Farms Nig Ltd,</span> we're driven by a singular
              <br className="hidden md:block" /> mission: to empower sustainable
              agricultural practices,
              <br className="hidden md:block" /> environmental stewardship, and
              social responsibility.
            </p>
            <p className="text-sm md:text-lg">
              We're committed to being a leading player in Nigeria's
              <br className="hidden md:block" /> agriculture sector,
              contributing to the country's economic
              <br className="hidden md:block" /> growth and development.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/cocoa5_large.jpg"
            alt="cocoa"
            width={400}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
