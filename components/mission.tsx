import { GoArrowUpRight } from "react-icons/go";
import React from "react";

const Mission = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-10 py-20 max-sm:py-10 bg-[#D6EFD8] max-w-7xl mx-auto rounded-sm">
      {/* Left section */}
      <div className="flex flex-col">
        <h2 className="text-gray-900 md:text-5xl max-sm:text-2xl sm:text-2xl max-sm:text-center">
          Our mission is to preserve the beauty of nature for future
          generations.
        </h2>
      </div>

      {/* Right section */}
      <div className="flex flex-col items-start">
        <p className="text-gray-900 mb-20 sm:mb-0 order-1 max-sm:order-1 max-sm:pt-10 max-sm:mb-5">
          Fill your space with fresh, lively greenery that soothes the soul and
          cleanses the air. From cute little succulents to eye-catching
          statement plants, there’s something for every space and style. Our
          plants are grown with love and care for their quality and beauty,
          ensuring you receive only the best. Find your perfect plant today and
          watch your space come to life!
        </p>

        
        <button className="bg-[#081607] text-white px-6 py-3 mt-8 max-sm:mt-0 rounded hover:bg-green-700 transition duration-300 flex items-center gap-2 order-2 max-sm:order-2">
          About us <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default Mission;
