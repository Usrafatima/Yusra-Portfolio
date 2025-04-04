'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import cab from "@/app/public/cab.png";
import foodtuck from "@/app/public/foodtuck.png";
import rentify from "@/app/public/rentify.png";
import { image } from 'framer-motion/client';
import { useMotionTemplate, useMotionValue, animate , motion } from 'framer-motion';


const projects = [
  {
    id: 1,
    year: 2025,
    title: "Online Food Delivery App",
    description:
    "Food Tuck is a clean, responsive food delivery UI that allows users to browse restaurants, view menus, and place orders. It integrates Sanity for content management, APIs for real-time data, and Stripe for checkout simulation, highlighting my skills in frontend development and API integration."  ,  image: foodtuck, // ✅ No `.src` needed
  },
  {
    id: 2,
    year: 2024,
    title: "Home Renting Website",
    description:
      " A sleek and modern user interface for a home renting platform. This website is designed to showcase a smooth, intuitive browsing experience for renters looking for properties. It focuses purely on the frontend, with beautiful layouts for property listings and detailed pages, but doesn't include backend functionality or user interactions yet.",
    image: rentify,
  },
  {
    id: 3,
    year: 2025,
    title: "Ride Booking App",
    description:
      "The Ride Booking App lets you easily book rides on-demand with a simple and intuitive interface. Quickly enter your destination, choose your ride type, track your driver in real-time, and make secure payments—all in one place. It's designed for convenience and reliability, making your travel experience smooth and stress-free.",
    image: cab,
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6" , "#CE84CF", "#DD335c"]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

       const color = useMotionValue(COLORS_TOP[0])

         useEffect(()=> {
             animate(color, COLORS_TOP, {
               ease: "easeInOut",
               duration:10,
               repeat: Infinity,
               repeatType: "mirror"
             })
           }, [])

              const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
  return (
    <motion.section style={{
      backgroundImage
    }} id="portfolio" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-6xl font-bold">
            Selected <span className="text-purple-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400">{project.year}</p>
              <h3
                className={`text-3xl font-semibold transition-colors duration-300 group-hover:text-purple-400 ${
                  selectedProject.id === project.id ? "text-gray-200" : ""
                }`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <p className="text-purple-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <Image
            src={selectedProject.image} 
            alt={selectedProject.title}
            width={1200}
            height={450}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
