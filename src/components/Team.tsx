
import React from 'react';
import { Github, Linkedin, Code, Cpu, Database, Layout } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-navy/5 text-navy text-xs font-medium py-1 px-3 rounded-full">
              The Creators
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">
            Meet Team DRISHTI
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A skilled group of developers, designers, and data scientists dedicated to transforming postal data analytics through innovative solutions.
          </p>
        </div>
        
        <div className="mb-20">
          <div className="bg-navy rounded-3xl overflow-hidden shadow-elevated relative">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="px-6 py-12 md:px-12 md:py-16 relative z-10">
              <div className="text-center mb-12">
                <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full">
                  Team ID 11128
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2">
                  Smart India Hackathon 2024
                </h3>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Our team combines diverse expertise to create an innovative solution for the Department of Posts challenge.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                  <div className="w-16 h-16 bg-amber/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-amber/30">
                    <Code size={24} className="text-amber" />
                  </div>
                  <h4 className="font-medium text-white text-sm">Frontend Developer</h4>
                  <p className="text-white/60 text-xs mt-1">UI/UX Specialist</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                  <div className="w-16 h-16 bg-teal/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-teal/30">
                    <Database size={24} className="text-teal" />
                  </div>
                  <h4 className="font-medium text-white text-sm">Backend Developer</h4>
                  <p className="text-white/60 text-xs mt-1">Data Architecture</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                  <div className="w-16 h-16 bg-amber/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-amber/30">
                    <Cpu size={24} className="text-amber" />
                  </div>
                  <h4 className="font-medium text-white text-sm">Data Scientist</h4>
                  <p className="text-white/60 text-xs mt-1">ML Engineer</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                  <div className="w-16 h-16 bg-teal/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-teal/30">
                    <Layout size={24} className="text-teal" />
                  </div>
                  <h4 className="font-medium text-white text-sm">UI/UX Designer</h4>
                  <p className="text-white/60 text-xs mt-1">Interaction Specialist</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                  <div className="w-16 h-16 bg-amber/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-amber/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber">
                      <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.5 15V9L16 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 7L12 2L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-white text-sm">Solution Architect</h4>
                  <p className="text-white/60 text-xs mt-1">System Design</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                  <div className="w-16 h-16 bg-teal/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-teal/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal">
                      <path d="M4 20H8L18.5 9.5C19.0304 8.96956 19.3284 8.2574 19.3284 7.5142C19.3284 6.77099 19.0304 6.05883 18.5 5.52839C17.9696 4.99794 17.2574 4.7 16.5142 4.7C15.771 4.7 15.0588 4.99794 14.5284 5.52839L4 16V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13.5 6.5L17.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-white text-sm">Project Manager</h4>
                  <p className="text-white/60 text-xs mt-1">Domain Expert</p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <div className="inline-flex space-x-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all-200 hover-scale">
                    <Github size={20} />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all-200 hover-scale">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-subtle">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
                Our Approach
              </h3>
              <p className="text-gray-600">
                How we tackled the Department of Posts challenge with innovation and expertise
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-navy/5 rounded-xl h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy font-bold text-lg">01</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy mb-2">Problem Understanding</h4>
                  <p className="text-gray-600">
                    We began by comprehensively analyzing the Department of Posts' data analytics needs, understanding the challenges faced by divisional offices, and identifying key pain points in the current system.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-navy/5 rounded-xl h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy font-bold text-lg">02</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy mb-2">Solution Design</h4>
                  <p className="text-gray-600">
                    We architected DRISHTI to be a comprehensive, scalable platform with a focus on real-time analytics, user-friendly interfaces, and intelligent insights tailored to postal operations.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-navy/5 rounded-xl h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy font-bold text-lg">03</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy mb-2">Implementation</h4>
                  <p className="text-gray-600">
                    Using cutting-edge technologies and data science methodologies, we developed a robust platform that seamlessly integrates with existing postal systems while providing powerful new capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-navy/5 rounded-xl h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy font-bold text-lg">04</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy mb-2">Validation & Refinement</h4>
                  <p className="text-gray-600">
                    Through rigorous testing and feedback cycles, we refined DRISHTI to ensure it meets the specific needs of postal divisional offices and delivers measurable improvements in operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
