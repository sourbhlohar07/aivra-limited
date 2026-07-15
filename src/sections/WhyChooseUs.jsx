import React from 'react';
import { Droplet, Cpu, ShieldAlert, PackageCheck, Truck, ShieldCheck, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <Droplet className="w-8 h-8 text-brand-cyan" />,
      title: 'Pure & Safe Drinking Water',
      description: 'Naturally sourced water enriched with vital minerals like Calcium and Magnesium. Balanced at alkaline pH 8+ to support health.',
      bgColor: 'bg-brand-blue-navy/10',
    },
    {
      icon: <Cpu className="w-8 h-8 text-brand-blue-medium" />,
      title: 'Advanced RO + UV + O3 Process',
      description: 'Multi-barrier filtration system utilizing high-end Reverse Osmosis, Ultraviolet radiation, and Ozonization for absolute sterilization.',
      bgColor: 'bg-brand-blue-light/40',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      title: 'Rigorous Quality Tested',
      description: 'Every batch undergoes rigorous physicochemical, chemical, and microbiological checks in our state-of-the-art laboratory before bottling.',
      bgColor: 'bg-emerald-50/50',
    },
    {
      icon: <PackageCheck className="w-8 h-8 text-indigo-500" />,
      title: 'Hygienic Hands-free Packaging',
      description: 'Fully automated filling, capping, and labelling system. No human touch ensures zero contamination and absolute hygienic safety.',
      bgColor: 'bg-indigo-50/50',
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-blue-medium" />,
      title: 'Prompt & Timely Delivery',
      description: 'Dedicated logistics team and delivery fleet ensuring prompt deliveries of jars and cases to offices, events, and residences.',
      bgColor: 'bg-brand-blue-light/40',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
      title: 'Trusted by Thousands',
      description: 'Serving businesses, homes, hotels, and hospitals across Surat and surrounding regions. Trusted for pure water and reliable service.',
      bgColor: 'bg-rose-50/50',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-brand-blue-medium">Why Aivra</h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-blue-dark">
            Setting the Benchmark for Pure Hydration
          </p>
          <div className="w-16 h-1 bg-brand-blue-medium mx-auto rounded-full"></div>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            We are committed to delivering water of the highest standards of safety, quality, and hygiene.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 hover:border-brand-blue-light/50 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="space-y-6">
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${card.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-blue-dark group-hover:text-brand-blue-medium transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
