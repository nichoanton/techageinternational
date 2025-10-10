import React, { useState } from "react";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("employer");

  // Google Forms URLs
  const employerFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfrJrOZXHnHoqUfLA7x1VCT-Pltbt17Nec9Wz1UV98mYQhwug/viewform?usp=dialog";
  const candidateFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd1dLWjHSgwPcQm2CcbBZlB6ZXNFwVylpG6yCmMWfYWMx7w_w/viewform?usp=header";

  const openGoogleMaps = () => {
    const address = "Techage International";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with us for recruitment solutions and career opportunities
            </p>
          </div>

          {/* Forms Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setActiveTab("employer")}
                  className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === "employer"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Employer - Request Callback
                </button>
                <button
                  onClick={() => setActiveTab("candidate")}
                  className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                    activeTab === "candidate"
                      ? "bg-orange-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-orange-600"
                  }`}
                >
                  Candidate - Post Applied
                </button>
              </div>
            </div>

            {/* Forms Container */}
            <div className="w-full">
              {/* Employer Form */}
              {activeTab === "employer" && (
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Employer - Request Callback
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you shortly. 
                    Responses will be sent to: <strong>support@techageinternational.in</strong>
                  </p>

                  {/* Google Form Embed */}
                  <div className="w-full h-[500px] md:h-[600px]">
                    <iframe
                      src={employerFormUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Employer Contact Form"
                      className="rounded-lg border border-gray-200"
                    >
                      Loading…
                    </iframe>
                  </div>

                  {/* Alternative Link */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-600 text-sm">
                      If the form doesn't load,{" "}
                      <a
                        href={employerFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        open the form in a new window
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Candidate Form */}
              {activeTab === "candidate" && (
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Candidate - Post Applied
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Apply for positions and we'll connect you with opportunities.
                    Responses will be sent to: <strong>support@techageinternational.in</strong>
                  </p>

                  {/* Google Form Embed */}
                  <div className="w-full h-[500px] md:h-[600px]">
                    <iframe
                      src={candidateFormUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Candidate Application Form"
                      className="rounded-lg border border-gray-200"
                    >
                      Loading…
                    </iframe>
                  </div>

                  {/* Alternative Link */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-600 text-sm">
                      If the form doesn't load,{" "}
                      <a
                        href={candidateFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 font-semibold"
                      >
                        open the form in a new window
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Address Card */}
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Office Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Plot No. 41, Door No.2, 3rd Cross Street,<br />
                  Brindhavan Nagar, Valasaravakkam,<br />
                  Chennai - 600 087, India.
                </p>
                <button
                  onClick={openGoogleMaps}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center transition-colors mx-auto"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  View on Google Maps
                </button>
              </div>

              {/* Email Card */}
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Email Address</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Reach out to us via email for any inquiries
                </p>
                <a 
                  href="mailto:hr@techageinternational.in" 
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                >
                  hr@techageinternational.in
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Phone Number</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Call us during business hours
                </p>
                <a 
                  href="tel:+914443356128" 
                  className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                >
                  +91 44 4335 6128
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;