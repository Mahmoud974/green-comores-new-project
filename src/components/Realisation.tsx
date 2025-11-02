"use client";

import React, {   useState } from "react";
import Image from "next/image";

export default function Realisation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "/images/banner.png",
      title: "Garden design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tristique fermentum malesuada massa.",
    },
    {
      image: "/images/banner.png",
      title: "Flower planting",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tristique fermentum malesuada massa.",
    },
    {
      image: "/images/banner.png",
      title: "Garden maintenance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tristique fermentum malesuada massa.",
    },
  ];

  return (
    <section className="w-full  bg-[#0C2316] py-20 text-white font-['Montserrat']">
      <div className="container  max-w-7xl mx-auto px-6 lg:px-12">
         
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div>
            <p className="uppercase text-sm tracking-[0.25em] text-gray-400 mb-2">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Explore our wide range of{" "}
              <span className="text-[#A8E86E]">services</span>
            </h2>
          </div>

          
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#A8E86E] text-[#0C2316] font-semibold px-6 py-2 rounded-full text-sm hover:bg-[#8FDC5C] transition">
              Get in touch
            </button>
            <button className="border border-[#A8E86E] text-[#A8E86E] font-semibold px-6 py-2 rounded-full text-sm hover:bg-[#A8E86E] hover:text-[#0C2316] transition">
              Browse all services
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-[#0C2316]"
            >
              <div className="relative w-full h-56">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#A8E86E] text-[#0C2316] text-xs font-semibold px-3 py-1 rounded-full">
                  Service
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center mt-10 space-x-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "bg-[#A8E86E]"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
