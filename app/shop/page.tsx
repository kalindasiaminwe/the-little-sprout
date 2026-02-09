"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plants } from "@/components/data/plants";
import PlantCard from "@/components/ui/PlantCard";
import { toast } from "sonner";


export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCareLevel, setSelectedCareLevel] = useState<string>("all");

  const categories = ["all", ...new Set(plants.map((p) => p.category))];
  const careLevels = ["all", "easy", "moderate", "expert"];

  const filteredPlants = plants.filter((plant) => {
    const categoryMatch =
      selectedCategory === "all" || plant.category === selectedCategory;
    const careMatch =
      selectedCareLevel === "all" || plant.careLevel === selectedCareLevel;

    return categoryMatch && careMatch;
  });

  return (
    <div className="min-h-screen py-12 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl max-sm:text-3xl font-bold text-foreground lg:text-5xl">
            Shop Plants
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-sm:text-md max-sm:mt-2">
            Find your perfect green companion
          </p>
        </div>


        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-foreground">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter:</span>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="hidden h-6 w-px bg-border sm:block" />

          {/* Care Level Filter */}
          <div className="flex flex-wrap gap-2">
            {careLevels.map((level) => (
              <Button
                key={level}
                variant={
                  selectedCareLevel === level ? "accent" : "ghost"
                }
                size="sm"
                onClick={() => setSelectedCareLevel(level)}
                className="capitalize rounded-full"
              >
                {level === "all" ? "All Care Levels" : `${level} care`}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-muted-foreground">
          Showing {filteredPlants.length} plant
          {filteredPlants.length !== 1 ? "s" : ""}
        </p>

        {/* Plants Grid */}
        <div className="grid gap-6 max-sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPlants.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No plants found matching your filters.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedCareLevel("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
