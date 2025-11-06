export const CardAnimation = {
    initial: {
        opacity: 0,
        y: 100,
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
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
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        transition: {
            scale: { type: "spring" as const, stiffness: 450, damping: 25 },
            boxShadow: { ease: "easeInOut" as const, duration: 0.1 }
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