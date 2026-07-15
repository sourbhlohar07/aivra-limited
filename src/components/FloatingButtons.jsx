import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  const whatsappUrl = 'https://wa.me/919876543210?text=Hello%20Aivra,%20I%20would%20like%20to%20enquire%20about%20your%20mineral%20water%20products.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 pointer-events-none">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 group relative"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 group-hover:rotate-6 transition-transform" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Call Now Button */}
      <a
        href="tel:18002338731"
        className="pointer-events-auto w-14 h-14 bg-brand-blue-medium hover:bg-brand-blue-dark text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-brand-blue-medium/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 group relative"
        title="Call Support Toll-Free"
      >
        <Phone className="w-6 h-6 fill-white text-brand-blue-medium group-hover:rotate-6 transition-transform" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Call Toll-Free
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
