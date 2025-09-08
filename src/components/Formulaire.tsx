"use client"
import React, { useState } from 'react'
import { Send } from 'lucide-react'

export default function Formulaire() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder d'envoi — à brancher avec votre backend ou service d'email
    console.log('Form submit:', formData)
    alert('Merci ! Votre demande a été envoyée.')
  }


  return (
    <div className="max-w-3xl mx-auto p-6    rounded-lg">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Demander un devis</h3>
        <p className="text-sm text-gray-600 mt-1">Remplissez le formulaire, nous vous répondrons rapidement.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Nom complet</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Ex: Jane Doe"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ex: jane@example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ex: +33 6 12 34 56 78"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Adresse</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Rue, Ville, Pays"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Sujet</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Objet de votre demande"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre projet ou vos besoins..."
            rows={5}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
          />
          <p className="mt-1 text-xs text-gray-500">Nous ne partagerons jamais vos informations.</p>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-md transition-colors"
          >
            <Send className="w-4 h-4" />
            Envoyer la demande
          </button>
        </div>
      </form>
    </div>
  )
}