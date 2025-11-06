"use client";
import React, { useRef } from "react";
import { pageQuote, pageTitle } from "../tailwind/variables";
import { motion, useInView } from "framer-motion";
import TeamIcons from "../components/TeamIcons";
import Typewriter from "../components/Typewriter";

const CONTAINER = "container mx-auto flex flex-col";
const SECTION_GRADIENT = "bg-gradient-to-t from-[#af9295] to-[#ce9672]/40";

function HeroSection() {
  return (
    <section className={`${CONTAINER} mx-auto flex flex-row items-center justify-evenly ${SECTION_GRADIENT} px-4 py-6 md:p-0 sm:rounded-xl`}>
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col items-center justify-evenly mx-auto">
          <h1 className={pageTitle("6xl")}>About Nest</h1>
          <h2 className={pageQuote("2xl") + " mt-4 italic"}>
            "Your second home awaits"
          </h2>
        </div>

        <div id="text" className="mt-6 text-lg text-[#3d2d2f] max-w-3xl mx-auto px-8 space-y-4">
          <p className="indent-4 text-justify">
            Welcome to Nest, where every visit feels like coming home. We're
            more than just a café, restaurant, and pastry shop – we're a
            community gathering place where memories are made over exceptional
            food and drink.
          </p>
          <p className="indent-4 mt-4 text-justify">
            Founded with a passion for quality and comfort, Nest brings
            together the finest ingredients, expert craftsmanship, and warm
            hospitality. Whether you're here for a morning coffee, a leisurely
            lunch, or an evening treat, we're dedicated to making your
            experience memorable.
          </p>
        </div>
      </div>

      <img
        src="/caffee.jpeg"
        alt="Interior"
        className="hidden md:block md:w-1/2 lg:w-1/4 md:rounded-tr-xl md:rounded-br-xl"
      />
    </section>
  );
}

function TeamSection() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className={`${SECTION_GRADIENT} mt-8 flex flex-col-reverse md:flex-row md:justify-between lg:justify-evenly items-center p-6 mb-20`}>
      <motion.div className="mt-6 md:mt-0 md:ml-6 text-[#3d2d2f] w-full md:w-2/3 lg:w-1/3 p-4">
        <div className="flex items-center justify-between sm:justify-start">
          <motion.h3
            ref={headingRef}
            className={`${pageTitle("6xl")} ${pageTitle("6xl", "md")}`}
          >
            <Typewriter
              text={"Our Team"}
              start={headingInView}
              speed={100}
              className={"inline-block"}
              cursorClassName={"ml-2 inline-block"}
            />
          </motion.h3>
          <TeamIcons />
        </div>

        <motion.p
          className="mt-8 text-lg first-letter:text-2xl"
          initial={{ opacity: 0, x: -40 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Behind every dish and every cup is a team of passionate individuals
          committed to excellence. We believe in creating not just meals, but
          experiences that bring people together.
        </motion.p>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 30 }}
        transition={{ ease: "easeInOut", duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/us.jpg"
        className="w-full md:w-1/3 lg:w-1/4 md:rounded-xl border-2 border-[#3d2d2f]"
        alt="Our Team"
      />
    </section>
  );
}

export default function About() {
  return (
    <main className="bg-[#cdbbbd]">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="min-h-screen flex items-center">
          <HeroSection />
        </div>

        <TeamSection />
      </div>
    </main>
  );
}
