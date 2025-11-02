"use client";

import React from "react";
import {
  Trees,
  Scissors,
  ShieldCheck,
  AlarmClock,
  Sprout,
  Flower2,
} from "lucide-react";

export default function Service() {
  const items = [
    {
      Icon: Trees,
      title: "Élagage & taille douce",
      desc: "Taille raisonnée pour sécuriser les abords et préserver la vigueur de l’arbre.",
    },
    {
      Icon: Scissors,
      title: "Abattage difficile",
      desc: "Démontage contrôlé avec rétention en zones exigües ou proches d’ouvrages.",
    },
    {
      Icon: ShieldCheck,
      title: "Mise en sécurité",
      desc: "Suppression de branches mortes, sécurisation post-tempête, levée de risques.",
    },
    {
      Icon: AlarmClock,
      title: "Urgence 24/7",
      desc: "Intervention rapide en cas de chute d’arbre ou danger imminent.",
    },
    {
      Icon: Sprout,
      title: "Entretien & tonte",
      desc: "Tonte, désherbage sélectif et soins réguliers pour des espaces nets.",
    },
    {
      Icon: Flower2,
      title: "Création de jardins",
      desc: "Conception et plantation sur-mesure, respectueuses de la biodiversité.",
    },
  ];

  return (
    <section className="w-full bg-[#0C2316] py-20 font-['Montserrat']">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {items.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex items-start gap-5 transition-transform duration-300 hover:translate-x-1"
            >
              {/* Pastille icône */}
              <div className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#A8E86E]/25 border border-[#A8E86E]/50">
                <Icon className="h-7 w-7 text-[#A8E86E]" />
              </div>

              {/* Texte */}
              <div>
                <h4 className="text-[16px] sm:text-lg font-semibold text-[#A8E86E] mb-1">
                  {title}
                </h4>
                <p className="text-[14px] text-[#E2EDE1] leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
