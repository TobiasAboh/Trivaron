"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const pathname = usePathname();
  const footerImage =
    pathname === "/energy"
      ? "/oilrig2.png"
      : pathname === "/real_estate"
      ? "/duplex.png"
      : "/crops.png";
  const footerImageMobile =
    pathname === "/energy"
      ? "/oilrig2_mobile.png"
      : pathname === "/real_estate"
      ? "/duplex_mobile.png"
      : "/crops_mobile.png";
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/contact_us");
  };
  return (
    <footer className="relative z-10 w-full">
      {pathname !== "/contact_us" && (
        <div className="relative flex justify-center items-center h-auto md:h-screen">
          <picture>
            <source srcSet={footerImageMobile} media="(max-width: 640px)" />
            <Image
              src={footerImage}
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
              partner, or supporter, we're excited
              <br className="block md:hidden" /> to connect with you
            </p>
            <button
              onClick={handleNavigate}
              className="flex items-center mb-36 md:mb-0 gap-5 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full items-center mx-auto mt-10"
            >
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
      )}
      <div className="relative h-auto md:h-screen bg-black md:pl-20 pb-32 md:pb-0">
        <div className="container mx-auto pt-6 md:pt-24">
          <div className="w-full flex flex-col items-start justify-center md:flex-row md:justify-start text-white text-sm gap-20">
            <Link href="/">
              <Image
                src="/trivaronlogo3.png"
                alt="logo"
                width={200}
                height={200}
              />
            </Link>
            <div className="grid grid-cols-2 mx-6 gap-x-10 gap-y-20 md:mx-0 md:grid-cols-3 md:gap-36 text-xs lg:text-sm">
              <div className="flex flex-col space-y-2">
                <p className="pb-3 border-b-2 border-gray-300 text-gray-300">
                  Contact info
                </p>
                <div className="flex space-x-2 items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-green-500"
                  />
                  <p>contact@trivaron.com</p>
                </div>
                <div className="flex space-x-2">
                  <img src="/Phone.svg" alt="phone" width={15} height={15} />
                  <p>+234 803 700 6763</p>
                </div>
                <div className="flex space-x-2">
                  <img src="/Phone.svg" alt="phone" width={15} height={15} />
                  <p>+234 806 058 0275</p>
                </div>
                <div className="flex space-x-2">
                  <img src="/Phone.svg" alt="phone" width={15} height={15} />
                  <p>+44 794 784 3736</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="pb-3 border-b-2 border-gray-300 text-gray-300">
                  Address
                </p>
                <p>
                  6b Layi Yussuf crescent,
                  <br />
                  lekki 1.
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="pb-3 border-b-2 border-white-300 text-gray-300">
                  Quick Links
                </p>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
                <Link href="/blog" className="hover:text-green-400">
                  News
                </Link>
                <Link href="/contact_us" className="hover:text-green-400">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col-reverse items-start mx-auto md:flex-row md:justify-between mt-20 pt-2  w-5/6 md:ml-20 border-t-2 border-gray-300 text-gray-300">
          <p className="mt-2 md:mt-0 text-xs md:text-sm">
            Copyrights@ 2025 Trivaron. All rights reserved
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p>Follow Us</p>
            <div className="flex gap-5 md:gap-2">
              <a
                href="https://x.com/trivaron?t=EZdyAUusmm5_Ydog8s3G5A&s=08 "
                target="_blank"
              >
                <img src="twitter.svg" alt="twitter" width={15} height={15} />
              </a>
              <a
                href="https://www.instagram.com/trivaronn?igsh=eWcwdDNjb2Ewcjl3"
                target="_blank"
              >
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
    </footer>
  );
}
