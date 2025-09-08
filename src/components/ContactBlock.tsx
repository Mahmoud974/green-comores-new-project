import React from "react";
import ContactForm from "./Formulaire";

export default function ContactBlock() {
  return (
    <section className="flex flex-col-reverse xl:flex-row text-black" id="contact">
      {/* Colonne gauche : Carte Google Maps */}
      <div className="bg-green-200 w-full h-[24rem] md:h-[32rem] xl:h-[45rem] relative mt-6 xl:mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.1234567890123!2d2.123456789012345!3d48.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1234567890%3A0x1234567890abcdef!2sBeauvilliers%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte de Beauvilliers et Fradier Brise"
          className="w-full h-full"
        ></iframe>
      </div>
      
      {/* Colonne droite : Formulaire par-dessus la carte */}
      <div className="w-full h-auto xl:h-[45rem] relative">
        <ContactForm />
      </div>
    </section>
  );
}
