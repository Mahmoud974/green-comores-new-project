"use client"
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full font-['Montserrat']">
      <div className="flex flex-col md:flex-row">
 
        <div className="relative w-full md:w-3/5 h-[240px] md:h-[520px]">
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
        
  
        <div className="w-full md:w-3/5 bg-white h-[360px] md:h-[520px] flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Demande de devis</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Fullname</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Ex Residin Arsyad Nasution"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-green-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex cnmyidaed@gmail.com"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-green-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ex 0891888999"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-green-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Shipping Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Ex Patriot Street Number 06, Nga, Sleman"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-green-500 outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}