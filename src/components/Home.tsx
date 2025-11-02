"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Trees, Leaf, Smile, HardHat } from "lucide-react";
import Image from "next/image";

 
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

 
function CountUp({ end, duration = 1100 }: { end: number; duration?: number }) {
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(end);
  const started = useRef(false);

  useEffect(() => {
    if (reduced || started.current) return;
    started.current = true;
    const start = performance.now();
    const from = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (end - from) * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, reduced]);

  return <span>{new Intl.NumberFormat("fr-FR").format(val)}</span>;
}

 
function StatsStrip() {
  const items = [
    { n: 30, label: "Ans d’expérience", Icon: HardHat },
    { n: 4398, label: "Chantiers réalisés", Icon: Trees },
    { n: 3940, label: "Clients satisfaits", Icon: Smile },
    { n: 10, label: "Élagueurs", Icon: Leaf },
  ];

  return (
    <div
      className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
      style={{ backgroundColor: "rgba(8,16,8,0.45)" }}
      aria-label="Chiffres clés"
    >
      {/* gradient glow ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:linear-gradient(black,transparent)]" />
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {items.map(({ n, label, Icon }, i) => (
          <li
            key={label}
            className="relative flex items-center gap-3 md:gap-4 px-4 py-3 md:px-6 md:py-5"
          >
          
            {i > 0 && (
              <div className="absolute left-0 top-3 bottom-3 w-px bg-white/10" aria-hidden />
            )}

        
            <span
              className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-white/15 to-transparent shadow-inner"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <Icon className="h-5 w-5 text-[#9BE44D]" />
            </span>

            {/* number + label */}
            <div className="leading-tight">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#B8FF6E] to-[#78C938] drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]">
                  <CountUp end={n} />
                </span>
              </div>
              <p className="text-white/80 text-[11px] sm:text-xs md:text-sm mt-0.5">{label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[65vh] sm:h-[70vh] md:h-[80vh]">
      <Image
  src="/images/banner.png"
  alt="Travaux d'entretien paysager en arrière-plan"
  fill
  priority
  quality={100}
  className="object-cover brightness-[0.85]" 
/>

      
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="inline-block bg-[#3A6317] text-[#CFF28A] -rotate-1  md:text-3xl tracking-[0.2em] font-semibold py-1.5 px-3 shadow-md mb-3">
              INSTANT · SIMPLE · SMART
            </div>

            <h1 className="max-w-3xl text-white   sm:text-5xl md:text-7xl font-extrabold leading-tight drop-shadow">
              Spécialiste en <span className="text-[#9BE44D]">élagage</span> & soin des arbres à
              grande hauteur
            </h1>

         
            <div className="mt-5 max-w-4xl">
              <StatsStrip />
            </div>

            <div className="mt-6">
              <button className="inline-flex items-center gap-2 bg-white text-[#2D4F12] hover:bg-[#2D4F12] hover:text-white transition-colors rounded-md font-semibold text-sm sm:text-base md:text-lg tracking-wide px-5 sm:px-6 md:px-7 py-2.5 md:py-3 shadow">
                DEVIS GRATUIT
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-8" />
    </>
  );
}
