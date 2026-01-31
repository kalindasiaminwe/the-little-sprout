"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { plants } from "./data/plants";
import PlantCard from "./ui/PlantCard";
import { Button } from "./ui/button";

const FeaturedPlants = () => {
  const featuredPlants = plants.filter((plant) => plant.featured);

  return (
    <section className=" max-w-7xl mx-auto py-16 bg-sage-light/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-gray-900">
            Featured Plants
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our most popular picks, loved by plant parents everywhere
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

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
