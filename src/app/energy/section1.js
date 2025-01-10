import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative h-auto w-screen">
      <div className="flex flex-col justify-center items-center w-fit mx-auto mt-36 space-y-16">
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-bold">
            Our Expertise in Oil
            <br />
            and Gas
          </h1>
          <p>At Trivaron, we are dedicated to providing<br/>
          innovative and sustainable power solutions for<br/>
          rural communities, irrigation systems, and farm<br/>
          settlments.</p>
        </div>
        <div>
            <Image src="/oilrig3.jpg" alt="oil" width={1000} height={400} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
