import Image from "next/image";

const GridItem = ({ title, description, image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={image} alt="image" width={357} height={400} />
      <h1 className="text-2xl md:text-4xl font-bold mt-12">
        {title.split("/").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h1>
      <p className="text-sm md:text-xl text-gray-500 mt-4">
        {description.split("/").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-y-16 md:gap-2 mt-16">
      <GridItem
        title="Mini Power Grids"
        description="We design and implement mini power/grids for rural electrification, ensuring/reliable and effiecient energy distibution."
        image="/workers.jpg"
      />
      <GridItem
        title="Hydro Power Solutions"
        description="Our team develops and installs hydro/power systems, harnessing the energy/potential of water to generate clean/and sustainable electricity."
        image="/oilrig4.jpg"
      />
      <GridItem
        title="Farm Settlement Power/Solutions"
        description="We provide customized power solutions/for farm settlements, enabling farmers to/increase productivity and reduce energy/costs."
        image="/seeder.jpg"
      />
      <GridItem
        title="Irrigation Solutions"
        description="Our irrigation systems are designed to/optimize water usage, reducing waste/and promoting sustainable agriculture/practices."
        image="/oilrig5.jpg"
      />
    </div>
  );
};

export default function Section2() {
  return (
    <section className="relative h-auto w-screen text-center px-6 md:px-0">
      <h1 className="text-3xl md:text-5xl font-bold mt-28">Our Mission</h1>
      <p className="text-sm md:text-lg mt-4">
        Our mission is to bridge the energy gap in rural areas, promoting
        economic growth, and
        <br className="hidden md:block" />
        improving the quality of life for communities. We achieve this through
        our
        <br className="hidden md:block" />
        comprehensive range of services including:
      </p>
      <Grid />
    </section>
  );
}
