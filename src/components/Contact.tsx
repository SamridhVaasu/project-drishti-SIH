
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-teal/10 text-teal-dark text-xs font-medium py-1 px-3 rounded-full">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">
            Ready to Transform Your Data?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Contact us to learn more about how DRISHTI can revolutionize your postal division's data analytics capabilities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl shadow-subtle overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all-200"
                    placeholder="Enter your organization"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all-200"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-navy hover:bg-navy-light text-white font-medium px-6 py-3 rounded-lg transition-all-200 shadow-subtle inline-flex items-center justify-center hover-scale w-full md:w-auto"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl shadow-elevated overflow-hidden h-full">
              <div className="p-8 md:p-12 text-white h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/90 mb-1">Email</h4>
                      <a href="mailto:info@drishti.tech" className="text-white/70 hover:text-teal transition-all-200">
                        info@drishti.tech
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/90 mb-1">Phone</h4>
                      <a href="tel:+918899776655" className="text-white/70 hover:text-teal transition-all-200">
                        +91 889 977 6655
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white/90 mb-1">Location</h4>
                      <p className="text-white/70">
                        Smart India Hackathon 2024<br />
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-white/90 mb-4">Follow the Project</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg transition-all-200 hover-scale">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg transition-all-200 hover-scale">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg transition-all-200 hover-scale">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-teal/10 rounded-3xl p-8 md:p-12 shadow-subtle">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8">
              Transform your postal division with DRISHTI's comprehensive data analytics platform. Request a demo today to see how we can help you optimize operations and drive strategic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-navy hover:bg-navy-light text-white font-medium px-6 py-3 rounded-lg transition-all-200 shadow-subtle inline-flex items-center justify-center hover-scale"
              >
                Request a Demo
              </a>
              <a
                href="#"
                className="bg-white hover:bg-gray-50 text-navy font-medium px-6 py-3 rounded-lg transition-all-200 shadow-subtle inline-flex items-center justify-center hover-scale"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
