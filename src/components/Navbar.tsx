"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "Réalisations", href: "#" },
    { name: "À propos", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 font-['Montserrat']">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="logo Green Comores"
            width={140}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-[#1A3A1A]">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                href={link.href}
                className="transition-colors duration-300 hover:text-[#7AC94E]"
              >
                {link.name}
              </Link>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#7AC94E] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Bouton Devis */}
        <div className="hidden md:block">
          <button className="bg-[#7AC94E] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#5FA33E] transition-all shadow-md">
            Devis gratuit
          </button>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-[#1A3A1A] hover:text-[#7AC94E] transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md animate-slide-down">
          <ul className="flex flex-col items-center gap-4 py-6 text-[#1A3A1A] font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-lg hover:text-[#7AC94E] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button className="mt-4 bg-[#7AC94E] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#5FA33E] transition-all">
                Devis gratuit
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
