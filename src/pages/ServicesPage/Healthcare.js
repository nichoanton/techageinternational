import React from "react";
import healthCareBg from "../../assets/services_bg/Healthcare.jpg";

const HealthCare = () => {
  return (
    <div>
      {/* Health Care Section */}
      <section id="health-care" className="scroll-mt-24 mb-16">
        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat rounded-lg mb-8 flex items-center justify-center"
          style={{
            backgroundImage: `url(${healthCareBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              HEALTH CARE
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Healthcare Staffing Solutions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          We provide qualified healthcare professionals dedicated to delivering exceptional 
          patient care across various medical facilities and healthcare settings.
        </p>

        <div className="space-y-6">
          {/* Healthcare Professionals Section */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              HEALTHCARE PROFESSIONALS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Nurses
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Care Takers
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
              Our healthcare professionals serve across hospitals, clinics, nursing homes, 
              rehabilitation centers, home healthcare services, and long-term care facilities, 
              providing compassionate and professional patient care.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed text-center italic">
            Providing qualified and compassionate healthcare staffing solutions with professional 
            nurses and dedicated care takers for various medical facilities and patient care needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HealthCare;