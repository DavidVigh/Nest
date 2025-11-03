"use client";

import Link from "next/link";
import {
    useMenuStore,
    Menu,
    MenuButton,
    MenuItem,
} from "@ariakit/react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const store = useMenuStore({ placement: "bottom-start" });
    const open = store.useState("open");

    const container = {
        hidden: { opacity: 0, y: -8 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.06,
            },
        },
        exit: { opacity: 0, y: -8 },
    };

    const item = {
        hidden: { opacity: 0, y: -6 },
        show: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" },
    ];

    return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#22191A]/75 backdrop-blur-sm p-4">
            <div className="flex items-center">
                <div className="flex-none">
                    <Link href="/">
                        <img src={"../favicon.ico"} className="w-8 h-8" alt="Nest Logo" />
                    </Link>
                </div>

                {/* Center: desktop links (hidden on small screens) */}
                <div className="flex-1 flex justify-end">
                    <ul className="hidden sm:flex space-x-4">
                        {navLinks.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href}>
                                    <motion.span
                                        className="relative inline-block px-1 py-0.5"
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <span className="relative z-10">{l.label}</span>

                                        {/* underline - scaleX animated left-to-right */}
                                        <motion.span
                                            className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-current origin-left"
                                            variants={{
                                                rest: { scaleX: 0 },
                                                hover: { scaleX: 1 },
                                            }}
                                            transition={{ duration: 0.22, ease: "easeOut" }}
                                            style={{ transformOrigin: "left" }}
                                        />
                                    </motion.span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile: menu button (visible on sm and under) */}
                    <div className="sm:hidden ml-auto">
                        <MenuButton
                            store={store}
                            className="px-3 py-2 rounded-md border border-gray-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/60 text-sm"
                            aria-label="Open menu"
                        >
                            Menu
                        </MenuButton>

                        <AnimatePresence>
                            {open && (
                                <Menu
                                    store={store}
                                    portal={false}
                                    className="relative"
                                >
                                    <motion.ul
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        variants={container}
                                        className="absolute right-0 mt-2 w-44 bg-white dark:bg-neutral-900 rounded-md shadow-lg p-2 z-50"
                                    >
                                        {navLinks.map((l) => (
                                            <motion.li key={l.href} variants={item}>
                                                <MenuItem
                                                    store={store}
                                                    className="w-full px-0 py-0"
                                                    onClick={() => store.setOpen(false)}
                                                >
                                                    <Link href={l.href} className="block w-full text-left">
                                                        <motion.span
                                                            className="relative inline-block w-full px-3 py-2 rounded-md"
                                                            initial="rest"
                                                            whileHover="hover"
                                                            animate="rest"
                                                        >
                                                            <span className="relative z-10 block">{l.label}</span>

                                                            <motion.span
                                                                className="absolute left-3 right-3 bottom-2 h-0.5 bg-current origin-left rounded"
                                                                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                                                                transition={{ duration: 0.22, ease: "easeOut" }}
                                                                style={{ transformOrigin: "left" }}
                                                            />
                                                        </motion.span>
                                                    </Link>
                                                </MenuItem>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </Menu>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right: spacer (reserved for future items like icons) */}
                <div className="flex-none w-8" />
            </div>
        </nav>
    );
}