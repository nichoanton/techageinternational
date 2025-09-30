import React from "react";
import engineeringBg from "../../assets/services_bg/engineering.jpeg";

const EngineeringIndustries = () => {
  return (
    <div>
      {/* Engineering Industries Section */}
      <section id="engineering" className="scroll-mt-24 mb-16">
        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat rounded-lg mb-8 flex items-center justify-center"
          style={{
            backgroundImage: `url(${engineeringBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              ENGINEERING INDUSTRIES
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Comprehensive Engineering Solutions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          We provide specialized engineering expertise across projects and maintenance operations, 
          offering flexible workforce solutions for long-term, short-term, and shutdown job requirements 
          in diverse industrial sectors.
        </p>

        <div className="space-y-6">
          {/* Projects & Maintenance Section */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              PROJECTS & MAINTENANCE
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive project execution and maintenance services tailored to meet 
              the dynamic needs of engineering industries, ensuring operational excellence 
              and project delivery within specified timelines and quality standards.
            </p>
          </div>

          {/* Employment Types Section */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              EMPLOYMENT SOLUTIONS
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Flexible workforce deployment including Long Term assignments, 
              Short Term projects, and specialized Shutdown Jobs to meet varying 
              project demands and operational requirements.
            </p>
          </div>

          {/* Engineering Professionals Section */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              ENGINEERING PROFESSIONALS
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Highly qualified Mechanical, Electrical & Instrumentation (E&I), and Civil Engineers 
              specializing in Planning, Procurement, Design, Estimation, QA/QC, Rotary/Static 
              equipment, and Health, Safety & Environment (HSE) management.
            </p>
          </div>

          {/* Technical Workforce Section */}
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              TECHNICAL WORKFORCE
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive technical teams including experienced Foremen and Technicians 
              across all engineering disciplines. Our skilled workforce encompasses Welders, 
              Fabricators, Fitters, Mill Wright Fitters, Riggers, Scaffolders, Grinders, 
              Gas Cutters, and Engineering & General Helpers to support diverse project requirements.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed text-center italic">
            Delivering exceptional engineering workforce solutions with expertise across all 
            technical disciplines, ensuring project success and operational excellence through 
            qualified professionals and skilled technicians.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EngineeringIndustries;