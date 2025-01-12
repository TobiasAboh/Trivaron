"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navStyle = "rounded-full py-1 px-3 hover:bg-gray-300 text-sm";
  const currentPageStyle = "bg-gray-200 rounded-full px-3 text-green-400 text-md font-bold";
  const textStyle = "text-black text-sm";
  return (
    <>
      <div className="flex bg-white justify-between items-center px-4 lg:pl-20 py-3 shadow-2xl relative z-50">
        <img
          src="/trivaronlogo5.svg"
          alt="Trivaron Logo"
          // width={150}
          // height={50}
          className="w-15 h-10"
        />
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="absolute w-full top-full right-0 md:hidden bg-white shadow-md">
            <div className="w-full space-y-2 px-4 py-2">
              <Link href="/" className="block text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <Link href="/blog" className="block text-gray-800 hover:text-gray-600">
                News
              </Link>
              <Link href="contact_us" className="block text-gray-800 hover:text-gray-600">
                Contact
              </Link>
            </div>
          </div>
        )}
        <div className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-14">
              <Link href="/" className={pathname === "/" ? currentPageStyle : navStyle}>
                Home
              </Link>
              <Link href="/blog" className={pathname === "/blog" ? currentPageStyle : navStyle}>
                News
              </Link>

              <Link href="/contact_us" className={pathname === "/contact_us" ? currentPageStyle : navStyle}>
                Contact
              </Link>
          </ul>
        </div>
        <button className="hidden md:inline bg-black px-5 py-2 text-white rounded-3xl">
          Learn more
        </button>
      </div>
    </>
  );
}
