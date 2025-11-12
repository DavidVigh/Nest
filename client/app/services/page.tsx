"use client";
import ServiceCard from "../components/ServiceCard";

import { CardAnimation } from "../motion/variants";
import { pageTitle } from "../tailwind/variables";
import { serviceCard } from "../types";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { FaConciergeBell, FaCalendarAlt, FaGlassCheers } from "react-icons/fa";

const serviceCards: serviceCard[] = [
    {
        id: 2,
        title: "Book a Table",
        tag: "reservation",
        description: "Reserve your table online for a hassle-free dining experience.",
        icon: <FaCalendarAlt className="inline w-10 h-10 self-center text-blue-500" />
    },

    {
        id: 1,
        title: "Menu",
        tag: "menu",
        description: "Explore our menu options and offerings.",
        icon: <FaConciergeBell className="inline w-10 h-10 self-center text-green-500" />
    },

    {
        id: 3,
        title: "Upcoming events",
        tag: "events",
        description: "Stay updated with our latest events and promotions.",
        icon: <FaGlassCheers className="inline w-10 h-10 self-center text-pink-500" />
    }
];

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "../css/embla.css"

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {serviceCards.map((card, i) => (
                    <div
                        key={i}
                        className="embla__slide flex flex-col
                        bg-linear-to-tl from-[#f6e9e3] to-[#faddc8]
                        rounded-2xl shadow-lg p-8 justify-center"
                    >
                        <ServiceCard {...card} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default function Services() {

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-black">
            <section className="container text-center mb-8">
                <h1 className={pageTitle("6xl")}>Our Services</h1>
                <p className="text-lg mt-2">Details about the services we offer will be listed here.</p>
            </section>

            {/* Carousel for small screens */}
            <section className="xl:hidden w-xs md:w-xl lg:w-2xl mx-auto">
                <EmblaCarousel />
            </section>

            {/* Static cards for xl and up */}
            <section className="hidden xl:flex items-center justify-center gap-8 w-full">
                {
                    serviceCards.map((card, i) => {
                        return (
                            <motion.div
                                key={i}
                                variants={CardAnimation}
                                whileHover="hover"
                                className="w-sm bg-linear-to-tl from-[#f6e9e3] to-[#faddc8] rounded-2xl shadow-lg p-8 cursor-pointer"
                            >
                                <ServiceCard {...card} />
                            </motion.div>
                        );
                    })
                }
            </section>
        </main>
    );
}