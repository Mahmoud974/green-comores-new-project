"use client"
import React, { useState } from 'react'

export default function AccordionFaq() {
  const [openItem, setOpenItem] = useState(0)

  const faqItems = [
    {
      question: "Quels sont les services proposés par Green Comores Espaces Verts ?",
      answer: "Nous proposons l'élagage et la taille des arbres à grande hauteur, la tonte des pelouses, la création et l'entretien de jardins, l'installation de clôtures et terrasses, le diagnostic phytosanitaire ainsi que la mise à disposition d'outils de jardinage."
    },
    {
      question: "Quels sont vos engagements envers les clients ?",
      answer: "Nous garantissons le respect de l'environnement, une rapidité d'intervention, une écoute attentive de vos besoins et une disponibilité 7 jours sur 7 pour tous vos projets."
    },
    {
      question: "Proposez-vous un devis gratuit ?",
      answer: "Oui, le devis est gratuit pour Moroni et sa périphérie. Au-delà de cette zone, un forfait adapté sera appliqué pour couvrir les frais supplémentaires."
    },
    {
      question: "Y a-t-il des offres promotionnelles en cours ?",
      answer: "Oui, une réduction de 10% est accordée sur présentation de ce flyer, afin de rendre nos services encore plus accessibles."
    },
    {
      question: "Intervenez-vous uniquement à Moroni ?",
      answer: "Nous intervenons à Moroni et dans toute sa périphérie. Pour les zones plus éloignées, des conditions spécifiques sont mises en place avec des forfaits adaptés."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index)
  }

  return (
    <section className='w-full bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <p className='text-green-600 font-bold text-sm tracking-widest'>FAQ</p>
          <h3 className='font-bold text-3xl mt-2 text-gray-900'>Questions fréquemment posées</h3>
        </div>
        
        <div className='max-w-3xl mx-auto'>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
            {faqItems.map((item, index) => (
              <div key={index} className='border-b border-gray-100 last:border-b-0'>
                <button
                  onClick={() => toggleItem(index)}
                  className='w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between'
                >
                  <span className='font-semibold text-gray-900 text-lg cursor-pointer'>{item.question}</span>
                  <span className='text-gray-600 text-xl font-light'>
                    {openItem === index ? '×' : '+'}
                  </span>
                </button>
                
                {openItem === index && (
                  <div className='px-6 py-4 bg-gray-50'>
                    <p className='text-gray-700 leading-relaxed'>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
