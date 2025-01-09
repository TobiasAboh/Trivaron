"use client";
import Image from "next/image";

export default function Navbar() {
  const navStyle = "rounded-full py-1 px-2 hover:bg-gray-300";
  const textStyle = "text-black text-sm";
  return (
    <>
      <div className="flex bg-white space-x-24 lg:space-x-72 justify-start items-center pl-4 lg:pl-20 py-3 shadow-2xl relative z-50">
        <Image
          src="/trivaronlogo.png"
          alt="Trivaron Logo"
          width={50}
          height={50}
        />
        <div className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-14">
            <li className={navStyle}>
              <a href="/" className={textStyle}>
                Home
              </a>
            </li>
            <li className={navStyle}>
              <a href="/" className={textStyle}>
                About
              </a>
            </li>
            <li className={navStyle}>
              <a href="/" className={textStyle}>
                News
              </a>
            </li>
            <li className={navStyle}>
              <a href="/" className={textStyle}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-black px-5 py-2 text-white rounded-3xl">
          Learn more
        </button>
      </div>
    </>
  );
}
