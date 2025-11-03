"use client";

import OfferCard from "./OfferCard";
import { FaCoffee } from "react-icons/fa";
import { BsCake2Fill } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";

const offers = [
  {
    title: "Premium Coffee",
    description: "Handcrafted beverages made with the finest beans",
    icon: (
      <FaCoffee
        className="mx-auto text-6xl text-[#3d2d2f] bg-gradient-to-bl from-[#e06e64] to-[#be7343] p-3 w-20 h-20 rounded-2xl"
        aria-hidden
      />
    ),
  },
  {
    title: "Artisan Pastries",
    description: "Freshly baked goods made daily with love",
    icon: (
      <BsCake2Fill
        className="mx-auto text-6xl text-[#3d2d2f] bg-gradient-to-bl from-[#e06e64] to-[#7b5a5e] p-3 w-20 h-20 rounded-2xl"
        aria-hidden
      />
    ),
  },
  {
    title: "Gourmet Dining",
    description: "Delicious meals prepared by expert chefs",
    icon: (
      <GiKnifeFork
        className="mx-auto text-6xl text-[#3d2d2f] bg-gradient-to-bl from-[#ce9672] to-[#771f17] p-3 w-20 h-20 rounded-2xl"
        aria-hidden
      />
    ),
  },
];

export default function Offer() {
  return (
    <section className="flex items-center flex-col justify-between bg-[#cdbbbd]">
      <div className="flex flex-col items-center justify-center mt-20 mb-15 px-4 text-center">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#e06e64] to-[#be7343]">
          What We Offer
        </h2>
        <p className="text-md mt-1 max-w-xl text-[#3d2d2f]">Experience the perfect blend of comfort, quality, and taste</p>
      </div>

      <div id="cards" className="flex flex-col md:flex-row flex-wrap items-center justify-center max-w-6xl mx-auto pb-20">
        {offers.map((o, index) => (
          <OfferCard index={index} key={o.title} icon={o.icon} title={o.title} description={o.description} />
        ))}
      </div>
    </section>
  );
}
