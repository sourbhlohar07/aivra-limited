import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-navy text-white pt-16 pb-8 border-t border-white/5 relative wave-bg-reverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Logo & About */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-brand-cyan"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
              </svg>
              <span className="text-2xl font-bold tracking-wider text-white">
                AİVRA
              </span>
            </a>
            <p className="text-sm text-brand-blue-light/75 leading-relaxed font-light">
              Premium packaged mineral water balanced with natural alkaline
              mineral content (pH 8+) processed under strict ISO hygiene
              compliance.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a5 5 0 0 0-5 5v1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.2 2.4h3.3L14.3 11l8.5 11.3H16.2L11 15.6l-5.9 6.7H1.8l7.6-8.7L1.2 2.4h6.8l4.7 6.2 5.5-6.2zm-1.2 17.6h1.8L7.1 4.2H5.1l11.9 15.8z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan flex items-center justify-center transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-blue-light/75 font-light">
              <li>
                <a
                  href="#home"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-cyan transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Product Range
                </a>
              </li>
              <li>
                <a
                  href="#purification"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Purification Process
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-brand-blue-light/75 font-light">
              <li className="flex items-start space-x-2.5">
                <span className="font-semibold text-white">Toll-Free:</span>
                <a
                  href="tel:18002338731"
                  className="hover:text-brand-cyan transition-colors"
                >
                  1800 233 8731
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="font-semibold text-white">Email:</span>
                <a
                  href="mailto:aivralimited@gmail.com"
                  className="hover:text-brand-cyan transition-colors"
                >
                  info@aivralimited.com
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="font-semibold text-white">Office:</span>
                <span>
                  Plot No-4D, Balkrishna Ind. Soc., Bhatar Surat, Gujarat-395007
                </span>
              </li>
            </ul>
          </div>

          {/* Certifications Badge */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Standards
            </h4>
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  FSSAI Certified
                </span>
              </div>
              <p className="text-xs text-brand-blue-light/60 leading-relaxed font-light">
                LIC NO: 10726031000241
              </p>
              <p className="text-[11px] text-brand-blue-light/50 leading-relaxed font-light mt-1">
                Processed, packaged, and labeled under stringent food safety
                regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-blue-light/60 font-light space-y-4 md:space-y-0">
          <div>&copy; {currentYear} Aivra Limited. All rights reserved.</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-brand-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-cyan transition-colors">
              Terms of Service
            </a>
            <button
              onClick={handleScrollToTop}
              className="bg-white/5 hover:bg-brand-cyan/20 text-white w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
