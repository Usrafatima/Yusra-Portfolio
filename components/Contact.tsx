"use client"

import {motion} from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='overflow-x-clip   py-32 text-white max-w-[1200px] mx-auto px-4'>
        <motion.div
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        className="grid lg:grid-cols-2 gap-16"
        >
            <div className='space-y-12'>
                <motion.h2
                initial={{opacity:0, x:-20}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, delay:0.2}}
                className='text-7xl font-bold text-gray-300'
                >
                    Get in <span className='text-purple-500'>touch</span>
                </motion.h2>

                <motion.div
                initial={{opacity:0, x:-20}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, delay:0.4}}
                className='glass p-8 rounded-2xl space-y-8'
                >
                    <div className='space-y-2'>
                        <p className='text-lg text-gray-300'>Phone</p>
                        <Link 
                        href={"+92 3351363823"}
                        className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center
                        gap-2">
                           +92 3351363823
                           <FaArrowRight size={30} />
                        </Link>
                    </div>

                    <div className='space-y-2'>
                        <p className='text-lg text-gray-300'>Email</p>
                        <Link 
                        href={"mailto:yusra7003@gmail.com"}
                        className="text-3xl lg:text-4xl font-semibold hover:text-gray-400 transition duration-300 flex items-center">
                            yusra700@gmail.com
                        </Link>

                    </div>
                    <div className='space-y-2'>
                        <p className='text-lg text-gray-300'>Office</p>
                        <address className='text-xl not-italic leading-relaxed'>
                             Karachi, Pakistan
                        </address>
                    </div>
                </motion.div>

            </div>
            <motion.div
             initial={{opacity:0, x:20}}
             whileInView={{opacity:1, x:0}}
             transition={{duration:0.6, delay:0.6}}
             className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
            >
               <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.127684902853!2d67.0949187110303!3d24.89990768923267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!2d67.0949187110303!3d24.89990768923267!4f13.1!5f0"
  width="600"
  height="450"
  style={{border:0}}
  allowFullScreen
  loading="lazy"
/>

            </motion.div>
        </motion.div>
    </section>
  )
}

export default Contact
