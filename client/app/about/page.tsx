"use client";
import { pageQuote, pageTitle } from "../tailwind/variables";
import { motion } from "framer-motion";
import TeamIcons from "../components/TeamIcons";

export default function About() {
    return (
        <main className="bg-[#cdbbbd]">
            <div className="mx-auto flex flex-col items-center justify-center">
                <div className="min-h-screen flex items-center">
                    <section className="container mx-auto flex flex-row items-center justify-evenly bg-gradient-to-t from-[#af9295] to-[#ce9672]/40 rounded-xl">
                        <div className="container mx-auto flex flex-col">
                            <div className="flex flex-col items-center justify-evenly mx-auto">
                                <h1 className={pageTitle("6xl")}>About Nest</h1>
                                <h2 className={pageQuote("2xl") + " mt-4 italic"}>"Your second home awaits"</h2>
                            </div>
                            <div id="text"
                                className="mt-6 text-lg text-[#3d2d2f] max-w-3xl mx-auto px-4 space-y-4">
                                <p className="indent-4 text-justify">
                                    Welcome to Nest, where every visit feels like coming home.
                                    We're more than just a café, restaurant, and pastry shop –
                                    we're a community gathering place where memories are made over exceptional food and drink.
                                </p>
                                <p className="indent-4 mt-4 text-justify">
                                    Founded with a passion for quality and comfort,
                                    Nest brings together the finest ingredients, expert craftsmanship, and warm hospitality.
                                    Whether you're here for a morning coffee, a leisurely lunch, or an evening treat,
                                    we're dedicated to making your experience memorable.
                                </p>
                            </div>
                        </div>
                        <img src="/caffee.jpeg" alt="Interior" className="w-1/4 rounded-tr-xl rounded-br-xl" />
                    </section>
                </div>
                <section className="bg-gradient-to-t from-[#af9295] to-[#ce9672]/40 mt-8 flex flex-col md:flex-row w-4/5 justify-evenly items-center p-6 rounded-xl mb-20">

                    <div className="mt-6 md:mt-0 md:ml-6 text-[#3d2d2f] w-1/3">

                        <div className="flex items-center">
                            <motion.h3 className={pageTitle("6xl")}>Our Team </motion.h3>
                            <TeamIcons />
                        </div>
                        <p className="mt-8 text-lg first-letter:text-2xl">
                            Behind every dish and every cup is a team of passionate individuals committed to excellence.
                            We believe in creating not just meals, but experiences that bring people together.
                        </p>

                    </div>

                    <img src="/us.jpg" className="rounded-xl w-1/3" alt="Our Team" />
                </section>
            </div>
        </main>
    );
}