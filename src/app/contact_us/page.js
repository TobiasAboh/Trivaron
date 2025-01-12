"use client";
import Image from "next/image";

export default function Contact() {
  const businessEmail = "info@trivaron.com";
  const subject = ""; // Optional, leave empty if not needed
  const body = "";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${businessEmail}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <section className="relative h-auto pt-20 pb-12 px-6 md:px-0 md:py-0 md:h-screen md:flex md:flex-col md:items-center md:justify-center">
      <picture>
        <source srcSet="/cocoaseed_mobile.png" media="(max-width: 640px)" />
        <Image
          src="/cocoaseed.png"
          alt="cocoa seeds"
          fill
          className="bg-black"
        />
      </picture>
      <div className="relative text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Contact us
        </h1>
        <p className="m-2 text-sm md:text-lg">
          Reach out to us today, Your journey starts here
        </p>
        <div className="flex gap-6 bg-black p-5 rounded-2xl mt-8 opacity-80 text-start text-xs md:text-lg">
          <div className="flex flex-col space-y-2">
            <p className="pb-3 border-b-2 border-gray-300">Contact info</p>
            <div className="flex space-x-2">
              <img src="/Phone.svg" alt="phone" width={15} height={15} />
              <p>080 370 06763</p>
            </div>
            <div className="flex space-x-2">
              <img src="/Phone.svg" alt="phone" width={15} height={15} />
              <p>080 605 80275</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="pb-3 border-b-2 border-gray-300">Address</p>
            <p>
              6b Layi Yussuf crescent,
              <br />
              lekki 1.
            </p>
            {/* <a href="#">Ikoyi</a> */}
          </div>
        </div>
        <button
          onClick={() => window.location.href = gmailLink}
          className="w-fit px-6 py-2 text-sm md:text-lg mt-6 font-medium text-black bg-white rounded-2xl hover:bg-gray-200"
        >
          <div className="flex flex-row gap-5 items-center">
            <img
              src="/requestquoteblack.svg"
              alt="request quote"
              className="w-6 h-6"
            />
            Send an email
          </div>
        </button>
      </div>
    </section>
  );
}
