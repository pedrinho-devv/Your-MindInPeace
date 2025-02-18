"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Img from "../Public/imghero.jpg";

export function Hero() {
  return (
    <main className="relative flex flex-col lg:flex-row justify-center items-center px-11 py-11 gap-8 text-center lg:text-left">
      <div className="flex flex-col items-center gap-5">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Find peace. <br />
            Find a shelter in yourself.
            <p className="text-sm font-light mb-4 text-gray-700">
              Talking about your emotions is an act of courage.
            </p>
            <button className="bg-black text-white text-sm px-6 py-4 rounded-lg hover:bg-transparent border border-black hover:text-black duration-300 ease-in-out">
              Get in Touch
            </button>
          </h1>
        </div>
      </div>

      {/* Imagem central */}
      <div className="relative">
        <Image className="w-full h-auto" src={Img} sizes="100" alt="Imagem de um psicólogo falando." />

        {/* Container das divs animadas */}
        <motion.div
          className="absolute top-[20px] left-[-20px] bg-white/30 rounded-lg backdrop-blur-md shadow-md text-white px-9 py-5 text-black"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Confident
        </motion.div>

        <motion.div
          className="absolute top-[70px] right-[10px] bg-white/30 rounded-lg backdrop-blur-md text-white shadow-md px-9 py-5 text-black"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          Care
        </motion.div>

        <motion.div
          className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 bg-white/30 rounded-lg text-white backdrop-blur-md shadow-md px-9 py-5 text-black"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          Confidential
        </motion.div>
      </div>
    </main>
  );
}
