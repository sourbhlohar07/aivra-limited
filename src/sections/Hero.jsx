import React from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import premiumBottle from '../assets/premium-bottle.jpg';

const Hero = ({ onEnquireClick }) => {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue-navy via-brand-blue-dark to-brand-blue-medium overflow-hidden wave-bg pt-20"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-cyan filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-brand-cyan-light text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse"></span>
              <span>100% Pure Alkaline Mineral Water</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              AIVRA <br />
              <span className="text-gradient-cyan">Pure Water, Healthy Life</span>
            </h1>
            
            <p className="text-base sm:text-lg text-brand-blue-light/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              We provide premium quality mineral water sourced, purified, and packed under strict quality controls to ensure safe drinking water for every household and business.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onEnquireClick}
                className="w-full sm:w-auto bg-brand-cyan hover:bg-brand-cyan-dark text-brand-blue-navy px-8 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-brand-cyan/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Enquire Now
              </button>
              <a
                href="tel:18002338731"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Call 1800 233 8731</span>
              </a>
            </div>
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">pH 8+</p>
                <p className="text-xs text-brand-blue-light/75 uppercase tracking-wider">Natural Alkaline</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-brand-blue-light/75 uppercase tracking-wider">Pure & Safe</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">RO+UV</p>
                <p className="text-xs text-brand-blue-light/75 uppercase tracking-wider">Ozonized Process</p>
              </div>
            </div>
          </div>

          {/* Premium Bottle Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group max-w-sm sm:max-w-md lg:max-w-full">
              {/* Decorative radial background for the image */}
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-full filter blur-3xl scale-95 group-hover:scale-105 transition-all duration-700"></div>
              
              {/* Product Image Frame */}
              {/* <div className="relative border-4 border-white/20 rounded-3xl overflow-hidden shadow-2xl bg-brand-blue-navy/50 p-2 transform group-hover:rotate-1 transition-all duration-500">
                <img
                  src={premiumBottle}
                  alt="Aivra Premium Spring Water Bottle"
                  className="rounded-2xl max-h-[500px] object-cover w-full scale-100 group-hover:scale-102 transition-all duration-700"
                />
              </div> */}
              
              {/* Small Overlay Badge */}
              {/* <div className="absolute -bottom-6 -left-6 bg-white text-brand-blue-dark px-5 py-3 rounded-2xl shadow-xl border border-brand-blue-light flex items-center space-x-2">
                <div className="bg-brand-blue-light p-2 rounded-lg text-brand-blue-medium">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Certified Quality</h4>
                  <p className="text-xs text-slate-500 font-medium">FSSAI Approved</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity" onClick={handleScrollToAbout}>
          <span className="text-xs text-brand-blue-light uppercase tracking-widest mb-2 font-medium">Discover Pureness</span>
          <ChevronDown className="w-5 h-5 text-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
