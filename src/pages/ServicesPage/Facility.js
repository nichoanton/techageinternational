import React from "react";
import facilityManagementBg from "../../assets/services_bg/facility.jpeg";

const FacilityManagement = () => {
  return (
    <div>
      {/* Facility Management Section */}
      <section id="facility-management" className="scroll-mt-24 mb-16">
        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat rounded-lg mb-8 flex items-center justify-center"
          style={{
            backgroundImage: `url(${facilityManagementBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              FACILITY MANAGEMENT
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Comprehensive Facility Management Staffing Solutions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          We provide skilled and semi-skilled personnel for comprehensive facility management 
          services, ensuring smooth operations and maintenance of commercial, residential, 
          and industrial facilities.
        </p>

        <div className="space-y-6">
          {/* Staffing Roles Section */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              FACILITY MANAGEMENT STAFF
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="space-y-2">
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Cook
                </p>
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Waiter
                </p>
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Chapatti Maker/Bakery Man
                </p>
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Laundry Boy
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Office/Tea Boy
                </p>
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Kitchen Cleaners and Helpers
                </p>
                <p className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  General Cleaners
                </p>
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              SERVICE AREAS
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Our facility management personnel serve across various sectors including corporate offices, 
              residential complexes, industrial facilities, educational institutions, healthcare facilities, 
              and hospitality establishments.
            </p>
          </div>

          {/* Support Services Section */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              SUPPORT SERVICES
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive support services covering food and beverage operations, housekeeping, 
              laundry services, office support, and general maintenance to ensure optimal facility 
              operations and occupant comfort.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed text-center italic">
            Delivering reliable facility management staffing solutions with trained professionals 
            for food services, housekeeping, maintenance, and administrative support across all 
            types of facilities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FacilityManagement;