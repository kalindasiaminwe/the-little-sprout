import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
     <section className=" max-w-7xl mx-auto relative overflow-hidden px-8">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold max-sm:text-center leading-tight">
              Where Every Plant Finds a{' '}
              <span className="text-green-950">Home</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md max-sm:text-center">
              Transform your space with our curated collection of beautiful, 
              easy-to-care-for house plants. Each one hand-selected for quality and shipped with love.
            </p>
            <div className="flex flex-wrap gap-4 max-sm:justify-center max-sm:hidden">
              <Link href="/shop">
              <Button  size="lg" className="gap-2">
                Shop Plants
                <ArrowRight className="h-4 w-4" />
              </Button>
              </Link>
              <Link href="/care-guides">
              <Button variant="outline" size="lg">
                Care Guides
              </Button>
              </Link>
            </div>
            <div className="flex gap-8 pt-4 max-sm:text-center max-sm:pt-0 max-sm:hidden">
              <div>
                <div className="text-2xl max-sm:text-xl font-bold text-green-950">30+</div>
                <div className="text-sm max-sm:text-xs text-gray-800">Plant Varieties</div>
              </div>
              <div>
                <div className="text-2xl max-sm:text-xl font-bold text-green-950">10k+</div>
                <div className="text-sm max-sm:text-xs text-gray-800">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl max-sm:text-xl font-bold text-green-950">4.9★</div>
                <div className="text-sm max-sm:text-xs text-gray-800">Average Rating</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={"/images/hero-plants.jpg"}
                alt="Beautiful house plants collection"
                className="w-full h-full object-cover"
              />
            </div>

            {/* large screens */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border max-sm:hidden">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full  flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <div className="text-sm text-gray-800">Certified House Plants</div>
                </div>
              </div>
            </div>

            {/* mobile phones buttons*/}
             <div className="flex flex-wrap gap-4 max-sm:justify-center md:hidden">

              <Link href="/shop">
              <Button  size="lg" className="gap-2">
                Shop Plants
                <ArrowRight className="h-4 w-4" />
              </Button>
              </Link>
              <Link href="/care-guides">
              <Button variant="outline" size="lg">
                Care Guides
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
