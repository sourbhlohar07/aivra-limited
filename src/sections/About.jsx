import React from 'react';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';
import labelDetails from '../assets/premium-bottle.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-blue-light/20 filter blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-brand-blue-medium">About Aivra</h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-blue-dark">
            Pure Spring & Alkaline Mineral Water Engineered for Wellness
          </p>
          <div className="w-16 h-1 bg-brand-blue-medium mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image/Label display */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-brand-blue-light/50 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative border border-brand-blue-light/30 rounded-3xl overflow-hidden shadow-xl bg-white p-4">
              <img
                src={labelDetails}
                alt="Aivra Manufacturing Details and Standards"
                className="rounded-2xl w-full h-auto object-cover border border-slate-100 scale-100 group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute top-6 right-6 bg-brand-blue-dark text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                FSSAI Certified
              </div>
            </div>
            
            {/* Factory/Quality Badge */}
            <div className="absolute -bottom-8 -right-4 bg-brand-blue-medium text-white p-5 rounded-2xl shadow-xl flex items-center space-x-3 max-w-[240px]">
              <ShieldCheck className="w-10 h-10 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-sm">RO+UV+O3</h4>
                <p className="text-xs text-brand-blue-light/80 font-medium">8-Stage Purified Water</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Mission/Vision */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-blue-dark">Our Legacy of Purity</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Aivra Limited is a leading manufacturer of premium packaged drinking water, serving retail customers and industrial sectors with hygiene, reliability, and quality. Located in Surat, Gujarat, our ultra-modern plant utilizes advanced automated systems to process, filter, and balance essential minerals, ensuring that every drop matches international standards of safety.
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                Our source water is treated through an extensive process incorporating reverse osmosis, ultraviolet purification, and ozonization. We then infuse the water with balanced essential minerals like Calcium, Magnesium, and Potassium, producing rich alkaline mineral water (pH 8+) that boosts hydration, supports digestion, and energizes your body.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-brand-blue-light/30 p-6 rounded-2xl border border-brand-blue-light/40 space-y-3">
                <div className="inline-flex p-3 bg-brand-blue-dark text-white rounded-xl">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-brand-blue-dark">Our Mission</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To provide accessible, premium quality, and hygienically packaged alkaline mineral water to keep our consumers healthy, hydrated, and active.
                </p>
              </div>
              
              <div className="bg-brand-blue-light/30 p-6 rounded-2xl border border-brand-blue-light/40 space-y-3">
                <div className="inline-flex p-3 bg-brand-blue-medium text-white rounded-xl">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-brand-blue-dark">Our Vision</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To become a trusted global brand in drinking water systems, recognized for our state-of-the-art purification technology, eco-friendly standards, and customer trust.
                </p>
              </div>
            </div>

            {/* Plant Quality Standards */}
            <div className="flex items-center space-x-6 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-brand-blue-medium" />
                <span className="text-sm font-semibold text-brand-blue-navy">ISO Compliant Plant</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue-medium" />
                <span className="text-sm font-semibold text-brand-blue-navy">100% Automated Bottling</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
