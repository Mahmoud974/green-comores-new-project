import React from 'react'
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
export default function Home() {
  return (
   <>
    <div className="relative w-full h-[65vh] sm:h-[70vh] md:h-[80vh]">
    <Image
      src="/images/banner.png"
      alt="Paysage verdoyant en arrière-plan"
      fill
      priority
      quality={100}
      className="object-cover"
    />
    {/* Overlay de lisibilité */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
    <div className="absolute inset-0 flex items-center">
     <div className="container mx-auto px-4 text-center md:text-left">
       <div className="inline-block bg-green -rotate-1 text-base sm:text-lg md:text-xl text-fluo tracking-widest font-['Montserrat'] py-1.5 sm:py-2 shadow-md mb-3 sm:mb-4 px-3 sm:px-4 mx-auto md:mx-0">
         INSTANT · SIMPLE · SMART
       </div>
       
     <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-['Montserrat'] font-extrabold leading-tight drop-shadow text-center md:text-left">
       Spécialiste en <span className="text-[#9BE44D]">élagage</span> <br className="hidden md:block"/> & soin des arbres à<br className="hidden md:block"/> grande hauteur
     </h1>
       <div className="mt-5 flex md:block justify-center">
        <button className="inline-flex items-center gap-2 sm:gap-3 bg-white text-green hover:bg-green hover:text-white transition-colors cursor-pointer rounded-md font-semibold text-sm sm:text-base md:text-lg tracking-wide px-5 sm:px-6 md:px-7 py-2.5 md:py-3 shadow">
          DEVIS GRATUIT
         <ArrowRight className="w-4 h-4 md:w-5 md:h-5"/>
        </button>
       </div>
     </div>
    </div>
    </div>
     <section className='flex container mx-auto justify-between py-7'>
  
     </section>
   </>
  )
}
