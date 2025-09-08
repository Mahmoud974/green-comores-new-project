"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { Menu, MapPin, Phone, Mail, Clock2, Facebook, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-sand text-black h-auto py-3 sm:py-4">
      <div className="container mx-auto h-full">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            className="h-auto w-38 sm:w-36 md:w-40  "
            alt="logo greencomores"
            width={500}
            height={500}
          />

          <ul className="hidden md:flex flex-1 items-center justify-center font-['Montserrat'] space-x-6 lg:space-x-8">
            {["HOME", "REALISATION", "À PROPOS", "CONTACT", "SERVICES"].map((item, index) => (
              <li key={index} className="text-base lg:text-xl font-bold relative group">
                <Link
                  href="#"
                  className="px-3 py-1 transition duration-300 group-hover:bg-green group-hover:text-fluo"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-3">
            <button
              className="hidden md:inline-block px-6 py-2 font-bold text-fluo bg-green hover:bg-fluo hover:text-green hover:shadow-xl cursor-pointer leading-tight"
            >
              DEVIS
            </button>
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2  bg-green text-fluo hover:bg-fluo hover:text-green cursor-pointer"
              onClick={() => setIsOpen((o) => !o)}
            >
              <Menu />
           
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3">
            <ul className="flex flex-col font-['Montserrat'] space-y-2">
              {["HOME", "REALISATION", "À PROPOS", "CONTACT", "SERVICES"].map((item, index) => (
                <li key={index} className="text-base text-center font-semibold">
                  <Link
                    href="#"
                    className="block px-3 py-2 rounded transition duration-200 hover:bg-green hover:text-fluo"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li className="flex justify-center">
                <button className="w-1/2 mt-1 px-4 py-2 font-bold text-fluo bg-green hover:bg-fluo hover:text-green hover:shadow cursor-pointer leading-tight">
                  DEVIS
                </button>
              </li>
              <li className="pt-2">
                <div className="bg-green text-white  p-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <MapPin className="text-fluo mr-2 h-4 w-4" />
                      <span>Mitsamiouli, Comores</span>
                    </div>
                    <a href="tel:0890124317" className="flex items-center hover:underline">
                      <Phone className="text-fluo mr-2 h-4 w-4" />
                      08.90.12.43.17
                    </a>
                    <a href="mailto:support@gmail.com" className="flex items-center hover:underline">
                      <Mail className="text-fluo mr-2 h-4 w-4" />
                      support@gmail.com
                    </a>
                    <div className="flex items-center">
                      <Clock2 className="text-fluo mr-2 h-4 w-4" />
                      <span>Lun - Ven 7h00 - 18h00</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4 pt-2">
                    <Facebook className="text-fluo h-5 w-5" />
                    <Instagram className="text-fluo h-5 w-5" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}