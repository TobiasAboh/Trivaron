import Image from "next/image";

const Card = (props) => {
  const { title, image, description } = props;
  return (
    <div className="flex flex-col items-center text-center min-w-fit">
      <Image
        src={image}
        className="w-80 h-56 rounded-3xl"
        alt="houses"
        width={500}
        height={300}
      />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>
          {description.split("/").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default function Section2() {
  return (
    <section className="relative h-auto flex">
      <div className="flex flex-col md:flex-row justify-between items-center h-fit gap-10 mx-auto">
        <Card
          image="/customBuilding5.png"
          title="3 Bedroom Apartments"
          description="This is our luxurious and tastefully designed/ 3 bedroom apartment."
        />
        <Card
          image="/customBuilding4.png"
          title="Terraces"
          description="This is our luxurious and tastefully designed/ 4 bedroom terrace"
        />
        <Card
          image="/customBuilding3.png"
          title="4 Bedroom Stand Alone"
          description="This is our luxurious and tastefully designed/ 4 bedroom stand alone home."
        />
      </div>
    </section>
  );
}
