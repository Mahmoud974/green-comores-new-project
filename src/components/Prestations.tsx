"use client";
import React, { useState } from "react";
import Image from "next/image";

type TabKey = "elagage" | "abattage" | "dessouchage" | "dechets" | "taille" | "cloture";

const OLIVE = "#6b8e23";
const OLIVE_DARK = "#2f4708";

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: "elagage", label: "Élagage", icon: "/icons-services/élagage.png" },
  { key: "abattage", label: "Abattage", icon: "/icons-services/abattage.png" },
  { key: "dessouchage", label: "Dessouchage", icon: "/icons-services/dessouchage.png" },
  { key: "dechets", label: "Traitement des déchets", icon: "/icons-services/traitement.png" },
  { key: "taille", label: "Taille de haie", icon: "/icons-services/taille.png" },
  { key: "cloture", label: "Clôture", icon: "/icons-services/cloture.png" },
];

const TITLES: Record<TabKey, string> = {
  elagage: "Élagage raisonné : sécurité & santé de l’arbre",
  abattage: "Abattage / démontage : intervention sécurisée",
  dessouchage: "Dessouchage par rognage : terrain prêt à aménager",
  dechets: "Déchets verts : broyage, évacuation, valorisation",
  taille: "Taille de haies : lignes nettes, résultat durable",
  cloture: "Clôtures : pose et réparations soignées",
};

export default function Prestations() {
  const [active, setActive] = useState<TabKey>("elagage");

  const CONTENT: Record<TabKey, { image: string; title: string; paragraphs: string[] }> = {
    elagage: {
      image: "/outside.jpg",
      title: "Élagage en accès simples ou difficiles",
      paragraphs: [
        "Interventions en grimpe ou à la nacelle pour sécuriser toitures, façades et voies de circulation.",
        "Tailles d’entretien et de restructuration pour préserver la vigueur et la silhouette des sujets.",
        "Repérage des contraintes (réseaux, voisinage) et mise en place d’un périmètre de sécurité avant travaux.",
        "Nettoyage complet et contrôle visuel en fin d’intervention.",
      ],
    },
    abattage: {
      image: "/cut.jpg",
      title: "Démontage contrôlé branche par branche",
      paragraphs: [
        "Abattage classique quand l’espace au sol le permet ; sinon démontage en sections avec rétention.",
        "Descente maîtrisée des pièces à la corde pour protéger les abords, clôtures et aménagements.",
        "Balise et sécurisation du chantier, gestion des tronçons et évacuation sur demande.",
        "Objectif : intervention propre, précise et sans impact pour votre environnement.",
      ],
    },
    dessouchage: {
      image: "/images/pelle.png",
      title: "Rognage précis des souches",
      paragraphs: [
        "Rognage mécanique jusqu’au niveau souhaité pour libérer l’emprise et éviter les rejets.",
        "Ameublissement et remise à niveau du sol : prêt pour engazonnement, massifs ou nouvelles plantations.",
        "Gestion des copeaux et des déblais selon vos besoins (réemploi, export).",
        "Accès étroits possibles avec matériel adapté.",
      ],
    },
    dechets: {
      image: "/sd.jpg",
      title: "Gestion responsable des déchets verts",
      paragraphs: [
        "Broyage sur place pour paillage ou évacuation en benne selon le volume.",
        "Tri et valorisation dans les filières adaptées quand c’est possible.",
        "Soufflage/ratissage des zones de passage : chantier rendu propre.",
        "Traçabilité sur demande pour les gros volumes.",
      ],
    },
    taille: {
      image: "/grass.jpg",
      title: "Haies régulières et denses",
      paragraphs: [
        "Taille de formation, d’entretien ou de reprise pour harmoniser hauteurs et épaisseurs.",
        "Coupe nette avec tranchants affûtés, récupération et évacuation des coupes.",
        "Respect des périodes d’intervention selon l’essence et l’usage des lieux.",
        "Conseils d’entretien pour garder une haie saine et esthétique toute l’année.",
      ],
    },
    cloture: {
      image: "/public/images/banner.png",
      title: "Pose & réparation de clôtures",
      paragraphs: [
        "Fourniture et pose de grillage souple/rigide, panneaux bois ou occultants selon vos contraintes.",
        "Implantation précise, scellement propre et finitions soignées (portillons, accessoires).",
        "Réparations partielles possibles sans tout remplacer quand c’est pertinent.",
        "Proposition claire : options, délais et budget maîtrisé.",
      ],
    },
  };

  return (
    <section className="w-full bg-white sm:mt-0 mt-2">
      {/* Onglets (mobile : scroll horizontal) */}
      <nav
        id="prestations-tabs"
        className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 md:gap-5 overflow-x-auto md:overflow-visible px-4 md:px-0"
        aria-label="Prestations"
      >
        {TABS.map(({ key, label, icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={[
                "px-3 sm:py-2 text-xs font-semibold py-3 sm:my-0 my-3 rounded-full whitespace-nowrap flex items-center gap-2",
                "md:w-44 md:h-14 md:px-6 md:text-sm md:rounded-none md:rounded-b-[22px]",
                "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isActive ? "text-white" : "bg-black text-white md:hover:bg-neutral-900",
              ].join(" ")}
              style={isActive ? { backgroundColor: OLIVE } : undefined}
              aria-pressed={isActive}
              aria-controls={`tab-panel-${key}`}
            >
              <span className="relative inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shrink-0">
                <Image src={icon} alt="" fill sizes="32px" className="object-contain" />
              </span>
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <style jsx>{`
        #prestations-tabs::-webkit-scrollbar { display: none; }
        #prestations-tabs { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Contenu */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Colonne gauche */}
          <div className="w-full lg:w-1/2">
            <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-64 md:h-72">
                <Image
                  src={CONTENT[active].image}
                  alt={CONTENT[active].title}
                  fill
                  priority
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between text-[13px] text-gray-600 mb-2">
                  <span>Prestations</span>
                  <span>MAJ 09/2025</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl text-gray-900 leading-tight">
                  {CONTENT[active].title}
                </h3>
              </div>
            </article>
          </div>

          {/* Colonne droite */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl" id={`tab-panel-${active}`} role="region" aria-live="polite">
              {/* >>> Titre principal qui change selon l'onglet <<< */}
              <h2 className="font-bold text-[28px] md:text-[36px] leading-tight mb-2" style={{ color: OLIVE_DARK }}>
                {TITLES[active]}
              </h2>
              <p className="text-gray-700 mb-6">
                Intervention soignée, chantier sécurisé et site laissé propre après passage.
              </p>

              <div className="space-y-5 text-[15px] md:text-base text-gray-900 leading-relaxed">
                {CONTENT[active].paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

              <div className="mt-7 p-5 bg-gray-50 rounded-r-lg border-l-4" style={{ borderLeftColor: OLIVE }}>
                <p className="font-medium text-gray-900 leading-relaxed">
                  Devis gratuit et conseils personnalisés pour adapter la méthode au site (voisinage, accès, réseaux).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
