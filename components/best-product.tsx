"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { plants } from "./data/plants";
import PlantCard from "./ui/PlantCard";
import { Button } from "./ui/button";

const FeaturedPlants = () => {
  const featuredPlants = plants.filter((plant) => plant.featured);

  // index includes the cloned slide
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const slides = [...featuredPlants, featuredPlants[0]];

  const prev = () => {
    if (index === 0) {
      setIsAnimating(false);
      setIndex(featuredPlants.length - 1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    } else {
      setIndex((i) => i - 1);
    }
  };

  const next = () => {
    setIndex((i) => i + 1);
  };

  const handleTransitionEnd = () => {
    // When we hit the cloned slide, jump back to the real first slide
    if (index === featuredPlants.length) {
      setIsAnimating(false);
      setIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-16 bg-sage-light/30 max-sm:px-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-gray-900">
            Featured Plants
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our most popular picks, loved by plant parents everywhere
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="relative sm:hidden">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-transparent p-2 shadow-md"
            aria-label="Previous plant"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-transparent p-2 shadow-md"
            aria-label="Next plant"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className={`flex ${
                isAnimating
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{ transform: `translateX(-${index * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((plant, i) => (
                <div key={i} className="w-full shrink-0">
                  <PlantCard plant={plant} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/shop">
            <Button variant="outline" size="lg">
              View All Plants
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;
