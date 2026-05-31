import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Deals", path: "/deals" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  const ref = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(ref.current.scrollTop > 10);
    };
    ref.current.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="h-88 md:h-64 overflow-y-scroll">
      <p className="w-10 h-[500px]"></p>
      <nav
        className={`fixed top-0 left-0 bg-[#3060aa] w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}
      >
        <Link
          href="/"
          className="flex items-center gap-2  text-2xl font-bold text-white"
        >
          <img src="/favicon.svg" alt="StayEase logo" className="w-8 h-8" />
          StayEase
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {link.name}
              <div
                className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
          ))}
          <button
            className={`border px-5 py-2 text-sm font-light rounded-full cursor-pointer ${isScrolled ? "text-black" : "text-white"} transition-all`}
          >
            Dashboard
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4 ">
          <img
            src={assets.searchIcon}
            alt="search"
            className={`${isScrolled && "invert"} w-10 h-10 transition-all duration-500  `}
          />
          <button
            className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}
          >
            Login
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <img
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src={assets.menuIcon}
            alt=""
            className={`${isScrolled && "invert"} w-10 h-10 transition-all duration-500  `}
          />
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
           <img src={assets.closeIcon} alt="" className="w-6 h-6" />
          </button>

          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}

          <button className="border px-5 py-2 text-sm font-light rounded-full cursor-pointer transition-all">
            Dashboard
          </button>

          <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
