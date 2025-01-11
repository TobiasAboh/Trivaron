"use client";
import Image from "next/image";
import { use } from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full">
      <div className="relative flex justify-center items-center h-auto md:h-screen">
        <picture>
          <source srcSet="/crops_mobile.png" media="(max-width: 640px)" />
          <Image
            src="/crops.png"
            alt="crops"
            fill
            className="w-full h-auto bg-black"
          />
        </picture>

        <div className="relative">
          <h1 className=" flex flex-col items-center mt-36 md:mt-0 text-white font-bold text-xl md:text-5xl">
            Reach out to Trivaron today <span>to be part of the change</span>
          </h1>
          <p className="flex flex-col mx-auto text-center items-center text-md md:text-lg text-gray-200 mt-6">
            Join us in fostering a sustainable future in agriculture. Whether
            you are a supplier,
            <br className="hidden md:block" />
            <br className="block md:hidden" />
            partner, or supporter, we're excited<br className="block md:hidden" />{" "}to connect with you
          </p>
          <button className="flex items-center mb-36 md:mb-0 gap-5 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full items-center mx-auto mt-10">
            <Image
              src="/requestqoute.png"
              alt="request quote"
              width={20}
              height={20}
            />
            Contact Us
          </button>
        </div>
      </div>
      <div className="relative h-auto md:h-screen bg-black md:pl-20 pb-32 md:pb-0">
        <div className="container mx-auto pt-6 md:pt-24">
          <div className="w-full flex flex-col items-start justify-center md:flex-row md:justify-start text-white text-sm gap-20">
            <Image
              src="/trivaronlogo3.png"
              alt="logo"
              width={200}
              height={200}
              // className="ml-32"
            />
            <div className="grid grid-cols-2 mx-6 gap-x-10 gap-y-20 md:mx-0 md:grid-cols-3 md:gap-36">
              <div className="flex flex-col space-y-2">
                <p className="pb-3 border-b-2 border-gray-300 text-gray-300">
                  Contact info
                </p>
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
                <p className="pb-3 border-b-2 border-gray-300 text-gray-300">
                  Address
                </p>
                <p>No 8, Off Glover Road Ikoyi</p>
                {/* <a href="#">Ikoyi</a> */}
              </div>
              <div className="flex flex-col space-y-2">
                <p className="pb-3 border-b-2 border-white-300 text-gray-300">
                  Quick Links
                </p>
                <a href="/" className="hover:text-green-400">
                  Home
                </a>
                <a href="#" className="hover:text-green-400">
                  About
                </a>
                <a href="#" className="hover:text-green-400">
                  Services
                </a>
                <a href="#" className="hover:text-green-400">
                  News
                </a>
                <a href="#" className="hover:text-green-400">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col-reverse items-start mx-auto md:flex-row md:justify-between mt-20 pt-2  w-5/6 md:ml-20 border-t-2 border-gray-300 text-gray-300">
          <p className="mt-2 md:mt-0">
            Copyrights@ 2025 Trivaron. All rights reserved
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p>Follow Us</p>
            <div className="flex gap-5 md:gap-2">
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
      {/* </div> */}
    </footer>
  );
}
