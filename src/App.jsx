import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyChooseUs from './sections/WhyChooseUs';
import Process from './sections/Process';
import Products from './sections/Products';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleEnquireClick = (productName = '') => {
    setSelectedProduct(productName);
    
    // Smooth scroll to contact form section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80; // navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-brand-blue-medium selection:text-white">
      {/* Navigation */}
      <Navbar onEnquireClick={() => handleEnquireClick()} />

      {/* Main content body */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onEnquireClick={() => handleEnquireClick()} />

        {/* 2. About Us */}
        <About />

        {/* 3. Why Choose Us */}
        <WhyChooseUs />

        {/* 4. Water Purification Process */}
        <Process />

        {/* 5. Products */}
        <Products onEnquireClick={handleEnquireClick} />

        {/* 6. Gallery */}
        

        {/* 7. Testimonials */}
       

        {/* 8. Contact Us */}
        <Contact productName={selectedProduct} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
}

export default App;
