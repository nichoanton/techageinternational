import React from "react";

const RAInformation = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Main Content - Professional Layout */}
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-12xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* RA Details Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-blue-600 rounded-full mr-3"></div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Agency Credentials
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Recruiting Agent</span>
                    <span className="text-gray-600 text-right text-sm">Tech Age International Manpower & Employment Service, Chennai</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">RC Holder</span>
                    <span className="text-gray-600 text-sm">Mr. A. Jawahar<br/><span className="text-blue-600 font-medium">+91 99942 72082</span></span>
                  </div>
                  <div className="flex items-start justify-between border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">RC Number</span>
                    <span className="text-gray-600 text-right text-sm">B-0668/Chennai/part/1000+/5/8936/2013</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-gray-700 text-sm uppercase tracking-wide">RC Validity Status</span>
                    <span className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full">Valid till 30.08.2029</span>
                  </div>
                </div>
              </div>

              {/* Service Charges Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-green-600 rounded-full mr-3"></div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Service Charges
                  </h2>
                </div>
                <div className="space-y-3">
                  {[
                    "ECR Countries Recruitment",
                    "ECNR Countries Recruitment", 
                    "Unskilled Workers Recruitment",
                    "Skilled Workers Recruitment",
                    "Highly Skilled Professionals"
                  ].map((service, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-700 text-sm">{service}</span>
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ₹30,000
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800 text-xs font-medium text-center">
                    * Complimentary services include: Ticketing, Visa counseling, Emigration consultation *
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Payment Modes Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-purple-600 rounded-full mr-3"></div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Payment Methods
                  </h2>
                </div>
                <div className="space-y-3">
                  {[
                    { method: "Cheque", note: "(Post Dated Cheques not accepted)" },
                    { method: "Net Banking / NEFT / RTGS", note: "" },
                    { method: "Bank Account Deposit", note: "" },
                    { method: "Demand Drafts", note: "Payable at CHENNAI" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center bg-gray-50 px-4 py-3 rounded-lg">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <span className="text-gray-700 text-sm font-medium">{item.method}</span>
                        {item.note && <span className="text-gray-500 text-xs block">{item.note}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700 text-xs font-bold text-center uppercase tracking-wide">
                    ⚠️ Cash Transactions Strictly Prohibited
                  </p>
                </div>
              </div>

              {/* Grievance Redressal Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-red-600 rounded-full mr-3"></div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Grievance Redressal
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Contact Person</div>
                    <div className="text-gray-800 font-semibold">Mr. Jawahar</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Email Address</div>
                    <div className="text-blue-600 font-semibold text-sm">admin@techageinternational.in</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Contact Numbers</div>
                    <div className="space-y-1">
                      <div className="text-gray-800 font-medium text-sm">+91 99942 72082</div>
                      <div className="text-gray-800 font-medium text-sm">+91 81108 72082</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RAInformation;