import Image from "next/image";

const Card = (props) => {
  const { title, image, description } = props;
  return (
    <div className="flex flex-col items-center text-center min-w-fit">
      <Image
        src={image}
        className="w-80 h-56"
        alt="houses"
        width={500}
        height={300}
      />
      <div className="flex flex-col items-center">
        <h1 className="text-xl">{title}</h1>
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
    <section className="relative h-screen flex">
      <div className="flex justify-between items-center h-fit gap-10 mx-auto">
        <Card
          image="/rental_services.jpg"
          title="Rental Services"
          description="Browse a range of rental options to suit/your needs."
        />
        <Card
          image="/property_valuation.jpg"
          title="Property Valuation"
          description="Know the true worth of your property/with our accurate assessments"
        />
        <Card
          image="/property_sale.jpg"
          title="Selling Your Property"
          description="Get the best value with our expert/marketing and negotiation strategies."
        />
      </div>
    </section>
  );
}
