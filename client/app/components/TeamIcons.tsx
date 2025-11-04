"use client";
import { delay, motion, scale } from 'framer-motion';
import { BsPersonFill } from 'react-icons/bs';

export default function TeamIcons() {
    const container = {
        hidden: { scale: 0, opacity: 1 },
        visible: { scale: 1, opacity: 1, transition: { ease: "easeInOut", duration: 0.3, delay: 1.3 } },
    } as const;

    // start overlapped at center (x:0), then animate outward to the left
    // keep opacity 1 (no fade), start slightly smaller so the center can pop above
    const left = {
        visible: {
            scale: 1,
            opacity: 1,
            x: 20,
            y: 0,
            rotate: 10,
            transition: { ease: "easeInOut", duration: 0.3, delay: 1.6 },
        },
    } as const;

    const center = {
        visible: {
            scale: 1,
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: { ease: "easeInOut", duration: 0.3, delay: 1.5, },
        },
        // appear first
    } as const;

    // start overlapped at center (x:0), then animate outward to the right
    // keep opacity 1 (no fade), start slightly smaller so the center can pop above
    const right = {
        visible: {
            scale: 1,
            opacity: 1,
            x: -20,
            y: 0,
            rotate: -10,
            transition: { ease: "easeInOut", duration: 0.3, delay: 1.6 },
        },

    } as const;

    return (
        <motion.div
            className="relative w-28 h-12 ml-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={container}
        >
            {/* left (slightly smaller) */}
            <motion.span className="absolute left-1/2 top-0 -translate-x-1/2 text-[#faddc8] z-0" variants={left}>
                <BsPersonFill className="w-12 h-12 md:w-14 md:h-14" />
            </motion.span>

            {/* center (largest) */}
            <motion.span className="absolute left-1/2 top-0 -translate-x-1/2 text-[#f6e9e3] z-10" variants={center}>
                <BsPersonFill className="w-12 h-12 md:w-14 md:h-14" />
            </motion.span>

            {/* right (slightly smaller) */}
            <motion.span className="absolute left-1/2 top-0 -translate-x-1/2 text-[#faddc8] z-0" variants={right}>
                <BsPersonFill className="w-12 h-12 md:w-14 md:h-14" />
            </motion.span>
        </motion.div>
    );
}
