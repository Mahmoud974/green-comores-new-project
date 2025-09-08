import { MapPin, Phone, Mail, Clock2, Facebook, Instagram } from 'lucide-react'
import React from 'react'

export default function GreenBar() {
  return (
    <div className="bg-green py-1 text-white text-xs sm:text-sm font-['Montserrat'] hidden sm:block">
    <div className='container mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0'>
    <ul className='flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 sm:gap-x-5 text-xl'>
        <li className='flex items-center'>
        <MapPin  className='text-fluo h-4 w-4 sm:h-5 sm:w-5'/>
          <p className='ml-1'>Mitsamiouli, Comores</p>
        </li>
        <li className='flex items-center'>
          <Phone className='text-fluo h-4 w-4 sm:h-5 sm:w-5'/>
          <p className='ml-1'>08.90.12.43.17</p>
        </li>
        <li className='flex items-center'>
          <Mail className='text-fluo h-4 w-4 sm:h-5 sm:w-5'/>
          <p className='ml-1'>support@gmail.com</p>
        </li>
        <li className='flex items-center'>
        <Clock2  className='text-fluo h-4 w-4 sm:h-5 sm:w-5'/>
          <p className='ml-1'>Lundi - Vendredi  7h00 - 18h00</p>
        </li>

      </ul>
      <ul className='flex gap-4 sm:gap-6 justify-center '>
      <li className='flex items-center'>
        <Facebook className='text-fluo h-6 w-6  ' />
         
        </li>
        <li className='flex items-center'>
        <Instagram  className='text-fluo h-6 w-6'/>
         
        </li>
        
      </ul>
    </div>

    </div>
  )
}
