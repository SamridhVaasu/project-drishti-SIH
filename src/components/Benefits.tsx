
import React from 'react';
import { Zap, BarChart3, TrendingUp, Search, Clock, Settings } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-amber/10 text-amber-dark text-xs font-medium py-1 px-3 rounded-full">
              The Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">
            Key Benefits & Innovations
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            DRISHTI transforms postal operations through actionable insights, driving efficiency and service excellence across the network.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white rounded-2xl shadow-subtle p-6 hover-scale transition-all-300 group">
            <div className="bg-navy/5 text-navy p-4 rounded-xl inline-flex mb-4 group-hover:bg-navy group-hover:text-white transition-all-300">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Performance Optimization</h3>
            <p className="text-gray-600">
              Identify bottlenecks and optimize postal operations with automated performance monitoring and trend analysis.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal text-lg leading-tight">•</span>
                <span className="text-gray-600 text-sm">Up to 24% improvement in operational efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal text-lg leading-tight">•</span>
                <span className="text-gray-600 text-sm">Reduced processing times by 35%</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-subtle p-6 hover-scale transition-all-300 group">
            <div className="bg-navy/5 text-navy p-4 rounded-xl inline-flex mb-4 group-hover:bg-navy group-hover:text-white transition-all-300">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Data-Driven Decisions</h3>
            <p className="text-gray-600">
              Make informed strategic choices based on comprehensive data analysis and predictive modeling.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal text-lg leading-tight">•</span>
                <span className="text-gray-600 text-sm">Forecasting accuracy improved by 42%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal text-lg leading-tight">•</span>
                <span className="text-gray-600 text-sm">Strategic planning cycle reduced by 60%</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-subtle p-6 hover-scale transition-all-300 group">
            <div className="bg-navy/5 text-navy p-4 rounded-xl inline-flex mb-4 group-hover:bg-navy group-hover:text-white transition-all-300">
              <Search size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Enhanced Visibility</h3>
            <p className="text-gray-600">
              Gain comprehensive insight into every aspect of postal operations through intuitive dashboards and reports.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal text-lg leading-tight">•</span>
                <span className="text-gray-600 text-sm">100% visibility across all operational metrics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal text-lg leading-tight">•</span>
                <span className="text-gray-600 text-sm">Real-time monitoring of key performance indicators</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-teal/10 text-teal-dark text-xs font-medium py-1 px-3 rounded-full">
                Innovation
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy">
              What Makes DRISHTI Different
            </h3>
            <p className="text-gray-600 mb-8">
              Unlike traditional reporting tools, DRISHTI is specifically tailored for India's postal ecosystem with features that address the unique challenges of postal divisional offices.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 text-teal p-3 rounded-lg mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-dark">Real-Time Processing</h4>
                  <p className="text-gray-600 mt-1">
                    Process and analyze data as it arrives, providing instant insights instead of delayed reports.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 text-teal p-3 rounded-lg mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-dark">Contextual Intelligence</h4>
                  <p className="text-gray-600 mt-1">
                    Insights tailored to specific postal functions and roles, with customized recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 text-teal p-3 rounded-lg mt-1">
                  <Settings size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-dark">Adaptive Analytics</h4>
                  <p className="text-gray-600 mt-1">
                    Self-learning algorithms that adjust to changing postal patterns and seasonal variations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-navy via-navy-light to-transparent opacity-90 rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1622642991361-504895ce2e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Postal data analytics" 
              className="w-full h-auto object-cover rounded-3xl shadow-elevated"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
              <div className="text-center">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-6">
                  Compared to Traditional Systems
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-white/80 text-sm mb-2">Traditional</div>
                    <div className="space-y-3">
                      <p className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg text-white text-sm">
                        Manual reporting
                      </p>
                      <p className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg text-white text-sm">
                        Siloed data
                      </p>
                      <p className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg text-white text-sm">
                        Delayed insights
                      </p>
                      <p className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg text-white text-sm">
                        Limited analysis
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-teal text-sm mb-2">DRISHTI</div>
                    <div className="space-y-3">
                      <p className="bg-teal/20 backdrop-blur-sm py-2 px-4 rounded-lg text-white text-sm">
                        Automated analytics
                      </p>
                      <p className="bg-teal/20 backdrop-blur-sm py-2 px-4 rounded-lg text-white text-sm">
                        Unified platform
                      </p>
                      <p className="bg-teal/20 backdrop-blur-sm py-2 px-4 rounded-lg text-white text-sm">
                        Real-time data
                      </p>
                      <p className="bg-teal/20 backdrop-blur-sm py-2 px-4 rounded-lg text-white text-sm">
                        Predictive insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-teal/10 to-teal/5 rounded-3xl p-8 md:p-12 shadow-subtle">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
                Measurable Impact
              </h3>
              <p className="text-gray-600">
                DRISHTI delivers quantifiable improvements across key postal performance metrics
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-subtle">
                <h4 className="font-semibold text-navy mb-4 text-lg">Operational Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">Processing Speed</span>
                      <span className="text-teal font-medium text-sm">+42%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-teal h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">On-time Delivery</span>
                      <span className="text-teal font-medium text-sm">+28%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-teal h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">Resource Utilization</span>
                      <span className="text-teal font-medium text-sm">+35%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-teal h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-subtle">
                <h4 className="font-semibold text-navy mb-4 text-lg">Management Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">Decision Time</span>
                      <span className="text-amber font-medium text-sm">-65%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-amber h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">Reporting Effort</span>
                      <span className="text-amber font-medium text-sm">-80%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-amber h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">Data Accessibility</span>
                      <span className="text-amber font-medium text-sm">+95%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-amber h-2 rounded-full" style={{ width: '95%' }}></div>
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

export default Benefits;
