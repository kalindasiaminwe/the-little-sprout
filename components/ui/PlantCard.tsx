"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus, Droplets, Sun } from "lucide-react";
import { Plant } from "../data/plants";
import { useCart } from "@/app/context/CartContext";
import { Button } from "./button";
import { toast } from "sonner";

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { addToCart } = useCart();

  const careLevelColors: Record<Plant["careLevel"], string> = {
    easy: "bg-green-200/20 text-green-800",
    moderate: "bg-yellow-200/20 text-amber-800",
    expert: "bg-accent/20 text-accent",
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl max-sm:rounded bg-card shadow-lg transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
      <Link href={`/plants/${plant.id}`} className="block">
        <div className="relative aspect-[5/5] overflow-hidden">
          <Image
            src={plant.image}
            alt={plant.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute top-3 left-3 max-sm:hidden">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${careLevelColors[plant.careLevel]}`}
            >
              {plant.careLevel.charAt(0).toUpperCase() +
                plant.careLevel.slice(1)}{" "}
              care
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/plants/${plant.id}`}>
          <h3 className="font-display text-lg max-sm:text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
            {plant.name}
          </h3>
          <p className="text-sm italic text-muted-foreground max-sm:text-xs">
            {plant.scientificName}
          </p>
        </Link>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Sun className="h-3 w-3 " />
            {plant.light.split(" ")[0]}
          </span>
          <span className="flex items-center gap-1">
            <Droplets className="h-3 w-3" />
            {plant.water}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl max-sm:text-xs font-display font-semibold text-primary">
            ZMW{plant.price}
          </span>
          <Button
            size="sm"
            className="rounded-full max-sm:text-xs"
            onClick={(e) => {
              e.preventDefault();
              addToCart(plant);
              toast.success("Plant added to cart 🌱", {
                description: `${plant.name} has been added to your cart`,
              });
            }}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
