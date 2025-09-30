import React from "react";
import civilConstructionBg from "../../assets/services_bg/civil.webp";

const CivilConstructionMEP = () => {
  return (
    <div>
      {/* Civil Construction & MEP Section */}
      <section id="civil-construction" className="scroll-mt-24 mb-16">
        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat rounded-lg mb-8 flex items-center justify-center"
          style={{
            backgroundImage: `url(${civilConstructionBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              CIVIL CONSTRUCTION & MEP
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Comprehensive Construction & MEP Workforce Solutions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          We provide skilled professionals across all disciplines of civil construction and MEP 
          (Mechanical, Electrical, and Plumbing) sectors, ensuring qualified manpower for every 
          aspect of your construction projects.
        </p>

        <div className="space-y-6">
          {/* Professional Roles Section */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              PROFESSIONAL ROLES
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our comprehensive workforce includes qualified Engineers, experienced Foremen, 
              dedicated Supervisors, skilled Masons, Carpenters, Steel Fixers, Electricians, 
              Plumbers, Civil Scaffolders, Duct Erectors and Fabricators, and specialized 
              MEP Technicians and Engineers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Civil Construction</h5>
                <p className="text-gray-700 text-sm">
                  Engineers, Foremen, Supervisors, Masons, Carpenters, Steel Fixers, Civil Scaffolders
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">MEP Specialists</h5>
                <p className="text-gray-700 text-sm">
                  Electricians, Plumbers, Duct Erectors and Fabricators, MEP Technicians and Engineers
                </p>
              </div>
            </div>
          </div>

          {/* Service Coverage Section */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              SERVICE COVERAGE
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Complete workforce solutions for civil construction projects and MEP systems 
              installation, maintenance, and commissioning across residential, commercial, 
              and industrial sectors.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed text-center italic">
            Providing comprehensive manpower solutions for civil construction and MEP projects 
            with qualified engineers, skilled technicians, and experienced trades professionals 
            for all your construction needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CivilConstructionMEP;