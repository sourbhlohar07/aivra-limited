import React, { useState } from 'react';
import premiumBottle from '../assets/premium-bottle.jpg';
import productSizes from '../assets/product-sizes.jpg';
import labelDetails from '../assets/label-details.jpg';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'products',
      imgSrc: premiumBottle,
      title: 'Premium Spring Bottle (750ml)',
      description: 'Elegant design crafted for premium branding and high-end tables.',
    },
    {
      id: 2,
      category: 'products',
      imgSrc: productSizes,
      title: 'Aivra Alkaline Product Range',
      description: 'Bottles and jars of multiple sizes (200ml to 20 Litre) designed for diverse consumer demands.',
    },
    {
      id: 3,
      category: 'process',
      imgSrc: labelDetails,
      title: 'FSSAI License & Certification',
      description: 'Strictly compliant operations and labeling, matching government guidelines.',
    },
    {
      id: 4,
      category: 'plant',
      imgSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      title: 'State-of-the-art RO Plant',
      description: 'Advanced stainless steel RO membranes ensuring multi-barrier water filtration.',
    },
    {
      id: 5,
      category: 'process',
      imgSrc: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
      title: 'Automated Bottling Line',
      description: 'Hands-free automated filling, capping and batch coding process.',
    },
    {
      id: 6,
      category: 'logistics',
      imgSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      title: 'Prompt Delivery Supply',
      description: 'Hygiene fleet loading fresh batches for domestic and corporate supply.',
    },
  ];

  const filteredItems =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const tabs = [
    { id: 'all', name: 'All Photos' },
    { id: 'plant', name: 'Our Plant' },
    { id: 'products', name: 'Products' },
    { id: 'process', name: 'Process' },
    { id: 'logistics', name: 'Delivery' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-brand-blue-medium">Visual Tour</h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-blue-dark">
            Our Gallery
          </p>
          <div className="w-16 h-1 bg-brand-blue-medium mx-auto rounded-full"></div>
          <p className="text-slate-500 font-light max-w-xl mx-auto text-sm sm:text-base">
            Take a look inside our modern plant, check our packaging procedures, and inspect the design elegance of our bottle range.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto border-b border-slate-100 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-brand-blue-medium text-white shadow-lg shadow-brand-blue-medium/20 scale-102'
                  : 'bg-slate-50 text-slate-600 border border-slate-200/50 hover:bg-slate-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden h-64 bg-slate-100 border-b border-slate-50 flex items-center justify-center">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Description Card */}
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-brand-blue-dark group-hover:text-brand-blue-medium transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {item.description}
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

export default Gallery;
