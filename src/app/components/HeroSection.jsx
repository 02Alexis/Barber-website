"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="lg:py-16 background-color  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/images/design-desktop.jpeg)` }}
    >
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-12
        "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="
              col-span-8
              place-self-center 
              text-center 
              sm:text-left
              justify-self-start
            "
        >
          <h1
            className="
              text-white 
              mb-4 
              text-4xl 
              sm:text-5xl 
              lg:text-8xl
              lg:leading-normal
              font-extrabold
            "
          >
            <span
              className="
                    text-transparent 
                    bg-clip-text 
                    bg-gradient-to-r 
                    from-purple-400 
                    to-blue-600
                "
            >
              Barber{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Name",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Website",
                1000,
                "Passionate",
                1000,
                "Master",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#fff] text-base sm:text-lg mb-6 lg:text-xl">
            lorem ipsun dolor sit amet consectetur adipisicing elit. Quisquan
            voluptable
          </p>
          <div>
            <Link
              href="https://wa.me/573135897451?text=Motileme"
              className="
                px-6 
                py-3 
                w-full 
                sm:w-fit 
                rounded-full 
                mr-4 
                bg-gradient-to-br 
                from-purple-500 
                via-blue-500 
                to-black-500 
                hover:bg-slate-200 
                text-white
              "
            >
              Hire me
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className="
                rounded-full 
                w-[250px] 
                h-[250px] 
                lg:w-[400px] 
                lg:h-[400px] 
                relative
            "
          >
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="
                absolute 
                transform 
                -translate-x-1/2 
                -translate-y-1/2 
                top-1/2 
                left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
