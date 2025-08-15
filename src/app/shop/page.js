"use client";
import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Luxury Oud",
    price: "Rs 2,500",
    img: "/Images/oud.jpg",
  },
  {
    id: 2,
    name: "Rose Musk",
    price: "Rs 1,800",
    img: "/Images/rose.jpg",
  },
  {
    id: 3,
    name: "Amber Bliss",
    price: "Rs 2,200",
    img: "/Images/amber.jpg",
  },
  {
    id: 4,
    name: "Sandalwood Elegance",
    price: "Rs 2,000",
    img: "/Images/sandal.jpg",
  },
];

export default function ShopPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen pt-24 pb-12">
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
          Our Shop
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our premium fragrances — crafted to perfection for every occasion.
        </p>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
    </main>
  );
}
