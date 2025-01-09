import Image from "next/image";

export default function Section5() {
  return (
    <div className="flex justify-start ml-24 gap-32 my-20">
      <div className="flex flex-col space-y-5">
        <h1 className="text-5xl font-bold">Our Mission</h1>
        <div className="py-1 px-4 bg-white border-2 border-green-400 rounded-full text-green-400 w-fit">
          Transforming Nigeria's Agricultural Sector
        </div>
        <div className="space-y-8">
          <p>
            At <span>Trivaron Farms Nig Ltd,</span> we're driven by a singular
            <br />
            mission: to empower sustainable agricultural practices,
            <br />
            environmental stewardship, and social responsibility.
          </p>
          <p>
            We're committed to being a leading player in Nigeria's
            <br />
            agriculture sector, contributing to the country's economic
            <br />
            growth and development.
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
  );
}
