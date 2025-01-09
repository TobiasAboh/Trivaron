import Image from "next/image";

export default function Section4() {
  return (
    <section className="h-auto my-20">
      <div className="flex flex-col justify-center">
        <Image
          src="/irrigationdam.jpg"
          alt="dam"
          width={500}
          height={500}
          className="w-full"
        />
        <div className="absolute ml-24 space-y-6">
          <h1 className="text-4xl font-bold">
            Our <span className="text-green-400">Irrigation Dam</span>
          </h1>
          <p>
            Trivaron's state-of-the-art farm infrastructure, includes a<br/>
            1-mile long and a 45-feet deep irrigation dam, valued at<br/>
            $2 million, ensure optimal crop yields while minimizing<br/>
            environment impact.
          </p>
        </div>
      </div>
    </section>
  );
}
