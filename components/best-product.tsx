"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Swiss Cheese Plant",
    price: "ZMW 55.00",
    img: "/images/plant1.png",
    rating: 5,
  },
  {
    name: "Alocasia polly plant",
    price: "ZMW 49.00",
    img: "/images/plant2.png",
    rating: 5,
  },
  {
    name: "Lush Green Plant",
    price: "ZMW 64.00",
    img: "/images/plant3.png",
    rating: 5,
  },
];

export default function BestProduct() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white px-4 max-sm:px-8 py-10 sm:py-20 max-w-7xl mx-auto">
      {/* Section Heading with buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Best Product
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto sm:mx-0 text-sm sm:text-base">
            Discover our best product — thoughtfully designed for quality,
            sustainability, and style. Perfect for plant lovers who want beauty
            and function in one.
          </p>
        </div>
        <div className="flex justify-center sm:justify-end space-x-3 max-sm:hidden relative">

          <button
            onClick={nextSlide}
            className="bg-green-900 text-white p-3 rounded-sm hover:bg-green-800"
          >
            <p>View All</p>
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {products.map((product, i) => (
          <div
            key={i}
            className="border-amber-50 border-2 rounded-lg overflow-hidden text-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-contain bg-white"
            />
            <div className="p-1">
              <h3 className="text-lg font-medium text-gray-800">
                {product.name}
              </h3>
              <p className="text-green-900 font-semibold mt-1">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="flex justify-center">
          <div className="w-72 sm:w-80 border-amber-50 border-2 rounded-lg overflow-hidden text-center">
            <img
              src={products[index].img}
              alt={products[index].name}
              className="w-full h-56 object-contain bg-white"
            />
            <div className="p-2">
              <h3 className="text-lg font-medium text-gray-800">
                {products[index].name}
              </h3>
              <p className="text-green-900 font-semibold mt-1">
                {products[index].price}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Controls (only on mobile) */}
        <div className="flex justify-center space-x-3 mt-4">
          <button
            onClick={prevSlide}
            className="bg-green-900 text-white p-2 rounded-sm hover:bg-green-800"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-green-900 text-white p-2 rounded-sm hover:bg-green-800"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
