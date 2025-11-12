"use client";

import ContactCard from "../components/ContactCard";
import { ContactCardProps } from "../types";
import { MdEmail } from "react-icons/md";
import { FaClock, FaPhone } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { pageQuote, pageTitle } from "../tailwind/variables";

const cards: ContactCardProps[] = [
  {
    id: 1,
    icon: (
      <IoIosPin
        className="text-6xl text-[#591711] bg-gradient-to-b from-[#f6e9e3] to-[#f6e9e3]/20 p-3 w-20 h-20 rounded-2xl"
        aria-hidden
      />
    ),
    title: "Address",
    text: "123 Main St, Anytown, USA",
  },
  {
    id: 2,
    icon: (
      <FaPhone
        className="text-6xl text-[#4f2f1b]
         bg-gradient-to-b from-[#f6e9e3] to-[#f6e9e3]/20
         p-3 w-20 h-20 rounded-2xl"
        aria-hidden
      />
    ),
    title: "Phone",
    text: "(123) 456-7890",
  },
  {
    id: 3,
    icon: (
      <MdEmail
        className="text-6xl text-[#512b1a] bg-gradient-to-b from-[#f6e9e3] to-[#f6e9e3]/20 p-3 w-20 h-20 rounded-2xl"
        aria-hidden
      />
    ),
    title: "Email",
    text: "contact@example.com",
  },
  {
    id: 4,
    icon: (
      <FaClock
        className="text-6xl text-[#622e08] bg-gradient-to-b from-[#f6e9e3] to-[#f6e9e3]/20 p-3 w-20 h-20 rounded-2xl"
        aria-hidden
      />
    ),
    title: "Hours",
    text: "Mon-Sun: 8:00am - 10:00pm",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <article className="mx-auto pt-20 flex flex-col items-center justify-center">
        <section className="flex flex-col mt-10 items-center justify-center ">
          <h1 className={pageTitle("6xl")}>Contact Us</h1>
          <p className={pageQuote("2xl") + " mt-4 italic"}>
            We would love to hear from you
          </p>
        </section>

        <section
          id="cards"
          className="container mt-16 p-10
        border shadow-md border-[#cdbbbd] bg-[#f6e9e3] rounded-2xl 
        w-full flex flex-wrap justify-center gap-12 mb-20"
        >
          <ContactCard contacts={cards} />
        </section>

        <section
          className="flex flex-col items-center justify-center
          bg-[#f6e9e3] border rounded-2xl
         border-[#cdbbbd]
          container p-10"
        >
          <h2 className="text-5xl
           font-bold text-center text-[#3d2d2f]">
            Visit Us Today
          </h2>
          <p className="mt-4 text-md lg:text-lg text-center max-w-lg text-[#3d2d2f]">
            Come experience the warmth and comfort of Nest. Whether you're
            stopping by for a quick coffee or settling in for a full meal, we're
            here to make you feel at home.
          </p>
          <iframe
            className="
            mt-8
            w-fit h-96
            md:w-[500px] md:h-[400px]
            lg:w-[600px] lg:h-[450px]
            2xl:w-[800px] 2xl:h-[600px]
            border border-[#90696e]/80 bg-[#f6e9e3] rounded-xl
            "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18135.395609769006!2d19.051891668401183!3d47.49297789541911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc1046d4a33d%3A0x342122b8ff8f0f6e!2zT3JzesOhZ2jDoXo!5e0!3m2!1shu!2shu!4v1762464633105!5m2!1shu!2shu"
          ></iframe>
        </section>
      </article>
    </main>
  );
}
