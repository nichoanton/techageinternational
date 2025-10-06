import React, { useState } from "react";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState(null);

  // Google Forms URLs - Replace these with your actual Google Form URLs
  const employerFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeOM6zUaolAXjxc_uSE_TWADYTOdTnIdG5-zmsbaVxcHxTawA/viewform?usp=header";
  const candidateFormUrl = "https://docs.google.com/forms/d/e/YOUR_CANDIDATE_FORM_ID/viewform?embedded=true";

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for recruitment solutions and career
              opportunities
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 flex">
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

          {/* Forms Container - Only show when a tab is selected */}
          {activeTab && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              {/* Employer Form */}
              {activeTab === "employer" && (
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Employer - Request Callback
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you shortly. 
                    Responses will be sent to: <strong>nichoanton05@gmail.com</strong>
                  </p>

                  {/* Google Form Embed */}
                  <div className="w-full h-[600px] md:h-[800px]">
                    <iframe
                      src={employerFormUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Employer Contact Form"
                      className="rounded-lg"
                    >
                      Loading…
                    </iframe>
                  </div>

                  {/* Alternative Link */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-600 text-sm">
                      If the form doesn't load,{" "}
                      <a
                        href={employerFormUrl.replace("?embedded=true", "")}
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
                    Responses will be sent to: <strong>nichoanton05@gmail.com</strong>
                  </p>

                  {/* Google Form Embed */}
                  <div className="w-full h-[600px] md:h-[800px]">
                    <iframe
                      src={candidateFormUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Candidate Application Form"
                      className="rounded-lg"
                    >
                      Loading…
                    </iframe>
                  </div>

                  {/* Alternative Link */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-600 text-sm">
                      If the form doesn't load,{" "}
                      <a
                        href={candidateFormUrl.replace("?embedded=true", "")}
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
          )}

          {/* Show message when no tab is selected */}
          {!activeTab && (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-12 h-12 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  Select an Option Above
                </h3>
                <p className="text-gray-600 mb-6">
                  Choose between <strong>Employer - Request Callback</strong> or <strong>Candidate - Post Applied</strong> to get started with your inquiry.
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setActiveTab("employer")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    I'm an Employer
                  </button>
                  <button
                    onClick={() => setActiveTab("candidate")}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    I'm a Candidate
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;