import Image from "next/image";
import Link from "next/link";

import Section1 from "./section1";

const Card = (props) => {
  const { title, image } = props;
  return (
    <Link
      href={`/${title.toLowerCase().replaceAll(" ", "_")}`}
      className="flex flex-col relative justify-end bg-cover w-48 h-32 md:w-28 md:h-28 rounded-2xl text-white p-2 hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={{ backgroundImage: image }}
    >
      <Image
        src="/redirecticon.png"
        className="absolute top-2 sm:top-2 right-2 sm:right-2"
        alt="visit"
        width={30}
        height={30}
      />
      {title}
    </Link>
  );
};

// const test = () => {
//   return (
//     <section className="">
//       <div
//         className="relative w-full h-screen md:h-screen pt-44"
//         // style={{ backgroundImage: "url('/herobg_large.png')" }}
//       >
//         <picture>
//           <source srcSet="/hero_mobile2.jpg" media="(max-width: 640px)" className="bg-white"/>
//           {/* <source srcSet="/herobg_large.png" media="(max-width: 1024px)" /> */}

//           <Image
//             src="/herofixed.jpg"
//             alt="hero"
//             fill
//             priority
//             className="object-cover bg-white w-full md:h-screen md:w-screen z-0 rounded-b-3xl object-right md:object-center"
//             sizes="100vw"
//           />
//         </picture>
//         <div className="flex flex-col ml-20 lg:ml-36 relative z-10">
//           <Image
//             className="pb-5"
//             src="/trivaronlogo2.png"
//             alt="Trivaron Logo"
//             width={150}
//             height={100}
//           />
//           <h1 className="text-xl mb-5 font-bold">
//             Growing <span className="text-green-400">Tomorrow</span> Today
//           </h1>
//           <div className="flex gap-4 pb-10">
//             <Card title="Agriculture" image="url('/cocoa.png')" />
//             <Card title="Energy" image="url('/energy.png')" />
//             <Card title="Real Estate" image="url('/realestate.png')" />
//           </div>
//           <div className="flex gap-5">
//             <button className="bg-green-400 text-white font-bold py-2 px-6 rounded-full">
//               Request a quote
//             </button>
//             <button>Learn more</button>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white pt-20">
//         <h1 className="text-center font-bold text-2xl">Partners</h1>
//         <img
//           src="partners.jpg"
//           alt="Description of the SVG"
//           className="w-1/2 mx-auto mt-6"
//         />
//         <h1 className="text-black text-center font-bold text-5xl mt-10">
//           A Little Bit <span className="text-blue-400">About Us</span>
//         </h1>
//         <div className="flex flex-col items-center justify-center mt-6 text-center text-gray-500">
//           <p>
//             We are experts in energy and agriculture, offering innovative
//             solutions for the oil and gas
//           </p>
//           <p>
//             industry alongside sustainable farming practices. From cutting-edge
//             energy support to
//           </p>
//           <p>
//             smart, eco-friendly agriculture, we are comitted to driving
//             innovation and building a
//           </p>
//           <p>sustainable future</p>
//         </div>
//         <img
//           src="homepagedesign.svg"
//           alt="ornaments"
//           className="w-screen bg-white"
//         />
//         <BlogSection />
//       </div>
//     </section>
//   );
// };

export default function Home() {
  return (
    <>
      <section className="relative h-auto md:h-screen pt-16 md:pt-36">
        <picture className="bg-black">
          <source
            srcSet="/hero_mobile.png"
            media="(max-width: 640px)"
            className="bg-black"
          />
          <Image
            src="/herofixed.jpg"
            alt="hero"
            fill
            className="rounded-b-3xl"
            // layout="fill"
            // objectFit="cover"
          />
        </picture>
        <div className="flex flex-col items-center md:items-start lg:ml-36 relative z-10">
          <picture>
            {/* <source srcSet="/trivaronlogo4.png" media="(max-width: 640px)" /> */}
            <Image
              className="pb-5"
              src="/trivaronlogo2.png"
              alt="Trivaron Logo"
              width={150}
              height={100}
            />
          </picture>

          <h1 className="text-xl mb-5 font-bold">
            Growing <span className="text-green-400">Tomorrow</span> Today
          </h1>
          <div className="flex flex-col md:flex-row gap-4 pb-10">
            <Card title="Agriculture" image="url('/cocoa.png')" />
            <Card title="Energy" image="url('/energy.png')" />
            <Card title="Real Estate" image="url('/realestate.png')" />
          </div>
        </div>
      </section>
      <Section1 />
    </>
  );
}
