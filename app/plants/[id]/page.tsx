"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Droplets,
  Sun,
  Leaf,
  Plus,
  Minus,
  Check,
} from "lucide-react";

import { plants } from "@/components/data/plants";
import PlantCard from "@/components/ui/PlantCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";
import { toast } from "sonner";

const careLevelColors: Record<string, string> = {
  easy: "bg-sage-light text-sage-dark",
  moderate: "bg-terracotta-light text-terracotta-dark",
  expert: "bg-accent/20 text-accent",
};

export default function PlantDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const plant = plants.find((p) => String(p.id) === id);

  if (!plant) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-bold">Plant not found</h1>
        <Link href="/shop">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>
      </div>
    );
  }

  const relatedPlants = plants
    .filter((p) => p.id !== plant.id && p.category === plant.category)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(plant);
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    toast.success("Plant added to cart 🌱", {
      description:
        quantity === 1
          ? `${plant.name} has been added to your cart`
          : `${quantity} × ${plant.name} have been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        {/* Details */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-sage-light/30">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${careLevelColors[plant.careLevel]}`}
              >
                {plant.careLevel} care
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-accent">
                {plant.category}
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold">
                {plant.name}
              </h1>
              <p className="italic text-muted-foreground">
                {plant.scientificName}
              </p>
            </div>

            <p className="text-lg text-foreground/80">
              {plant.description}
            </p>

            <div className="text-4xl font-display font-bold text-primary">
              ZMW {plant.price}
            </div>

            {/* Care info */}
            <div className="grid grid-cols-3 gap-4 rounded-2xl bg-card p-6 shadow-botanical">
              <CareItem icon={<Sun />} label="Light" value={plant.light} />
              <CareItem icon={<Droplets />} label="Water" value={plant.water} />
              <CareItem icon={<Leaf />} label="Care" value={plant.careLevel} />
            </div>

            {/* Quantity */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus />
                </Button>
              </div>

              <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 rounded-full"
              >
                {added ? (
                  <>
                    <Check className="mr-2" /> Added!
                  </>
                ) : (
                  <>
                    <Plus className="mr-2" />
                    Add to Cart — ZMW {(plant.price * quantity).toFixed(2)}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedPlants.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-8 font-display text-2xl font-bold">
              You might also like
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPlants.map((p) => (
                <PlantCard key={p.id} plant={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function CareItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto h-8 w-8 text-accent">{icon}</div>
      <p className="mt-2 text-sm font-medium">{label}</p>
      <p className="text-xs text-muted-foreground capitalize">{value}</p>
    </div>
  );
}
