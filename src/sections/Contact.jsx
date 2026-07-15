import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const Contact = ({ productName }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: productName
      ? `Hello, I would like to enquire about ${productName}.`
      : "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update message if productName changes
  React.useEffect(() => {
    if (productName) {
      setFormData((prev) => ({
        ...prev,
        message: `Hello, I would like to enquire about ${productName}.`,
      }));
    }
  }, [productName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-brand-blue-medium">
            Connect
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-blue-dark">
            Get In Touch
          </p>
          <div className="w-16 h-1 bg-brand-blue-medium mx-auto rounded-full"></div>
          <p className="text-slate-500 font-light max-w-xl mx-auto text-sm sm:text-base">
            Have questions about pricing, bulk delivery contracts, or
            distribution franchises? Message us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-brand-blue-dark">
              Contact Information
            </h3>
            <p className="text-slate-500 font-light leading-relaxed">
              Reach out to our sales team or visit our automated manufacturing
              plant in Surat. We are ready to assist you.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-light/50 flex items-center justify-center text-brand-blue-medium flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue-navy">
                    Factory & Office Address
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Plot No-4D, Balkrishna Industrial Society, <br />
                    Bhatar Surat, Gujarat-395007
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-light/50 flex items-center justify-center text-brand-blue-medium flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue-navy">
                    Call Support
                  </h4>
                  <div className="text-sm text-slate-500 mt-1 space-y-1">
                    <p className="flex items-center">
                      <span className="font-semibold text-slate-700 mr-2">
                        Toll-Free:
                      </span>
                      <a
                        href="tel:18002338731"
                        className="hover:text-brand-blue-medium transition-colors"
                      >
                        1800 233 8731
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="font-semibold text-slate-700 mr-2">
                        Mobile:
                      </span>
                      <a
                        href="tel:+919879333433"
                        className="hover:text-brand-blue-medium transition-colors"
                      >
                        +91 98793 33433
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-light/50 flex items-center justify-center text-brand-blue-medium flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue-navy">
                    Email Support
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    <a
                      href="mailto:info@aivralimited.com"
                      className="hover:text-brand-blue-medium transition-colors"
                    >
                     info@aivralimited.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-light/50 flex items-center justify-center text-brand-blue-medium flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue-navy">
                    Business Hours
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Monday – Saturday: 9:00 AM – 6:30 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="border border-brand-blue-light/50 rounded-3xl overflow-hidden shadow-md h-60 relative bg-slate-100">
              {/* Google Map Iframe for Bhatar, Surat */}
              <iframe
                title="Aivra Limited Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6729221235315!2d72.81223407604107!3d21.165415783072216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dec85390977%3A0xe10433230a13ea1b!2sBalkrishna%20Industrial%20Society%20%2C%20Bhatar%2C%20Surat!5e0!3m2!1sen!2sin!4v1716382029381!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/50 border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-brand-blue-dark mb-6">
                Enquiry Form
              </h3>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex items-start space-x-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base">
                      Form Submitted Successfully!
                    </h4>
                    <p className="text-sm mt-1 leading-relaxed">
                      Thank you for contacting Aivra. Our customer relations
                      manager will call you back shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-brand-blue-navy"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-medium focus:border-transparent bg-white text-slate-800 placeholder-slate-400 transition-all"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-bold text-brand-blue-navy"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-medium focus:border-transparent bg-white text-slate-800 placeholder-slate-400 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold text-brand-blue-navy"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-medium focus:border-transparent bg-white text-slate-800 placeholder-slate-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold text-brand-blue-navy"
                    >
                      Message / Requirement
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify your bottle size, frequency, and address details..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue-medium focus:border-transparent bg-white text-slate-800 placeholder-slate-400 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-blue-medium hover:bg-brand-blue-dark text-white py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-brand-blue-medium/20 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
