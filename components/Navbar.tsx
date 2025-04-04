'use client'

import Link from 'next/link';
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" }
]

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 text-white font-bold">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center mt-6">
        <div className="border border-white/20 backdrop-blur-3xl rounded-3xl p-2 max-w-[400px] mx-auto">
          <ul className="flex flex-row space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="hover:text-white/50 transition duration-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-[60]">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black/90 transition-transform duration-300 z-40 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav} className="text-3xl">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
