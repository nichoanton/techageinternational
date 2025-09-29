import React from "react";
import ServicesLinks from "../../components/ServiceLinks";
import engineeringBg from "../../assets/services_bg/engineering.jpg";

const EngineeringIndustries = () => {
  return (
    <div className="pt-16">
      {/* Background Image Header Section */}
      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url(${engineeringBg})`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            ENGINEERING INDUSTRIES
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-4 md:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Comprehensive Engineering Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8 text-justify">
            We provide specialized engineering expertise across projects and maintenance operations, 
            offering flexible workforce solutions for long-term, short-term, and shutdown job requirements 
            in diverse industrial sectors.
          </p>

          <div className="space-y-8">
            {/* Projects & Maintenance Section */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                PROJECTS & MAINTENANCE
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Comprehensive project execution and maintenance services tailored to meet 
                  the dynamic needs of engineering industries, ensuring operational excellence 
                  and project delivery within specified timelines and quality standards.
                </p>
              </div>
            </div>

            {/* Employment Types Section */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                EMPLOYMENT SOLUTIONS
              </h3>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Flexible workforce deployment including Long Term assignments, 
                  Short Term projects, and specialized Shutdown Jobs to meet varying 
                  project demands and operational requirements.
                </p>
              </div>
            </div>

            {/* Engineering Professionals Section */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                ENGINEERING PROFESSIONALS
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Highly qualified Mechanical, Electrical & Instrumentation (E&I), and Civil Engineers 
                  specializing in Planning, Procurement, Design, Estimation, QA/QC, Rotary/Static 
                  equipment, and Health, Safety & Environment (HSE) management.
                </p>
              </div>
            </div>

            {/* Technical Workforce Section */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                TECHNICAL WORKFORCE
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Comprehensive technical teams including experienced Foremen and Technicians 
                  across all engineering disciplines. Our skilled workforce encompasses Welders, 
                  Fabricators, Fitters, Mill Wright Fitters, Riggers, Scaffolders, Grinders, 
                  Gas Cutters, and Engineering & General Helpers to support diverse project requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-center italic">
              Delivering exceptional engineering workforce solutions with expertise across all 
              technical disciplines, ensuring project success and operational excellence through 
              qualified professionals and skilled technicians.
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

export default EngineeringIndustries;