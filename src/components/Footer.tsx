
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-navy text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-navy via-teal to-amber rounded-lg shadow-subtle flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <h2 className="text-xl font-bold">DRISHTI</h2>
            </div>
            <p className="text-white/70 mb-6">
              Illuminating Postal Data for Strategic Excellence. A comprehensive analytics platform developed for the Department of Posts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-all-200 hover-scale">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-all-200 hover-scale">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-all-200 hover-scale">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-all-200 hover-scale">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-all-200">Home</a>
              </li>
              <li>
                <a href="#problem" className="text-white/70 hover:text-teal transition-all-200">Problem Statement</a>
              </li>
              <li>
                <a href="#solution" className="text-white/70 hover:text-teal transition-all-200">Solution</a>
              </li>
              <li>
                <a href="#architecture" className="text-white/70 hover:text-teal transition-all-200">Architecture</a>
              </li>
              <li>
                <a href="#benefits" className="text-white/70 hover:text-teal transition-all-200">Benefits</a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-teal transition-all-200">Team</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-teal transition-all-200">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-all-200">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-all-200">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-all-200">User Guides</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-all-200">Video Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-all-200">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-all-200">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal mt-1">
                  <path d="M21 5.00001L12 14L3 5.00001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 5H21V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 19L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 13L21 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/70">info@drishti.tech</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal mt-1">
                  <path d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6422 21.8228C20.3799 21.912 20.1022 21.9452 19.827 21.9201C16.7512 21.5857 13.7859 20.5342 11.19 18.8501C8.77382 17.3148 6.7226 15.2636 5.18731 12.8475C3.49988 10.2412 2.44818 7.2732 2.11993 4.19482C2.09494 3.92056 2.12793 3.64366 2.21686 3.38195C2.3058 3.12024 2.44849 2.87839 2.63598 2.6731C2.82347 2.46781 3.05182 2.30387 3.30706 2.19177C3.56229 2.07966 3.83813 2.02228 4.11731 2.02314H7.11731C7.60551 2.01825 8.07717 2.18755 8.44558 2.50042C8.81398 2.81328 9.05466 3.24561 9.11732 3.72014C9.23425 4.68015 9.47151 5.62282 9.82733 6.52814C9.96825 6.88511 10.009 7.27492 9.94323 7.65151C9.87753 8.02811 9.70881 8.37612 9.45732 8.65482L8.09732 10.0148C9.51254 12.4993 11.5177 14.5045 14.0022 15.9198L15.3622 14.5598C15.6409 14.3083 15.9889 14.1396 16.3655 14.0739C16.7421 14.0081 17.1319 14.0488 17.4888 14.1898C18.3942 14.5456 19.3368 14.7829 20.2969 14.8998C20.7793 14.9631 21.2183 15.2076 21.5338 15.5812C21.8493 15.9547 22.0178 16.4324 22.0099 16.9248" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/70">+91 889 977 6655</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal mt-1">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/70">
                  Smart India Hackathon 2024<br />
                  New Delhi, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DRISHTI. All rights reserved. Created for Smart India Hackathon 2024.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-teal transition-all-200">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-teal transition-all-200">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-teal hover:bg-teal-light text-navy p-3 rounded-full shadow-elevated z-50 transition-all-200 hover-scale"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
