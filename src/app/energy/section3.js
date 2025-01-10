import Image from "next/image";

const TiltedCardLayout = () => {
  return (
    <div className="flex flex-col items-center gap-6 m-8">
      <div className="bg-gray-100 text-center px-8 py-3.5 rounded-2xl shadow-md w-72 md:w-96">
        <h3 className="text-lg font-bold">Oilfield Service Solutions</h3>
        <p className="text-sm text-gray-600">
          Our expertise spans drilling, completion, production, and well
          abandonment services, ensuring efficient and safe operations.
        </p>
      </div>
      <div className="bg-green-500 text-white text-center px-8 py-3.5 rounded-2xl shadow-md w-72 md:w-96 transform rotate-[-3deg]">
        <h3 className="text-lg font-bold">Rig Management</h3>
        <p className="text-sm">
          We provide rig management services, optimizing drilling and completion
          activities to minimize costs and maximize productivity.
        </p>
      </div>
      <div className="bg-gray-100 text-center px-8 py-3.5 rounded-2xl shadow-md w-72 md:w-96">
        <h3 className="text-lg font-bold">Well Intervention</h3>
        <p className="text-sm text-gray-600">
          Our team offers well intervention services, including workover,
          completion, and abandonment operations.
        </p>
      </div>
    </div>
  );
};

export default function Section3() {
  return (
    <section className="relative h-auto w-screen mt-28">
      <div className="flex space-x-20">
        <div>
          <Image src="/oilrig6.jpg" alt="oi rig" width={600} height={500} />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Oil and Gas Services</h1>
          <p className="text-2xl mt-4">
            As trusted oil and gas company, we offer a<br />
            complete suite of onshore and offshore services,
            <br />
            including:
          </p>
          <TiltedCardLayout />
        </div>
      </div>
    </section>
  );
}
