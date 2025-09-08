"use client"
import {  CircleChevronRight } from 'lucide-react'
import React from 'react'
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: (
        <Image
          src="/icons/gate.png"
          className="h-auto w-6/8 "
          alt="gate"
          width={100}
          height={100}
        />
      ),
      title: "Hydropower Plants Services",
      description: "A PV module is an assembly of photo-voltaic cells mounted in a framework for installation."
    },
    {
      icon: (
        <Image
          src="/icons/fork.png"
          className="h-auto w-8/8 "
          alt="gate"
          width={100}
          height={100}
        />
      ),
      title: "Wind Turbines Services",
      description: "The smallest turbines are used for applications such as the battery charging for auxiliary"
    },
    {
      icon: (
        <Image
        src="/icons/spray.png"
        className="h-auto w-4/8 "
        alt="gate"
        width={100}
        height={100}
      />
      ),
      title: "Hydropower Plants Services",
      description: "Hydroelectric power plants can include a reservoir to exploit the energy of falling  "
    },
    {
      icon: (
        <Image
        src="/icons/tron.png"
        className="h-auto w-8/8 "
        alt="gate"
        width={100}
        height={100}
      />
      ),
      title: "Fossil Resources Services",
      description: "Green chemistry is attracting interest as it provides clean and green technologies."
    }
  ]
  
  const getOrderClasses = (index: number) => {
    // Swap 3rd and 4th on mobile only
    if (index === 2) return 'order-4 md:order-3 lg:order-3'
    if (index === 3) return 'order-3 md:order-4 lg:order-4'
    if (index === 0) return 'order-1 md:order-1 lg:order-1'
    if (index === 1) return 'order-2 md:order-2 lg:order-2'
    return ''
  }

  return (
    <section className='  max-w-6xl mx-auto z-10 xl:-mt-32 relative font-["Montserrat"] px-4'>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:place-items-stretch shadow-xl bg-white'>
        {services.map((service, index) => (
          <div key={index} className={`cursor-pointer hover:bg-slate-50 hover:text-black bg-white p-6 hover:shadow-xl transition-shadow duration-300 rounded-md w-full text-center md:text-left ${getOrderClasses(index)}`}>
            <div className='w-16 h-16 mx-auto md:mx-0 mb-6 rounded-full flex items-center justify-center text-green-500'>
              {service.icon}
            </div>
            <h3 className='font-bold text-xl mb-4'>
              {service.title}
            </h3>
            <p className='leading-relaxed text-sm mb-4'>
              {service.description}
            </p>
            <button className='w-full font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center md:justify-start gap-2'>
              Read More
              <CircleChevronRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
