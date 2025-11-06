import { motion } from "framer-motion";
import { ContactCardProps } from "../types";
import { CardAnimation } from "../motion/variants";

export default function ContactCard({ contacts }: { contacts: ContactCardProps[] }) {
    return (
        contacts.map(contact => (
          <motion.div
      variants={CardAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={contact.id}
      whileHover="hover"
      key={contact.id}
      className="bg-gradient-to-b from-[#cdbbbd] to-[#90696e]/70
      p-8 rounded-xl shadow-md
      min-w-[300px] lg:min-w-[375px] text-[#3d2d2f] border border-[#cdbbbd]"
    >
      {contact.icon}
      <h2 className="text-xl font-semibold mt-4">{contact.title}</h2>
      <p className="mt-2 text-lg font-extralight">{contact.text}</p>
    </motion.div>
  )))
}