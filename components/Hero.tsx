'use client'
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import React, { useEffect } from 'react';
import profile from "@/app/public/profile photo.png";
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const COLORS_TOP = ["#13FFAA", "#1E67C6" , "#CE84CF", "#DD335c"]
const Hero = () => {
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
   const border = useMotionTemplate`1px solid ${color}`
   const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  return (
    <motion.section
    style={{
        backgroundImage
    }}
    className='relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200'>
        <div className='z-10 flex flex-col items-center'>
            <span className='mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>
             Open For Work
            </span>
            <h1 className='text-white/40 text-5xl font-black'>Hi, I am</h1>
            <h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black
            leading-tight text-transparent md:text-5xl'>
                Yusra Fatima
            </h1>
            <div>
              <Image 
              src={profile}
              alt="object"
              className="rounded-full mx-auto"
              width={220}
              />
               <p className='font-medium text-center'>Growing Porfolio</p> 
            </div>
            <p className='my-6 max-w-xl text-center'>Frontend Dveloper based in Karachi, Pakistan  looking foward to work with you</p>
             <motion.button
            style={{
                border,
                boxShadow
            }}



  className="flex w-fit items-center gap-2 rounded-full px-4 py-2 bg-white text-black"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Download CV
  <FiArrowRight />
</motion.button>
         
        </div>
        
        <div className='bg-circle-container'>
            <div className='bg-circle-background'></div>
            <div className='bg-circle'></div>
        </div>
    </motion.section>
  )
}

export default Hero
