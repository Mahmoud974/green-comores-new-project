import React from 'react'
import Image from 'next/image'

export default function Service() {
  const services = [
    {
      icon: (
        <Image
          src="/icons/icons-services/tree.png"
          alt="Élagage"
          width={90}
          height={90}
        />
      ),
      title: "Élagage & taille douce",
      description: "Taille raisonnée pour sécuriser vos abords, éclaircir la couronne et préserver la vigueur de l’arbre."
    },
    {
      icon: (
        <Image
          src="/icons/icons-services/abbatage.png"
          alt="Abattage"
          width={90}
          height={90}
        />
      ),
      title: "Abattage difficile",
      description: "Démontage contrôlé avec rétention de charges pour les zones exigües ou à proximité d’ouvrages."
    },
    {
      icon: (
        <Image
          src="/icons/icons-services/security.png"
          alt="Sécurité"
          width={90}
          height={90}
        />
      ),
      title: "Mise en sécurité",
      description: "Suppression de branches mortes, sécurisation après tempête et levée de risques (toitures, lignes, voirie)."
    },
    {
      icon: (
        <Image
          src="/icons/icons-services/urgence.png"
          alt="Urgence"
          width={90}
          height={90}
        />
      ),
      title: "Urgence 24/7",
      description: "Intervention rapide en cas de chute d’arbre ou danger imminent (week-ends & jours fériés inclus)."
    }
  ]

  return (
    <section className='w-full bg-[#F5F5DC] py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <p className='text-green-700 font-bold text-sm tracking-widest uppercase mb-4'>NOS SERVICES ESSENTIELS</p>
          <h3 className='font-bold text-3xl lg:text-4xl text-gray-900 leading-tight'>
            L’essentiel pour vos arbres et votre sécurité
          </h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='text-center'>
              {/* Icône circulaire */}
              <div className='w-20 h-20 mx-auto mb-8    rounded-full flex items-center justify-center '>
                {service.icon}
              </div>

              {/* Titre */}
              <h4 className='font-bold text-xl text-gray-900 mb-3'>
                {service.title}
              </h4>

              {/* Description */}
              <p className='text-gray-700 leading-relaxed text-sm'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}