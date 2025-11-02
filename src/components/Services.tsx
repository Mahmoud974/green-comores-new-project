"use client";

import { CircleChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Services() {
  const services = [
    {
      icon: "/icons/gate.png",
      title: "Maintenance",
      description:
        "Nous assurons l’entretien régulier de vos espaces extérieurs avec des solutions durables et écologiques.",
    },
    {
      icon: "/icons/fork.png",
      title: "Tree care",
      description:
        "Nos experts assurent la taille, l’élagage et les soins préventifs pour garantir la santé de vos arbres.",
    },
    {
      icon: "/icons/spray.png",
      title: "Pruning",
      description:
        "Un service d’élagage précis pour assurer la croissance harmonieuse et sécurisée de vos plantations.",
    },
    {
      icon: "/icons/tron.png",
      title: "Landscaping",
      description:
        "Conception et aménagement de jardins personnalisés, esthétiques et respectueux de la biodiversité.",
    },
  ];

  return (
    <section className="relative w-full bg-white   font-['Montserrat']">
      <div className="text-center mb-12">
        <p className="text-sm uppercase text-gray-400 tracking-widest">
          Leader en aménagement paysager
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2E4D1D] mt-2">
          Services
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Icône */}
            <div className="mb-6 h-14 w-14 flex items-center justify-center rounded-full bg-[#F4F9F1] group-hover:bg-[#E9F5E1] transition">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

             
            <h3 className="text-lg font-bold text-[#1E3512] mb-3">
              {service.title}
            </h3>

           
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              {service.description}
            </p>

           
            <button className="inline-flex items-center gap-1 text-sm font-medium text-[#3D6C2A] hover:text-[#1E3512] transition-colors">
              Read more
              <CircleChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Bouton global */}
      <div className="mt-16 flex justify-center">
        <button className="border border-[#3D6C2A] text-[#3D6C2A] hover:bg-[#3D6C2A] hover:text-white transition-all font-semibold px-8 py-3 rounded-full text-sm tracking-wide">
          SERVICES
        </button>
      </div>
    </section>
  );
}
