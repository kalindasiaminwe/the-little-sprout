"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { Button } from "./ui/button";

export default function Navbar() {
  const { totalItems } = useCart();

  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // Compact mode
      setCompact(currentScrollY > 40);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        max-w-7xl mx-auto
        flex flex-col sm:flex-row sm:items-center
        bg-white justify-between whitespace-nowrap
        border-b border-b-[#f1f3f2]
        px-6 sm:px-10
        sticky top-0 z-50
        transition-all duration-300 ease-in-out
        py-4
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3 text-[#131614] justify-center sm:justify-start">
        <Link href="/">
          <h2 className={`${emilysCandy.className} text-2xl font-bold`}>
            The Little Sprout
          </h2>
        </Link>
      </div>

      {/* Center: Navigation */}
      <nav
        className={` text-[#131614] flex flex-wrap justify-center items-center gap-5 sm:gap-8`}
      >
        <Link className="text-base sm:text-lg font-medium" href="/">
          Home
        </Link>
        <Link className="text-base sm:text-lg font-medium" href="/shop">
          Shop
        </Link>
        <Link className="text-base sm:text-lg font-medium" href="/care-guides">
          Care Guides
        </Link>
      </nav>

      {/* Right: Cart + Signature */}
      <div
        className={`${emilysCandy.className} flex items-center justify-center sm:justify-end gap-3`}
      >
        <Link href="/cart">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                {totalItems}
              </span>
            )}
          </Button>
        </Link>

        <img
          src="/icons/wired-outline-1704-flower-doodle-hover-pinch.gif"
          alt="Animated Plant Icon"
          className={`transition-all duration-300 ${
            compact ? "w-7 h-7" : "w-10 h-10"
          }`}
        />

        <p className="text-sm sm:text-base text-black">
          Made with love, <span className="text-green-900">Kali</span>
        </p>
      </div>
    </header>
  );
}
