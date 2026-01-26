"use client";

import { useEffect, useState } from "react";
import { emilysCandy, navFont } from "./ui/fonts";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // Compact style after scrolling a bit
      setCompact(currentScrollY > 40);

      lastScrollY = currentScrollY;
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
        border-b border-solid border-b-[#f1f3f2]
        px-6 sm:px-10
        sticky top-0 z-50
        transition-all duration-300 ease-in-out
        ${compact ? "py-4" : "py-4"}
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3 text-[#131614] justify-center sm:justify-start">
        <h2 className={`${emilysCandy.className} text-2xl font-bold`}>
          The Little Sprout
        </h2>
      </div>

      {/* Center: Navigation */}
      <nav className={`${navFont.className} text-[#131614]  flex flex-wrap justify-center items-center gap-5 sm:gap-8`}>
        <a className="text-base sm:text-lg font-medium" href="/">Home</a>
        <a className="text-base sm:text-lg font-medium" href="plants">Plants</a>
        <a className="text-base sm:text-lg font-medium" href="care-tips">Care Tips</a>
        <a className="text-base sm:text-lg font-medium" href="shop">Shop</a>
      </nav>

      {/* Right: Love Icon */}
      <div className={`${emilysCandy.className} flex items-center justify-center sm:justify-end gap-2`}>
        <img
          src="/icons/wired-outline-1704-flower-doodle-hover-pinch.gif"
          alt="Animated Plant Icon"
          className={`transition-all duration-300 ${compact ? "w-7 h-7" : "w-10 h-10"}`}
        />
        <p className="text-sm sm:text-base text-black">
          Made with love, <span className="text-green-900">Kali</span>
        </p>
      </div>
    </header>
  );
}
