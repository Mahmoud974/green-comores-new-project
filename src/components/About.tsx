import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className='w-full bg-white mb-18 -mt-12 sm:-mt-0'>
    <div className='container mx-auto px-4 mt-20'>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        
      
        <div className='lg:w-1/2 w-full order-2 lg:order-1 sm:-mt-0 -mt-7' >
          <div className='max-w-lg mx-auto text-center lg:text-left'>
            <p className='text-green-600 font-bold text-sm tracking-widest uppercase mb-4'>À PROPOS</p>
            <h3 className='font-bold text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight'>
              Pourquoi nous choisir ?
            </h3>
            <div className='space-y-4 text-gray-700 leading-relaxed text-center lg:text-justify'>
              <p>
                Chez <strong>Green Comores Espaces Verts</strong>, {`nous mettons un point d'honneur à respecter l'environnement tout en garantissant une rapidité d'exécution et une véritable écoute des besoins de nos clients. 
                Notre équipe est disponible`} <strong>7 jours sur 7</strong> {`pour répondre à toutes vos demandes, qu'il s'agisse d'élagage, de taille ou de soin des arbres à grande hauteur.`}
              </p>
              <p>
                Nous offrons un <strong>diagnostic phytosanitaire</strong> pour garantir la santé de vos espaces verts et proposons des services complets tels que <strong>{`l'élagage et la tonte`}</strong>, la création de <strong>clôtures et terrasses</strong>, 
                {`la mise à disposition d'`}<strong>outils de jardinage</strong> ainsi que la <strong>création de jardins</strong> personnalisés.
              </p>
              <p>
                Pour nos clients situés à <strong>Moroni et sa périphérie</strong>, nous proposons un <strong>devis gratuit</strong>, et pour aller encore plus loin, une <strong>réduction de 10%</strong> est offerte sur présentation de ce flyer. 
                Au-delà de cette zone, un forfait adapté est appliqué pour répondre à toutes les demandes dans les meilleures conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Image droite */}
        <div className='lg:w-1/2 w-3/3 relative order-1 lg:order-2'>
          <div className='relative'>
            <div className='relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden flex items-center justify-center'>
            <Image
          src="/icons/tree.png"
          className="h-auto w-7/8 rounded-xl mx-auto lg:mx-0"
          alt="logo greencomores"
          width={500}
          height={500}
        />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
