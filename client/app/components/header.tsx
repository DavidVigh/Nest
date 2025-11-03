"use client";
import Link from "next/link";

import { motion, AnimatePresence, useAnimation, useTime, useTransform, hover } from "framer-motion";
import { LinkAnimations } from "../motion/variants";
import { FaAngleRight } from 'react-icons/fa';
import { style } from "framer-motion/client";


export default function Header() {
    const arrowControls = [useAnimation(), useAnimation(), useAnimation()];

    const handleHoverStart = () => {
        arrowControls.forEach((ctl, i) => {
            ctl.start({
                x: i * 10,
                opacity: 1,
                transition: { type: "spring", stiffness: 220, damping: 28, delay: i * 0.02 }
            });
        });
    };

    const handleHoverEnd = () => {
        arrowControls.forEach((ctl) => {
            ctl.start({
                x: 0,
                opacity: 1,
                transition: { type: "tween", duration: 0.18, ease: "easeOut" }
            });
        });
    };

    const time = useTime();

    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

    const rotatingBg = useTransform(rotate, (r) => `conic-gradient(from ${r}deg, #f97316, #a855f7, #06b6d4, #a855f7, #f97316)` as string);

    const rotatingBgHover = {
        background: rotatingBg
    }

    return (
        <header className="w-full h-screen relative text-white">
            {/* background image from /public/header.jpeg */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('/header.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-center p-4 flex-col justify-center space-y-10 text-center">
                <h1 className="text-8xl font-bold">Nest</h1>
                <h2 className="text-2xl italic font-extralight">"Your second home awaits."</h2>
                <div className="mt-2 flex items-center justify-center">
                    <motion.a
                        variants={LinkAnimations}
                        initial="rest"
                        whileHover="hover"
                        onHoverStart={handleHoverStart}
                        onHoverEnd={handleHoverEnd}
                        className="flex items-center justify-center bg-linear-to-br from-orange-500 via-purple-500 to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl mr-4 text-xl"
                        href="/menu"
                    >
                        Explore Menu
                        {/* three overlapping arrows that spread on hover */}
                        <span className="relative w-6 h-6 ml-1 inline-block">
                            {[0, 1, 2].map((i) => (
                                <motion.span
                                    key={i}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xl"
                                    initial={{ x: 0, opacity: 1 }}
                                    animate={arrowControls[i]}
                                >
                                    <FaAngleRight />
                                </motion.span>
                            ))}
                        </span>
                    </motion.a>
                    <div className="relative mr-4">
                        <button className="relative z-10 py-4 px-8 bg-slate-900/95 backdrop-blur-lg text-white font-semibold rounded-xl text-xl"
                            onClick={() => window.location.href = "/contact"}> Contact Us</button>
                        <motion.div
                            style={{
                                background: rotatingBg
                            }}
                        className="absolute bg-white/80 -inset-1 rounded-xl"/>
                    </div>
                </div>
            </div>
        </header >
    );
}