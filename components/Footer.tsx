import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Empty div for left spacing (Keeps text centered) */}
        <div className="hidden md:block w-1/3"></div>

        {/* Copyright (Centered) */}
        <p className="text-sm md:text-base text-center w-full md:w-1/3">
          © 2025 Yusra All Rights Reserved
        </p>

        {/* Social Icons (Right Side) */}
        <div className="flex space-x-4 mt-2 md:mt-0 md:w-1/3 md:flex md:justify-end">
          <Link
            href="https://www.linkedin.com/in/yusra-fatima-66b49b2b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin size={24} />
          </Link>
          <a
            href="https://github.com/Usrafatima"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
