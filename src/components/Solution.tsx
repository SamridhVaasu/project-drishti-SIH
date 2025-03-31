
import React, { useState } from 'react';
import { Database, LineChart, Zap, LayoutDashboard, ServerIcon, EyeIcon, BrainCircuit, Layers } from 'lucide-react';

const Solution = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const solutionTabs = [
    {
      title: "Data Collection",
      icon: <Database className="h-5 w-5" />,
      content: "Comprehensive collection system that aggregates data from multiple postal touchpoints including counter operations, delivery services, and administrative functions."
    },
    {
      title: "Processing Engine",
      icon: <BrainCircuit className="h-5 w-5" />,
      content: "Advanced processing engine utilizing machine learning algorithms to clean, transform, and enrich raw postal data into actionable information."
    },
    {
      title: "Analytics Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      content: "Interactive visualization platform providing real-time insights into key performance metrics with customizable views for different user roles."
    }
  ];
  
  return (
    <section id="solution" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-teal/10 text-teal-dark text-xs font-medium py-1 px-3 rounded-full">
              The Solution
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">
            Introducing DRISHTI
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A comprehensive data analytics platform that transforms raw postal data into strategic insights, empowering divisional offices with the vision to excel.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-square max-w-lg mx-auto lg:mx-0 lg:order-2">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-elevated">
              <div className="absolute inset-0 blob bg-gradient-to-br from-amber-light via-amber to-amber-dark opacity-80"></div>
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="mb-6">
                    <EyeIcon size={48} className="text-navy mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">After DRISHTI</h3>
                  <div className="space-y-3">
                    <p className="text-navy-dark flex items-center justify-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6275 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="#03DAC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#03DAC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Automated data processing
                    </p>
                    <p className="text-navy-dark flex items-center justify-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6275 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="#03DAC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#03DAC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Real-time data insights
                    </p>
                    <p className="text-navy-dark flex items-center justify-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6275 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="#03DAC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#03DAC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Integrated data platform
                    </p>
                    <p className="text-navy-dark flex items-center justify-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3746C6.51168 20.6274 4.78465 19.2462 3.61096 17.4369C2.43727 15.6275 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986" stroke="#03DAC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 4L12 14.01L9 11.01" stroke="#03DAC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Enhanced decision-making
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy">The DRISHTI Advantage</h3>
            <p className="text-gray-600 mb-8">
              DRISHTI transforms the way divisional postal offices operate by providing comprehensive data analytics capabilities through an intuitive, powerful platform designed specifically for postal operations.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-subtle p-4 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-teal/10 text-teal p-3 rounded-lg">
                    <LineChart size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark text-lg">Comprehensive Visibility</h4>
                    <p className="text-gray-600 mt-1">
                      Unified view of all divisional data metrics from mail processing to delivery performance
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-subtle p-4 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-teal/10 text-teal p-3 rounded-lg">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark text-lg">Real-time Insights</h4>
                    <p className="text-gray-600 mt-1">
                      Instant access to up-to-date data enabling proactive decision-making and timely interventions
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-subtle p-4 hover-scale">
                <div className="flex items-start gap-4">
                  <div className="bg-teal/10 text-teal p-3 rounded-lg">
                    <ServerIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark text-lg">AI-Powered Analysis</h4>
                    <p className="text-gray-600 mt-1">
                      Advanced algorithms that identify trends, predict outcomes, and recommend optimizations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-navy rounded-3xl overflow-hidden shadow-elevated relative mb-20">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                <path d="M10 10H90M50 10V90M10 50H90M10 90H90" stroke="white" strokeWidth="1" fill="none" />
                <circle cx="10" cy="10" r="3" fill="white" />
                <circle cx="90" cy="10" r="3" fill="white" />
                <circle cx="10" cy="90" r="3" fill="white" />
                <circle cx="90" cy="90" r="3" fill="white" />
                <circle cx="50" cy="50" r="3" fill="white" />
                <circle cx="10" cy="50" r="3" fill="white" />
                <circle cx="50" cy="10" r="3" fill="white" />
                <circle cx="50" cy="90" r="3" fill="white" />
                <circle cx="90" cy="50" r="3" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuitPattern)" />
            </svg>
          </div>
          
          <div className="px-6 py-12 md:px-12 md:py-16 relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                How It Works
              </h3>
              <p className="text-white/70 max-w-3xl mx-auto">
                DRISHTI employs a three-stage process to transform raw postal data into actionable intelligence
              </p>
            </div>
            
            <div className="inline-flex flex-wrap justify-center gap-2 mb-8">
              {solutionTabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-5 py-2.5 rounded-full flex items-center gap-2 transition-all-200 ${
                    activeTab === index 
                      ? "bg-teal text-navy font-medium" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.icon}
                  {tab.title}
                </button>
              ))}
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-subtle">
              <div className="min-h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    {solutionTabs[activeTab].icon && (
                      <div className="inline-flex bg-teal/10 text-teal p-3 rounded-lg">
                        {React.cloneElement(solutionTabs[activeTab].icon as React.ReactElement, { size: 32 })}
                      </div>
                    )}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {solutionTabs[activeTab].title}
                  </h4>
                  <p className="text-white/80 max-w-xl mx-auto">
                    {solutionTabs[activeTab].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-3xl bg-white shadow-subtle overflow-hidden">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="p-8 md:p-12">
              <div className="inline-block mb-4">
                <span className="bg-amber/10 text-amber-dark text-xs font-medium py-1 px-3 rounded-full">
                  Key Features
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy">
                Transformative Capabilities
              </h3>
              <p className="text-gray-600 mb-8">
                DRISHTI incorporates cutting-edge features designed specifically for postal operations, enabling better decision-making and operational excellence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-amber/10 text-amber-dark p-2 rounded-lg mt-1">
                    <Layers size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-dark">Multi-level Analysis</h4>
                    <p className="text-gray-600 text-sm mt-1">Analyze data at division, region, or national levels</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber/10 text-amber-dark p-2 rounded-lg mt-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 12H5C3.89543 12 3 12.8954 3 14V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19V14C9 12.8954 8.10457 12 7 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 8H17C15.8954 8 15 8.89543 15 10V19C15 20.1046 15.8954 21 17 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 4H11C9.89543 4 9 4.89543 9 6V19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19V6C15 4.89543 14.1046 4 13 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-dark">Custom Dashboards</h4>
                    <p className="text-gray-600 text-sm mt-1">Role-specific views for different postal stakeholders</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber/10 text-amber-dark p-2 rounded-lg mt-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 21L6 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 21L18 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-dark">Predictive Analytics</h4>
                    <p className="text-gray-600 text-sm mt-1">Anticipate trends and forecast future performance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber/10 text-amber-dark p-2 rounded-lg mt-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8V5L19 2L20 4L22 5L19 8H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 8L12 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.8214 2 15.5291 2.48697 17 3.33782" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-dark">Automated Reporting</h4>
                    <p className="text-gray-600 text-sm mt-1">Scheduled reports delivered to key stakeholders</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-navy to-navy-dark p-8 md:p-12 flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-subtle">
                <div className="flex flex-col items-center">
                  <div className="w-full h-40 mb-6 bg-white/5 border border-white/10 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 400 150" className="w-full h-full">
                        <path d="M0,100 Q50,50 100,80 T200,60 T300,70 T400,50" stroke="#03DAC6" strokeWidth="2" fill="none" />
                        <path d="M0,130 Q50,100 100,120 T200,90 T300,110 T400,80" stroke="#FFB400" strokeWidth="2" fill="none" />
                        <g>
                          <circle cx="100" cy="80" r="4" fill="#03DAC6" />
                          <circle cx="200" cy="60" r="4" fill="#03DAC6" />
                          <circle cx="300" cy="70" r="4" fill="#03DAC6" />
                        </g>
                        <g>
                          <circle cx="100" cy="120" r="4" fill="#FFB400" />
                          <circle cx="200" cy="90" r="4" fill="#FFB400" />
                          <circle cx="300" cy="110" r="4" fill="#FFB400" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="mb-2">
                        <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="text-xl font-semibold text-white">96%</div>
                      <div className="text-xs text-white/60">On-time Delivery</div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="mb-2">
                        <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="text-xl font-semibold text-white">+24%</div>
                      <div className="text-xs text-white/60">Efficiency Gain</div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="mb-2">
                        <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="text-xl font-semibold text-white">5.2k</div>
                      <div className="text-xs text-white/60">Daily Parcels</div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="mb-2">
                        <div className="h-2 w-16 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="text-xl font-semibold text-white">-18%</div>
                      <div className="text-xs text-white/60">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
