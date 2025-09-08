"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
 

  return (
    <footer className="bg-black text-white h-auto py-10 md:py-12">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="Green Comores"
              width={140}
              height={80}
              className="w-auto h-auto mx-auto md:mx-0"
            />
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>
          </div>

          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-sm font-bold tracking-wide mb-3">Service</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#" className="hover:text-fluo">Domain</Link></li>
              <li><Link href="#" className="hover:text-fluo">Shared Hosting</Link></li>
              <li><Link href="#" className="hover:text-fluo">Cloud Hosting</Link></li>
              <li><Link href="#" className="hover:text-fluo">Private Hosting</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-sm font-bold tracking-wide mb-3">Hosting</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#" className="hover:text-fluo">Cheap Hosting</Link></li>
              <li><Link href="#" className="hover:text-fluo">Hosting Wordpress</Link></li>
              <li><Link href="#" className="hover:text-fluo">Email Hosting</Link></li>
              <li><Link href="#" className="hover:text-fluo">Hosting Unlimited</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-sm font-bold tracking-wide mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#" className="hover:text-fluo">About</Link></li>
              <li><Link href="#" className="hover:text-fluo">Career</Link></li>
              <li><Link href="#" className="hover:text-fluo">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-sm font-bold tracking-wide mb-3">Help</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#" className="hover:text-fluo">FAQ</Link></li>
              <li><Link href="#" className="hover:text-fluo">Help support</Link></li>
            </ul>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
              <Link aria-label="Facebook" href="#" className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link aria-label="Instagram" href="#" className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-fluo text-black w-10 h-10 md:w-12 md:h-12 grid place-items-center hover:opacity-90 rounded"
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </footer>
  )
}
