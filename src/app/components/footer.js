"use client";
import Image from "next/image";
import { use } from "react";

export default function Footer() {
  return (
    <div className="relative z-10 h-screen">
      <div
        className="bg-black bg-cover bg-center h-screen pt-40"
        style={{ backgroundImage: "url('/crops.svg')" }}
      >
        {/* <img src="/crops.svg" alt="crops" className="w-full h-screen" /> */}
        <h1 className=" flex flex-col items-center text-white font-bold text-xl md:text-5xl">
          Reach out to Trivaron today <span>to be part of the change</span>
        </h1>
        <p className="flex flex-col mx-auto text-center items-center text-lg text-gray-200 mt-6">
          Join us in fostering a sustainable future in agriculture. Whether you
          are a supplier,
          <span>partner, or supporter, we're excited to connect with you</span>
        </p>
        <button className="flex gap-6 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full items-center mx-auto mt-10">
          <Image
            src="/requestqoute.png"
            alt="request quote"
            width={25}
            height={25}
          />
          Contact Us
        </button>
      </div>
      <div className="bg-black w-full h-screen pt-16">
        <div className="flex flex-col items-start justify-center text-white text-sm gap-20 mt-10 ml-36">
          <div className="flex items-start justify-center text-white text-sm gap-20">
            <Image
              src="/trivaronlogo3.png"
              alt="logo"
              width={200}
              height={200}
              // className="ml-32"
            />
            <div className="flex flex-col space-y-2">
              <p className="pb-3 border-b-2 border-gray-300 text-gray-300">
                Contact info
              </p>
              <div className="flex space-x-2">
                <img src="/PaperPlane.svg" alt="phone" width={15} height={15} />
                <a href="#">info@trivaron.com</a>
              </div>
              <div className="flex space-x-2">
                <img src="/Phone.svg" alt="phone" width={15} height={15} />
                <a href="#">+234 812 345 6789</a>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="pb-3 border-b-2 border-gray-300 text-gray-300">
                Address
              </p>
              <a href="#">No 8, Off Glover Road</a>
              <a href="#">Ikoyi</a>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="pb-3 border-b-2 border-white-300 text-gray-300">
                Quik Link
              </p>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className=" flex justify-between pt-2 w-3/4 ml-20 mr-10 border-t-2 border-gray-300 text-gray-300">
            <p>Copyrights@ 2024 Trivaron. All rights reserved</p>
            <div className="flex items-center gap-2">
              <p>Follow Us</p>
              <a href="#" target="_blank">
                <img src="twitter.svg" alt="twitter" width={15} height={15} />
              </a>
              <a href="#" target="_blank">
                <img
                  src="instagram.svg"
                  alt="instagram"
                  width={15}
                  height={15}
                />
              </a>
              <a href="#" target="_blank">
                <img src="facebook.svg" alt="facebook" width={15} height={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
