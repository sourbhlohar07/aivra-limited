import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Rohan Sharma',
      role: 'Procurement Manager, Radisson Surat',
      quote: 'Aivra has been our mineral water partner for over a year now. The packaging is absolutely sleek, the taste is crisp and sweet, and their delivery schedules are highly reliable. Highly recommended for corporate events and hospitality.',
      rating: 5,
    },
    {
      name: 'Dr. Meera Patel',
      role: 'Founder, Healing Hands Clinic',
      quote: 'We use Aivra 20L jars for our waiting rooms and patient cabins. Knowing that it has a balanced pH 8+ and goes through multi-stage RO, UV, and ozonization processes gives me and my patients peace of mind about drinking quality.',
      rating: 5,
    },
    {
      name: 'Vikram Desai',
      role: 'Residential Client, Bhatar Road',
      quote: 'Excellent service! The delivery team brings 20L water jars straight to my apartment on time. The water tastes extremely pure, and the bottles are always neat, clean, and perfectly sealed.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-brand-blue-light/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-brand-blue-medium">Feedback</h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-blue-dark">
            What Our Customers Say
          </p>
          <div className="w-16 h-1 bg-brand-blue-medium mx-auto rounded-full"></div>
          <p className="text-slate-500 font-light max-w-xl mx-auto text-sm sm:text-base">
            We value our customers\' health and satisfaction. Read reviews from verified business partners and families.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100/80 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Mark overlay */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-brand-blue-light/30 transition-colors pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-light italic">
                  "{review.quote}"
                </p>
              </div>

              {/* User Bio */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center font-bold text-brand-blue-dark">
                  {review.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-brand-blue-navy">{review.name}</h5>
                  <p className="text-xs text-slate-400 font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
