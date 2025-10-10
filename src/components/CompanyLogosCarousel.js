import React from "react";
import {
  oicc,
  sts,
  aits,
  aotc,
  bahnas,
  bashaer,
  bftc,
  cr3,
  dcc,
  debaj,
  des,
  dnv,
  drydocks,
  durian,
  emco,
  global,
  gulf,
  gulfline,
  izz,
  maa,
  mqpe,
  nsf,
  sge,
  premier,
  sme,
  soms,
  texas,
  ues,
  sunpower,
  aldana,
  gpsrategies,
  dohat,
  desert,
  powertech,
  gps,
  aljadidi,
  tasneea,
  hims,
  hoficons,
  majees,
  wesolutions,
} from "../assets/companylogos";
import bgimg from "../assets/bg/linebg.png";

const CompanyLogosCarousel = () => {
  const companyLogos = [
    { logo: sts, name: "STS" },
    { logo: oicc, name: "Oman Industrial Coating Centre" },
    { logo: aits, name: "Arabian Industries Technical Support" },
    { logo: bahnas, name: "Bahnas International" },
    { logo: maa, name: "Maa Kuthari Global" },
    { logo: bashaer, name: "Bashaer Gulf Projects" },
    { logo: bftc, name: "Brown Field Trad & Cont" },
    { logo: ues, name: "United Engineering Services" },
    { logo: dnv, name: "Germanischer Lloyd" },
    { logo: aotc, name: "Advanced Oilfield Technology" },
    { logo: gulf, name: "Gulf Triangle Group" },
    { logo: nsf, name: "National Steel Fabricators" },
    { logo: mqpe, name: "M Q Pearl Engineering" },
    { logo: des, name: "DES" },
    { logo: soms, name: "Superiority of Moder Services" },
    { logo: izz, name: "Izz Oman Engineering" },
    { logo: emco, name: "Engineering Maintenance Company" },
    { logo: debaj, name: "DEBAJ LLC" },
    { logo: dcc, name: "DCC" },
    { logo: texas, name: "Oilfields Equipment" },
    { logo: drydocks, name: "Drydocks World" },
    { logo: sme, name: "SM Engineering" },
    { logo: gulfline, name: "Gulfline" },
    { logo: sge, name: "Switchgear Group" },
    { logo: premier, name: "Premier Marine" },
    { logo: durian, name: "Durian" },
    { logo: global, name: "Global Remote Integrated Solutions" },
    { logo: cr3, name: "CR3" },

    { logo: sunpower, name: "Sunpower Gen" },
    { logo: aldana, name: "Al Dana Switchgear" },
    { logo: gpsrategies, name: "GP Strategies" },
    { logo: dohat, name: "Dohat Al Khaleej LLC" },
    { logo: desert, name: "Desert Tiger's United LLC" },
    { logo: powertech, name: "Powertech Engineering LLC" },
    { logo: gps, name: "Gulf Petrochemical Services & Trading LLC" },
    { logo: aljadidi, name: "Al Jadidi Engineering LLC" },
    { logo: tasneea, name: "Tasneea Oil & Gas Technology LLC" },
    { logo: hims, name: "HIMS Integrated Services SDN BHD" },
    { logo: hoficons, name: "Hofincons & Co. LLC (Hofincons Group)" },
    { logo: majees, name: "Majees Technical Services LLC" },
    { logo: wesolutions, name: "Workforce Employment Solutions" },
  ];

  return (
    <section className="py-1 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 py-8 bg-gradient-to-r from-orange-500 to-orange-500 shadow-xl">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We Proudly Recruit for Renowned Companies across the Globe in Oil
              & Gas, Engineering, Construction, and Facility Management sectors.
            </p>
          </div>
        </div>

        {/* Logo Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Carousel Track */}
          <div className="flex animate-scroll space-x-16">
            {/* First Set */}
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-48 h-28 bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {companyLogos.map((company, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-28 bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 rounded-xl shadow-lg relative overflow-hidden">
          {/* Background */}
          <div
            style={{
              backgroundImage: `url(${bgimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute inset-0"
          ></div>

          {/* Overlay with opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Content with enhanced readability */}
          <div className="relative z-10 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-3 drop-shadow-md">
                  100+
                </div>
                <div className="text-lg text-white font-bold drop-shadow-md">
                  Clients
                </div>
              </div>
              <div className="p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-3 drop-shadow-md">
                  10+
                </div>
                <div className="text-lg text-white font-bold drop-shadow-md">
                  Countries
                </div>
              </div>
              <div className="p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-3 drop-shadow-md">
                  500+
                </div>
                <div className="text-lg text-white font-bold drop-shadow-md">
                  Job Categories
                </div>
              </div>
              <div className="p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-3 drop-shadow-md">
                  10000+
                </div>
                <div className="text-lg text-white font-bold drop-shadow-md">
                  Professionals Placed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Animation - FIXED */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: max-content;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyLogosCarousel;