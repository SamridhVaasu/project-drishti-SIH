
import React, { useState } from 'react';
import { Database, Server, Cloud, Cpu, BarChart, Users } from 'lucide-react';

const Architecture = () => {
  const [viewMode, setViewMode] = useState<'simple' | 'technical'>('simple');
  
  return (
    <section id="architecture" className="section-padding relative overflow-hidden bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-navy/5 text-navy text-xs font-medium py-1 px-3 rounded-full">
              The Foundation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">
            Technical Architecture
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            DRISHTI's robust technical foundation ensures scalability, security, and performance to meet the demands of India's vast postal network.
          </p>
          
          <div className="mt-8 inline-flex bg-white rounded-full p-1.5 shadow-subtle">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all-200 ${
                viewMode === 'simple' 
                  ? 'bg-navy text-white' 
                  : 'bg-transparent text-navy hover:bg-navy/5'
              }`}
              onClick={() => setViewMode('simple')}
            >
              Simple View
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all-200 ${
                viewMode === 'technical' 
                  ? 'bg-navy text-white' 
                  : 'bg-transparent text-navy hover:bg-navy/5'
              }`}
              onClick={() => setViewMode('technical')}
            >
              Technical View
            </button>
          </div>
        </div>
        
        {viewMode === 'simple' ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-elevated overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="relative">
                  {/* Data Sources Layer */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-navy/5 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-navy/10 text-navy p-3 rounded-lg inline-flex mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-navy text-sm">Real-time Data</h4>
                    </div>
                    <div className="bg-navy/5 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-navy/10 text-navy p-3 rounded-lg inline-flex mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 6H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 18H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-navy text-sm">Legacy Systems</h4>
                    </div>
                    <div className="bg-navy/5 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-navy/10 text-navy p-3 rounded-lg inline-flex mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 9V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 6L5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17 6L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17 18L19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 18L5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 15V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-navy text-sm">IoT Devices</h4>
                    </div>
                  </div>
                  
                  {/* Arrows pointing down */}
                  <div className="flex justify-around mb-4">
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L12 35" stroke="#0F2443" strokeWidth="2" strokeDasharray="4 4"/>
                      <path d="M6 30L12 39L18 30" stroke="#0F2443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L12 35" stroke="#0F2443" strokeWidth="2" strokeDasharray="4 4"/>
                      <path d="M6 30L12 39L18 30" stroke="#0F2443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L12 35" stroke="#0F2443" strokeWidth="2" strokeDasharray="4 4"/>
                      <path d="M6 30L12 39L18 30" stroke="#0F2443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Processing Layer */}
                  <div className="bg-teal/10 rounded-xl p-6 mb-8 hover-scale relative">
                    <div className="absolute -top-3 left-6 bg-teal text-white text-xs font-medium py-1 px-3 rounded-full">
                      Data Processing Engine
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="bg-teal/20 text-teal-dark p-3 rounded-lg inline-flex mb-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M5 17H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <h5 className="text-xs font-medium text-teal-dark">Collection</h5>
                      </div>
                      <div className="text-center">
                        <div className="bg-teal/20 text-teal-dark p-3 rounded-lg inline-flex mb-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3V19C5 20.1046 5.89543 21 7 21H19C20.1046 21 21 20.1046 21 19V7L17 3H7C5.89543 3 5 3.89543 5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 3V7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 13L11 15L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h5 className="text-xs font-medium text-teal-dark">Analysis</h5>
                      </div>
                      <div className="text-center">
                        <div className="bg-teal/20 text-teal-dark p-3 rounded-lg inline-flex mb-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 16C14.7614 16 17 13.7614 17 11C17 8.23858 14.7614 6 12 6C9.23858 6 7 8.23858 7 11C7 13.7614 9.23858 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h5 className="text-xs font-medium text-teal-dark">Visualization</h5>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow pointing down */}
                  <div className="flex justify-center mb-8">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 1L20 35" stroke="#0F2443" strokeWidth="2" strokeDasharray="4 4"/>
                      <path d="M14 30L20 39L26 30" stroke="#0F2443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* User Interface Layer */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-amber/10 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-amber/20 text-amber-dark p-3 rounded-lg inline-flex mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 21L9 9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-amber-dark text-sm">Dashboards</h4>
                    </div>
                    <div className="bg-amber/10 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-amber/20 text-amber-dark p-3 rounded-lg inline-flex mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 4H8V20H16V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 4H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-amber-dark text-sm">Mobile App</h4>
                    </div>
                    <div className="bg-amber/10 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-amber/20 text-amber-dark p-3 rounded-lg inline-flex mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 10H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 14V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-amber-dark text-sm">API Access</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="bg-navy rounded-3xl shadow-elevated overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="relative">
                  {/* Data Sources Layer */}
                  <div className="grid grid-cols-5 gap-4 mb-8">
                    <div className="col-span-5">
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full inline-block mb-4">
                        Data Sources
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                        <Database size={16} />
                      </div>
                      <h4 className="font-medium text-white text-xs">Legacy DB</h4>
                      <p className="text-white/60 text-[10px] mt-1">SQL Server</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5.5V18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.5 12H18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.5 5.5H18.5V18.5H5.5V5.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-white text-xs">API Data</h4>
                      <p className="text-white/60 text-[10px] mt-1">REST/SOAP</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 7V17C4 19.2091 9.37258 21 16 21C22.6274 21 28 19.2091 28 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 7C4 9.20914 9.37258 11 16 11C22.6274 11 28 9.20914 28 7C28 4.79086 22.6274 3 16 3C9.37258 3 4 4.79086 4 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 12C4 14.2091 9.37258 16 16 16C22.6274 16 28 14.2091 28 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-white text-xs">NoSQL Data</h4>
                      <p className="text-white/60 text-[10px] mt-1">MongoDB</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19 12 19C9.2384 19 7.27976 17.5935 6.34315 16.6569" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 9.83212C2 6.6382 4.01099 3.85285 6.8661 2.58765L7.29217 2.40505C9.9430 1.24858 13.0570 1.24858 15.7078 2.40505L16.1339 2.58765C18.9890 3.85285 21 6.6382 21 9.83212V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-white text-xs">IoT Sensors</h4>
                      <p className="text-white/60 text-[10px] mt-1">MQTT</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                      <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 3V7C14 7.55228 14.4477 8 15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="font-medium text-white text-xs">Documents</h4>
                      <p className="text-white/60 text-[10px] mt-1">Unstructured</p>
                    </div>
                  </div>
                  
                  {/* Data Integration Layer */}
                  <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full inline-block mb-4">
                      Integration Layer
                    </div>
                    <div className="bg-teal/20 backdrop-blur-sm border border-teal/30 rounded-xl p-6 hover-scale">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="bg-teal/30 text-white p-2 rounded-lg inline-flex mb-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20 12H4M20 12L16 16M20 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4 12L8 16M4 12L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 20L8 16M12 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <h5 className="text-xs font-medium text-white">ETL Pipeline</h5>
                          <p className="text-white/70 text-[10px] mt-1">Apache NiFi</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-teal/30 text-white p-2 rounded-lg inline-flex mb-2">
                            <Server size={20} />
                          </div>
                          <h5 className="text-xs font-medium text-white">Message Queue</h5>
                          <p className="text-white/70 text-[10px] mt-1">Apache Kafka</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-teal/30 text-white p-2 rounded-lg inline-flex mb-2">
                            <Cloud size={20} />
                          </div>
                          <h5 className="text-xs font-medium text-white">Data Lake</h5>
                          <p className="text-white/70 text-[10px] mt-1">S3 Compatible</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Processing Layer */}
                  <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full inline-block mb-4">
                      Processing Layer
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-amber/20 backdrop-blur-sm border border-amber/30 rounded-xl p-4 text-center hover-scale">
                        <div className="bg-amber/30 text-white p-2 rounded-lg inline-flex mb-2">
                          <Cpu size={20} />
                        </div>
                        <h5 className="text-xs font-medium text-white">Data Processing</h5>
                        <p className="text-white/70 text-[10px] mt-1">Apache Spark</p>
                      </div>
                      <div className="bg-amber/20 backdrop-blur-sm border border-amber/30 rounded-xl p-4 text-center hover-scale">
                        <div className="bg-amber/30 text-white p-2 rounded-lg inline-flex mb-2">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h5 className="text-xs font-medium text-white">ML Engine</h5>
                        <p className="text-white/70 text-[10px] mt-1">TensorFlow</p>
                      </div>
                      <div className="bg-amber/20 backdrop-blur-sm border border-amber/30 rounded-xl p-4 text-center hover-scale">
                        <div className="bg-amber/30 text-white p-2 rounded-lg inline-flex mb-2">
                          <Database size={20} />
                        </div>
                        <h5 className="text-xs font-medium text-white">Data Warehouse</h5>
                        <p className="text-white/70 text-[10px] mt-1">Snowflake</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* API & Access Layer */}
                  <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full inline-block mb-4">
                      API & Access Layer
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-4 hover-scale">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 7L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <h5 className="text-xs font-medium text-white">REST API Gateway</h5>
                        </div>
                        <div className="text-center">
                          <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <h5 className="text-xs font-medium text-white">GraphQL API</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Frontend Layer */}
                  <div>
                    <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full inline-block mb-4">
                      Frontend Layer
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                        <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                          <BarChart size={16} />
                        </div>
                        <h5 className="text-xs font-medium text-white">Dashboard</h5>
                        <p className="text-white/70 text-[10px] mt-1">React/D3.js</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                        <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20V16H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h5 className="text-xs font-medium text-white">Web App</h5>
                        <p className="text-white/70 text-[10px] mt-1">PWA</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                        <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L19.196 7V17L12 22L4.80385 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.196 7L12 12L4.80385 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h5 className="text-xs font-medium text-white">Mobile App</h5>
                        <p className="text-white/70 text-[10px] mt-1">Flutter</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover-scale">
                        <div className="bg-white/10 text-white p-2 rounded-lg inline-flex mb-2">
                          <Users size={16} />
                        </div>
                        <h5 className="text-xs font-medium text-white">Admin Portal</h5>
                        <p className="text-white/70 text-[10px] mt-1">Role-Based</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Architecture;
