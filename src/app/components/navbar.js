import Image from "next/image";

export default function Navbar() {
  const navStyle = "rounded-full py-1 px-2 hover:bg-gray-300";
  return (
    <>
      <div className="flex bg-white space-x-72 justify-start items-center pl-20 py-3 shadow-2xl">
        <Image
          src="/trivaronlogo.png"
          alt="Trivaron Logo"
          width={50}
          height={50}
        />
        <ul className="flex space-x-14">
          <li className={navStyle}>
            <a href="/">Home</a>
          </li>
          <li className={navStyle}>
            <a href="/">About</a>
          </li>
          <li className={navStyle}>
            <a href="/">Blogs</a>
          </li>
          <li className={navStyle}>
            <a href="/">Contact</a>
          </li>
        </ul>
        <button className="bg-black px-5 py-3 text-white rounded-2xl">
          Learn more
        </button>
      </div>
    </>
  );
}
