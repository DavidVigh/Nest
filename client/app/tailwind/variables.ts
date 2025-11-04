export const pageTitle = (textSize:string, breakpoint:string = "") => {
    switch (breakpoint) {
        case "sm":
            return `font-semibold sm:text-${textSize} text-transparent bg-clip-text bg-gradient-to-l from-[#e06e64] to-[#be7343]`;
        case "md":
            return `font-semibold md:text-${textSize} text-transparent bg-clip-text bg-gradient-to-l from-[#e06e64] to-[#be7343]`;
        case "lg":
            return `font-semibold lg:text-${textSize} text-transparent bg-clip-text bg-gradient-to-l from-[#e06e64] to-[#be7343]`;
        default:
            return `font-semibold text-${textSize} text-transparent bg-clip-text bg-gradient-to-l from-[#e06e64] to-[#be7343]`;
    }
}

export const pageQuote = (textSize:string) =>
    `text-${textSize} mt-1 max-w-xl text-[#3d2d2f]`;

export const cardBg = "bg-gradient-to-tl from-[#f6e9e3] to-[#faddc8]";