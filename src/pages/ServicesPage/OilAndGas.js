import React from "react";
import ServicesLinks from "../../components/ServiceLinks";
import oilGasBg from "../../assets/services_bg/oil.jpg";

const OilAndGas = () => {
  return (
    <div className="pt-16">
      {/* Background Image Header Section */}
      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${oilGasBg})`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            OIL & GAS
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-4 md:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Comprehensive Oil & Gas Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8 text-justify">
            We provide specialized expertise across all positions in installation, 
            pre-commissioning, commissioning, operations, and maintenance throughout 
            the oil and gas industry value chain.
          </p>

          <div className="space-y-8">
            {/* Upstream Section */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                UPSTREAM OPERATIONS
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Our upstream capabilities encompass comprehensive drilling operations 
                  for both on-shore and off-shore environments, supported by expertise 
                  in 3 Phase Separator systems, advanced Saline Water Treatment facilities, 
                  and efficient Crude Pumping operations.
                </p>
              </div>
            </div>

            {/* Downstream Section */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                DOWNSTREAM OPERATIONS
              </h3>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Specialized refinery and process operations management, ensuring 
                  optimal performance and efficiency in downstream processing facilities.
                </p>
              </div>
            </div>

            {/* Operations & Maintenance Section */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                OPERATION & MAINTENANCE TEAMS
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Comprehensive Electrical & Instrumentation (E&I), Rotary, and Static 
                  equipment maintenance teams supporting all process plants with 
                  technical excellence and operational reliability.
                </p>
              </div>
            </div>

            {/* Support Departments */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                SUPPORTIVE DEPARTMENTS
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Integrated support services including specialized Inspection teams, 
                  comprehensive Technical services, advanced Process Engineering 
                  capabilities, and rigorous Health, Safety & Environment (HSE) 
                  protocols ensuring operational excellence and compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-center italic">
              Delivering comprehensive manpower solutions across the entire oil and gas 
              spectrum, from exploration to refining, with unwavering commitment to 
              safety, quality, and operational excellence.
            </p>
          </div>
        </div>

        {/* Services List Sidebar */}
        <div className="flex justify-center lg:justify-end">
          <ServicesLinks />
        </div>
      </div>
    </div>
  );
};

export default OilAndGas;