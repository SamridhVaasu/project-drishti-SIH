
import React from 'react';
import { Mail, Map, User, BarChart3, Search, Clock } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const ProblemStatement = () => {
  return (
    <section id="problem" className="section-padding relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-navy/5 text-navy text-xs font-medium py-1 px-3 rounded-full">
              The Challenge
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">
            Why Postal Data Analytics Matters
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            India's postal network faces significant challenges in harnessing its vast data for strategic decision-making at the divisional level, resulting in missed opportunities for efficiency and service improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="bg-navy/5 rounded-3xl p-8 shadow-subtle">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Current Challenges</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-navy/10 text-navy p-2 rounded-full mt-1 flex-shrink-0">
                    <Search size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-dark">Fragmented Data Sources</h4>
                    <p className="text-gray-600 mt-1">Information scattered across multiple databases and systems with no unified view</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-navy/10 text-navy p-2 rounded-full mt-1 flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-dark">Time-Consuming Reporting</h4>
                    <p className="text-gray-600 mt-1">Manual data collection and analysis processes delay critical insights</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-navy/10 text-navy p-2 rounded-full mt-1 flex-shrink-0">
                    <BarChart3 size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-dark">Limited Analytical Capabilities</h4>
                    <p className="text-gray-600 mt-1">Lack of advanced visualization and predictive analysis tools</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy-dark rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dotPattern)" />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Before DRISHTI</h3>
                <div className="w-20 h-20 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-4 text-center">
                  <p className="text-white/80">Manual data processing</p>
                  <p className="text-white/80">Delayed strategic decisions</p>
                  <p className="text-white/80">Information siloes</p>
                  <p className="text-white/80">Limited data visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl overflow-hidden shadow-elevated relative mb-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?q=80&w=2574')] bg-cover bg-center opacity-10"></div>
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-8 text-center">
              <Mail className="h-10 w-10 text-amber mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={155000} suffix="+" />
              </div>
              <p className="text-white/70">Post Offices</p>
            </div>
            <div className="p-8 text-center">
              <Map className="h-10 w-10 text-teal mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={23} prefix="" suffix="K+" delay={200} />
              </div>
              <p className="text-white/70">PIN Codes</p>
            </div>
            <div className="p-8 text-center">
              <User className="h-10 w-10 text-amber mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={420000} suffix="+" delay={400} />
              </div>
              <p className="text-white/70">Employees</p>
            </div>
            <div className="p-8 text-center">
              <BarChart3 className="h-10 w-10 text-teal mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter end={1850} suffix="+" delay={600} />
              </div>
              <p className="text-white/70">Daily Data Points</p>
            </div>
          </div>
        </div>
        
        <div className="bg-offwhite rounded-3xl p-8 md:p-12 shadow-subtle">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy text-center">
              Smart India Hackathon 2024 Problem Statement
            </h3>
            <div className="prose prose-lg max-w-none">
              <blockquote className="border-l-4 border-navy pl-4 italic text-gray-600">
                "The Department of Posts (DoP) needs a data analytics platform to provide a comprehensive view of key performance indicators and operational data for divisional offices, enabling data-driven decision making and strategic planning."
              </blockquote>
              <p className="text-gray-600 mt-6">
                DRISHTI was developed in response to this challenge, with a focus on creating an intuitive, powerful analytics solution that transforms how postal divisions leverage their data assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
