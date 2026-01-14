import { Search, ShoppingCart } from "lucide-react";
import { emilysCandy, navFont, navFont2 } from "./ui/fonts";

export default function Navbar() {
  return (
    <header className=" max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center bg-white justify-between whitespace-nowrap border-b border-solid border-b-[#f1f3f2] px-6 sm:px-10 py-4 gap-4 sm:gap-0">
      {/* Left: Logo */}
      <div className="flex items-center gap-3 text-[#131614] justify-center sm:justify-start">
        <h2 className={`${emilysCandy.className} text-[#131614] text-2xl font-bold leading-tight tracking-[-0.015em]`}>
          The Little Sprout
        </h2>
      </div>

      {/* Center: Navigation */}
      <nav className={`${navFont.className} flex flex-wrap justify-center items-center gap-5 sm:gap-8`}>
        <a className="text-[#131614] text-base sm:text-lg font-medium leading-normal" href="/">
          Home
        </a>
        <a className="text-[#131614] text-base sm:text-lg font-medium leading-normal" href="plants">
          Plants
        </a>
        <a className="text-[#131614] text-base sm:text-lg font-medium leading-normal" href="care-tips">
          Care Tips
        </a>
        <a className="text-[#131614] text-base sm:text-lg font-medium leading-normal" href="shop">
          Shop
        </a>
        
      </nav>

      {/* Right: Love Icon and Text */}
      <div className={`${emilysCandy.className} flex items-center justify-center sm:justify-end gap-2`}>
        <img
          src="/icons/wired-outline-1704-flower-doodle-hover-pinch.gif"
          alt="Animated Plant Icon"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <p className="text-sm sm:text-base text-black text-center ">
          Made with love, <span className={`${emilysCandy.className} text-green-900 `}>Kali</span>
        </p>

      </div>
    </header>
  );
}
