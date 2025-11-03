import { easeInOut } from "framer-motion";
import { tr } from "framer-motion/client";

export const CardAnimation = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 1,
        transition: {
            delay: 0.05 * index
        }
    }),
    hover: {
        scale: 1.1,
        animate: {
            type: "spring" as const,
            stiffness: 500,
            damping: 15,
        }
    }
};

export const CardContainer = {
    initial: { opacity: 1 },
    open: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.12,
        },
    },
};

export const LinkAnimations = {
    rest: {
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
        }
    },
    hover: {
        scale: 1.05,
        transition: {
            type: "spring" as const,
            stiffness: 100,
        }
    }
};

export const LinkArrowAnimation = {};