import React from 'react';
import { Database, Filter, Layers, Zap, ShieldCheck, Heart, Package, Truck } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: 'Raw Water Source',
      description: 'Sourced from natural underground aquifers under strict quality controls.',
      phase: 'Step 1',
    },
    {
      icon: <Filter className="w-6 h-6 text-white" />,
      title: 'Multi-Stage Filtration',
      description: 'Sand, carbon, and micron filters remove physical impurities, chlorine, and odor.',
      phase: 'Step 2',
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: 'Reverse Osmosis (RO)',
      description: 'Advanced membrane filtration removes dissolved salts, heavy metals, and chemical molecules.',
      phase: 'Step 3',
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: 'UV Treatment',
      description: 'Exposing water to intense Ultraviolet rays eliminates bacteria, viruses, and pathogens.',
      phase: 'Step 4',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: 'Ozonization',
      description: 'Strong ozone oxygen infusion sterilizes the water and extends shelf-life safely.',
      phase: 'Step 5',
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: 'Mineral Balancing',
      description: 'Infusing calcium, magnesium, and potassium to achieve natural alkaline pH 8+.',
      phase: 'Step 6',
    },
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: 'Hygienic Packaging',
      description: 'Filled in automated, hands-free capping systems using food-grade PET bottles/jars.',
      phase: 'Step 7',
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: 'Strict Quality & Delivery',
      description: 'Dispatched through a hygienic supply chain to deliver fresh mineral water to you.',
      phase: 'Step 8',
    },
  ];

  return (
    <section id="purification" className="py-24 bg-brand-blue-navy text-white relative overflow-hidden wave-bg-reverse">
      {/* Background visual water droplet overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="absolute w-full h-full text-brand-cyan" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-brand-cyan">Our Science</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white">
            8-Stage Purification Process
          </p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto rounded-full"></div>
          <p className="text-brand-blue-light/70 font-light max-w-xl mx-auto text-sm sm:text-base">
            Detailed view of our advanced technological processes engineered to convert raw source water into healthy, sweet, alkaline mineral water.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative">
          {/* Timeline Center Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan/20 via-brand-cyan to-brand-cyan/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center lg:items-start text-center md:text-left ${
                    isEven ? 'lg:flex-row-reverse lg:text-right lg:col-start-1' : 'lg:col-start-2'
                  }`}
                >
                  {/* Step Bubble for Desktop (Absolute position overlaying the center line) */}
                  <div className="hidden lg:flex absolute left-1/2 top-4 transform -translate-x-1/2 w-10 h-10 rounded-full bg-brand-cyan border-4 border-brand-blue-navy z-30 items-center justify-center text-brand-blue-navy font-bold text-xs shadow-lg shadow-brand-cyan/40">
                    {idx + 1}
                  </div>

                  {/* Step Card */}
                  <div className={`w-full md:flex-1 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-brand-cyan/30 ${
                    isEven ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    {/* Header: Icon & Step label */}
                    <div className={`flex flex-col md:flex-row items-center gap-4 mb-4 ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-blue-medium to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-cyan/20">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider block">
                          {step.phase}
                        </span>
                        <h4 className="text-lg font-bold text-white mt-0.5">{step.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-brand-blue-light/80 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
