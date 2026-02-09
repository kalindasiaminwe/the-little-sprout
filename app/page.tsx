import Header from "@/components/navbar";

import Image from "next/image";
import { Divide } from "lucide-react";
import Mission from "@/components/mission";
import Influence from "@/components/influence";

import HowToOrder from "@/components/how-to-order";
import Footer from "@/components/footer";
import Hero from "@/components/header";
import FeaturedPlants from "@/components/best-product";

export default function Home() {
  return (
    <main className="bg-white ">
      <div className="md:pb-10 max-sm:pb-0" > 
        <Hero />      
      </div>
      <Mission />
      <FeaturedPlants />
      <Influence />      
      <HowToOrder />
      
      
    </main>
  );
}
