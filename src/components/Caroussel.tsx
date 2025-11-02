"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  { src: "/bg.jpg", alt: "Élagage 1" },
  { src: "/bg.jpg", alt: "Élagage 2" },
  { src: "/bg.jpg", alt: "Élagage 3" },
];

export default function Caroussel() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {slides.map((s, i) => (
          <CarouselItem key={i} className="basis-full">
            {/* Conteneur requis pour Image fill */}
            <div className="relative h-64 sm:h-72 md:h-96 rounded-xl overflow-hidden">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 800px, 100vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Boutons de nav shadcn */}
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
