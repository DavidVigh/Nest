import Image from "next/image";
import Header from "./components/header";
import Offer from "./components/offer";
import { main } from "framer-motion/client";


export default function Home() {
  return (
    <main>
      <Header />
      <Offer />
    </main>
  );
}
