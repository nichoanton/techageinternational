import React from "react";
import {
  FaUserTie,
  FaUsers,
  FaHandshake,
  FaCog,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Jawahar",
      role: "Business Development / Recruiting Coordination",
      icon: FaChartLine,
      responsibilities: [
        "Business Development Activities and Leading Marketing Teams",
        "Client Acquisition and Agreement Execution",
        "Coordination with Head of Operations",
        "Meeting and Coordinating with Esteemed Clients",
        "Recruitment Evaluation and Team Guidance",
        "Resume Collection, Scrutinizing, and Short Listing",
        "Conducting Pre-Interviews and Candidate Assessment",
      ],
    },
    {
      name: "Eben Jawahar",
      role: "Office Administration & Project Management",
      icon: FaCog,
      responsibilities: [
        "Documentation and Agreement Management",
        "Back Office Services and Logistics Coordination",
        "Accounts and Financial Management",
        "Project Estimation and Planning",
        "CV Bank Management and Maintenance",
        "Preparation and Submission of Client Assignments",
        "Administrative Support and Office Operations",
      ],
    },
    {
      name: "Durai Raj",
      role: "Client Coordination & Selection Process",
      icon: FaHeadset,
      responsibilities: [
        "Client Coordination for Selection Process",
        "Personal Interview Scheduling and Management",
        "Trade Test Coordination and Evaluation",
        "Client Relationship Management",
        "Selection Process Follow-up and Coordination",
        "Client Communication and Updates",
      ],
    },
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section with Solid Color */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Expert Team
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            Meet the dedicated professionals behind our recruitment excellence
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Team Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <FaUsers className="text-4xl text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional Recruitment Team
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Our Recruitment team consists of professionally qualified technical
            experts who understand client requirements from the right
            perspective. We specialize in sourcing, identifying, and screening
            the right candidates through comprehensive pre-interviews to deliver
            the best talent that perfectly suits our clients' requirements.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Team Member Header - Fixed Height */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-200 flex-shrink-0">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <IconComponent className="text-2xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-center font-medium text-sm leading-tight">
                    {member.role}
                  </p>
                </div>

                {/* Responsibilities - Flexible Content Area */}
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center justify-center">
                    <FaHandshake className="text-orange-500 mr-2" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 flex-grow">
                    {member.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        {/* Team Expertise Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Team Expertise
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Combining diverse skills to deliver comprehensive recruitment
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaUserTie className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Technical Recruitment
              </h3>
              <p className="text-gray-600 text-sm">
                Expert in identifying and assessing technical talent across
                industries
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaHandshake className="text-2xl text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Client Relations</h3>
              <p className="text-gray-600 text-sm">
                Building and maintaining strong client partnerships
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaCog className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Process Management</h3>
              <p className="text-gray-600 text-sm">
                Streamlined processes for efficient candidate selection
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaChartLine className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Business Development
              </h3>
              <p className="text-gray-600 text-sm">
                Strategic growth and client acquisition expertise
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Partner With Our Expert Team
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Leverage our team's expertise to find the perfect talent solutions
              for your organization
            </p>
            <button className="button-theme font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg">
              Connect With Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
