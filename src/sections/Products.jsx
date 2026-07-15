import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import productSizesImg from '../assets/product-sizes.jpg';

const Products = ({ onEnquireClick }) => {
  const productsList = [
    {
      id: '200ml',
      name: '200ml / 250ml Pocket Pack',
      volume: '200ml / 250ml',
      description: 'Compact and easy to carry. Perfect for corporate events, board meetings, and party hostings.',
      useCase: 'Best for Events & Conferences',
      color: 'bg-sky-500',
    },
    {
      id: '500ml',
      name: '500ml Active Pack',
      volume: '500ml',
      description: 'Ideal companion for your workout sessions, travel, running, and daily on-the-go hydration.',
      useCase: 'Best for Travel & Sports',
      color: 'bg-sky-600',
    },
    {
      id: '1l',
      name: '1 Litre Standard Bottle',
      volume: '1 Litre',
      description: 'The classic daily hydration buddy. Kept by your side at work, gym, or during standard travels.',
      useCase: 'Best for Everyday Hydration',
      color: 'bg-brand-blue-medium',
    },
    {
      id: '2l',
      name: '2 Litre Family Pack',
      volume: '2 Litre',
      description: 'Extra volume for long journeys, family picnics, weekend activities, and shared hydration.',
      useCase: 'Best for Family & Picnics',
      color: 'bg-brand-blue-dark',
    },
    {
      id: '5l-10l',
      name: '5L & 10L Pantry Jars',
      volume: '5 Litre / 10 Litre',
      description: 'Mid-sized canisters with handles. Perfectly suited for home kitchen counters or small office cabins.',
      useCase: 'Best for Kitchens & Pantries',
      color: 'bg-brand-blue-navy',
    },
    {
      id: '20l',
      name: '20 Litre Water Jar',
      volume: '20 Litre',
      description: 'Heavy duty, food-grade jar designed for water dispensers in offices, clinics, schools, and homes.',
      useCase: 'Best for Offices & Homes',
      color: 'bg-brand-blue-navy',
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-brand-blue-light/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-brand-blue-medium">Our Range</h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-blue-dark">
            Tailored Hydration for Every Need
          </p>
          <div className="w-16 h-1 bg-brand-blue-medium mx-auto rounded-full"></div>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            From handy pocket bottles to heavy-duty dispenser jars, discover our complete range of pure alkaline mineral water sizes.
          </p>
        </div>

        {/* Product Sizes Banner Image (Client Image) */}
        <div className="mb-20 bg-white border border-brand-blue-light/50 rounded-3xl p-6 md:p-8 shadow-xl max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-medium bg-brand-blue-light/50 px-3 py-1 rounded-full">
              Full Catalog Overview
            </span>
            <h3 className="text-xl font-bold text-brand-blue-dark mt-2">Packaged Bottles & Jars</h3>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-inner">
            <img
              src={productSizesImg}
              alt="Aivra Water Bottle sizes - 200ml to 20L"
              className="w-full h-auto object-cover scale-100 hover:scale-101 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-center mt-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div>20 Litre</div>
            <div>10 Litre</div>
            <div>5 Litre</div>
            <div>2 Litre</div>
            <div>1 Litre</div>
            <div>500 ml</div>
            <div>200 ml / 250 ml</div>
          </div>
        </div>

        {/* Individual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsList.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Visual Icon Header */}
                <div className="flex justify-between items-start">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${product.color} shadow-lg shadow-sky-500/20`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {product.useCase}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-2xl font-extrabold text-brand-blue-medium block">{product.volume}</span>
                  <h4 className="text-lg font-bold text-brand-blue-navy group-hover:text-brand-blue-medium transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-blue-dark">Eco-Friendly Food Grade PET</span>
                <button
                  onClick={() => onEnquireClick(product.name)}
                  className="flex items-center space-x-1.5 text-sm font-bold text-brand-blue-medium hover:text-brand-blue-dark transition-colors group-hover:translate-x-1 duration-300"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
