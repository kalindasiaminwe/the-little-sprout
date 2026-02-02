"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-md space-y-6">
          <div className="mx-auto w-24 h-24 rounded-full bg-sage-light flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground">
            Looks like you haven't added any plants yet. Time to find your new green friends!
          </p>
          <Link href="/shop">
            <Button variant="default" className="mt-4">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 max-w-7xl mx-auto md:p-15">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl max-sm:text-2xl font-bold text-foreground mb-8">
          Your Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 ">
            {items.map(({ plant, quantity }) => (
              <div
                key={plant.id}
                className="flex gap-4 rounded-2xl  p-4 shadow-md bg-yellow-200/20"
              >
                <Link href={`/plants/${plant.id}`} className="flex-shrink-0">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    width={112}
                    height={112}
                    className="rounded-xl object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link href={`/plants/${plant.id}`}>
                        <h3 className="font-display font-semibold text-foreground hover:text-primary transition-colors">
                          {plant.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{plant.scientificName}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(plant.id)}
                      className="text-muted-foreground hover:text-destructive flex-shrink-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-border bg-background p-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(plant.id, quantity - 1)}
                        className="rounded-full h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(plant.id, quantity + 1)}
                        className="rounded-full h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="font-display font-semibold text-primary text-lg max-sm:text-base">
                      ZMW{(plant.price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <Button
              variant="ghost"
              onClick={clearCart}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-card p-6 shadow-botanical">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">ZMW{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {totalPrice >= 50 ? (
                      <span className="text-primary">Free</span>
                    ) : (
                      "ZMW5.99"
                    )}
                  </span>
                </div>
                {totalPrice < 50 && (
                  <p className="text-xs text-gray-700">
                    Add ZMW{(50 - totalPrice).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-display font-bold">
                    <span>Total</span>
                    <span className="text-primary">
                      ZMW{(totalPrice + (totalPrice >= 50 ? 0 : 5.99)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 rounded-full h-12" size="lg">
                Proceed to Checkout
              </Button>

              <Link href="/shop" className="block mt-4">
                <Button variant="accent" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
