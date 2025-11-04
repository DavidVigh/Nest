"use client";
import { motion } from "framer-motion";
import React from "react";
import { CardAnimation } from "../motion/variants";
import { cardBg } from "../tailwind/variables";

type OfferCardProps = {
  index: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function OfferCard({
  index,
  icon,
  title,
  description,
}: OfferCardProps) {
  return (
    <motion.div
      variants={CardAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      whileHover="hover"
      className={cardBg + " flex flex-col items-center justify-center space-y-4 m-4 p-6 rounded-2xl shadow-lg w-64"}
    >
      <div className="mx-auto">{icon}</div>
      <h3 className="text-lg text-center font-semibold text-[#3d2d2f]">
        {title}
      </h3>
      <p className="text-sm text-center text-[#3d2d2f]">{description}</p>
    </motion.div>
  );
}
