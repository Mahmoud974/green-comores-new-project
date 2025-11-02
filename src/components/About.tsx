"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white py-24 font-['Montserrat']">
      <div className="container max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Bloc texte */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="uppercase text-sm tracking-[0.25em] text-gray-400 mb-4">
            À propos
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
            Un beau jardin est une œuvre{" "}
            <span className="text-[#A5C663] font-extrabold">d’art.</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Chez <strong>Green Comores Espaces Verts</strong>, nous allions
            passion et expertise pour entretenir et sublimer vos espaces
            extérieurs. Notre approche repose sur le respect de la nature et
            l’innovation dans chaque intervention.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Qu’il s’agisse d’élagage, de création de jardins, ou de
            maintenance, nous mettons notre savoir-faire au service de vos
            besoins avec des solutions éco-responsables et durables.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Disponible <strong>7j/7</strong>, notre équipe intervient à Moroni et
            dans sa périphérie, avec un <strong>devis gratuit</strong> et une{" "}
            <strong>réduction de 10%</strong> sur présentation de ce flyer.
          </p>
        </div>

        {/* Bloc image */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/about-elagage.jpg" 
              alt="Entretien de jardin"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
