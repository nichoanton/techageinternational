import React, { useState } from "react";
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
} from "../assets/companylogos";

const ClientDetails = () => {
  const [activeCountry, setActiveCountry] = useState("all");

  // Group clients by country
  const clientsByCountry = {
    Oman: [
      {
        company: "Oman Industrial Coating Centre L.L.C",
        positions:
          "Area Manager / Painting Inspector/Supervisor / QC Painting Inspector / HSE Officer/Advisor / Equipment coordinator / Painter & Blaster",
        logo: oicc,
      },
      {
        company: "Arabian Industries Technical Support LLC",
        positions:
          "Mechanical Engineers / Planning Engineers / Lead Planning Engineers / TA Planners / Schedulers / Lifting Engineers/Supervisors / Project Engineers / Quantity Surveyor – Mechanical and Civil / Contract Engineer / Admin Executive / Accountant / QA/QC Engineers, Inspectors / Machinist / Permit Holders and Receiver / ISO Valve Technician / CV Technician / Asst. Valve Tech / Electrical and Instrument Technician / Project Managers / Tank Engineers / HSE Manager",
        logo: aits,
      },
      {
        company: "Bahnas Intentional Company LLC",
        positions:
          "Shuttering Carpenter / Steel Fixer / Mason / Steel Structural Fabricator / Mig and Arc Welders / Wall Painters",
        logo: bahnas,
      },
      {
        company: "Maa Kuthari Global LLC",
        positions:
          "Construction Manager / Project Manager / Site Engineer / HSE Officer / Planning Engineer / Welder / Fitter / Fabricator / Grinder / Helper / Scaffolder / Rigger & Foreman",
        logo: maa,
      },
      {
        company: "Bashaer Gulf Projects & Technical Services LLC",
        positions:
          "Planning Engineer / Cost Control Engineer / Project Managers/Engineers / Production Manager / Senior QA/QC Assistant Manager / Senior HSE Officer/Manager / Proposal Engineer",
        logo: bashaer,
      },
      {
        company: "Brown Field Trad & Cont LLC",
        positions: "Civil Permit Holder and Civil Workers",
        logo: bftc,
      },
      {
        company: "United Engineering Services LLC",
        positions:
          "6G Tig and Arc Welders / Fabricators / Static and Rotary Technicians",
        logo: ues,
      },
      {
        company: "Germanischer Lloyd Muscat LLC",
        positions:
          "Senior Surveyors (Multi Discipline Senior Inspectors) / Multi Discipline Inspectors / Material Inspectors / Welding Inspectors / Painting/ Pipe Coating Inspectors / E&I Inspectors / HVAC INSPECTOR / HSE Officer",
        logo: dnv,
      },
      {
        company: "Advanced Oilfield Technology Company LLC",
        positions:
          "Workshop In charge / Static and Rotary – Supervisor/Technicians / Jr Engineer / Machinist",
        logo: aotc,
      },
      {
        company: "Gulf Triangle Group of Companies",
        positions:
          "Painting QC Inspectors / Mechanical Draughtsman / Fabrication Supervisor / Production Engineer / HSE Officer / Design Engineer",
        logo: gulf,
      },
      {
        company: "National Steel Fabricators LLC",
        positions:
          "Production Manager / QAQC Engineer / Design Engineer / 6G-Welders / Steel Fitters / Fabricators",
        logo: nsf,
      },
      {
        company: "M Q Pearl Engineering LLC",
        positions:
          "Spool gel Draftsman / Construction Manager / HSE Officer / QA QC Engineer / Welding Engineer / 6G Tig & Arc Welders and Fabricators",
        logo: mqpe,
      },
      {
        company: "DES",
        positions:
          "Welders / Fitter / Fabricators / Riggers / Rigger Helpers / DSS Welders / Plasma Cutters & Mechanical Technicians",
        logo: des,
      },
      {
        company: "Superiority of Moder Services",
        positions: "Spray Painter / Sand Blaster / Painting Foreman",
        logo: soms,
      },
      {
        company: "Izz Oman Engineering LLC",
        positions: "Spray Painter, Blaster",
        logo: izz,
      },
    ],
    UAE: [
      {
        company: "OILFIELDS EQUIPMENTS LLC - Dubai",
        positions:
          "Project Engineer – Mechanical, E&I, QA QC Engineer / Mechanical and E & I Technician and Engineer / Project Engineer",
        logo: texas,
      },
      {
        company: "Drydocks World - Dubai",
        positions:
          "Steel Fabricators / Pipe Fabricators / 6G Tig and Arc, SS, DSS and 5G Welders / Fire watch",
        logo: drydocks,
      },
      {
        company: "SM ENGINEERING UAE",
        positions:
          "Structural, Mechanical & Piping construction / Steel Fabricators / Pipe Fabricators / Welders / Riggers & Mechanical Helpers",
        logo: sme,
      },
      {
        company: "Gulfline",
        positions: "4G Welder, Gas Cutter & Grinder.",
        logo: gulfline,
      },
      {
        company: "Switchgear Group of Companies - Abu Dhabi",
        positions:
          "Electrical Testing, Commissioning & Inspection Engineer / Electrical Safety Officers / Electrical Supervisor / Foreman / Charge Hand / Sr. Technician / Technician & Asst. Technician / Shut down project coordinator",
        logo: sge,
      },
      {
        company: "PREMIER MARINE ENGG. SERVICES L.L.C. - Dubai",
        positions:
          "Ship Repairing and Fabrication / Steel Fabricators / Pipe Fabricators / Welders / Fire watch",
        logo: premier,
      },
      {
        company: "Durian",
        positions:
          "6G Tig and Arc Welders, Fabricators, Scafollders, Riggers, Fabrication Supervisor, Machinist",
        logo: durian,
      },
      {
        company: "Global Remote Integrated Solutions",
        positions:
          "QC Engieers and Inspectors / 6G Tig and Arc Welders and Fabricators",
        logo: global,
      },
    ],
    Qatar: [
      {
        company: "Engineering Maintenance Company",
        positions:
          "Civil Supervisor / Civil Site Engineer / HSE Officer / Quantity Surveyor Civil / Planning Engineer – Civil / Project Engineer / Facility Supervisor / HVAC Technicians / Instrumentation and Electrical – Supervisor/Technicians / Plumber / Lighting Electricians -Senior Technician & Junior Technician / Mechanical Technician / Facility Supervisor",
        logo: emco,
      },
      {
        company: "DEBAJ LLC",
        positions:
          "Oil & Gas, Fabrication and Erection Division: Welders, Fitter, Fabricators, Riggers, Rigger Helpers, DSS Welders, Plasma Cutters & Mechanical Technicians. Electrical & Instrumentation Division: Electrician, Instrument Electrician/Technician, Electrical/Instrument Foreman & Fitter, Inst. Tube Fitter & Cable Termination Workers.",
        logo: debaj,
      },
      {
        company: "DCC",
        positions:
          "Onshore and Offshore Civil Structural Engineer / Head Inspection / Head Reliability / Sr. budget & Recovery controller / Cargo Movement controller / Opp. Support Engg / RBI Technician & Engineer / Technical Risk Coordinator / Planning & scheduling / Sr. Electrical Engineer / Static & Rotating Equipment Technician and Engr / Buyer / Contract Analyst / Corrosion Engineer / Material Controller Warehouse / Material Expediter / Planner / Planner systems_Cost control / Planning Technician / Scheduler / Technical Clerk / Field Operator / Housekeeping Helper / Hvac Technician / Electrical, Mechanical and Instrument Technician and Helpers / Site Driver / 6G Tig and Arc Welders / Fabricators / Scafollders / Riggers / Fabrication Supervisor / Machinist",
        logo: dcc,
      },
    ],
    "Multi-Country": [
      {
        company: "Projects and Maintenance Contracting Division",
        positions:
          "Tank Engineer and Superintend / Planners and Schedulers / Estimation Engineers and Unit In charge / Quantity Surveyor – Mechanical/Civil / Permit Holders Civil/Mechanical / Sr. Welding Engineers / QAQC- Engineers & Inspectors for Electrical / Instrumentation / Civil, Welding / Piping Foreman and Piping Supervisors",
        logo: sts,
        region: "Oman/Bahrain/Kuwait/Abu Dhabi",
      },
      {
        company: "Arabian Industries Technical Support LLC",
        positions:
          "Mechanical Engineers / Planning Engineers / Lead Planning Engineers / TA Planners / Schedulers / Lifting Engineers/Supervisors / Project Engineers / Quantity Surveyor – Mechanical and Civil / Contract Engineer / Admin Executive / Accountant / QA/QC Engineers, Inspectors / Machinist / Permit Holders and Receiver / ISO Valve Technician / CV Technician / Asst. Valve Tech / Electrical and Instrument Technician / Project Managers / Tank Engineers / HSE Manager",
        logo: aits,
        region: "Oman/Abu Dhabi",
      },
    ],
    Malaysia: [
      {
        company: "CR3",
        positions:
          "TA Mechanical Supervisor / TA Planner / TA Scheduler Planning Engineer and Coordinator",
        logo: cr3,
      },
    ],
  };

  const countries = Object.keys(clientsByCountry);
  const allClients = Object.values(clientsByCountry).flat();

  const displayClients =
    activeCountry === "all" ? allClients : clientsByCountry[activeCountry];

  const CountryFilter = () => (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <button
        onClick={() => setActiveCountry("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          activeCountry === "all"
            ? "bg-blue-600 text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
        }`}
      >
        All Countries
      </button>
      {countries.map((country) => (
        <button
          key={country}
          onClick={() => setActiveCountry(country)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCountry === country
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          }`}
        >
          {country}{" "}
          {country !== "Multi-Country" &&
            `(${clientsByCountry[country].length})`}
        </button>
      ))}
    </div>
  );

  const ClientCard = ({ client, country }) => (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg border border-gray-300 flex items-center justify-center p-2">
          <img
            src={client.logo}
            alt={`${client.company} Logo`}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {country}
            </span>
            {client.region && (
              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                {client.region}
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {client.company}
          </h3>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg px-4 py-3 flex-1">
        <h4 className="text-sm font-semibold text-gray-800 mb-2">
          Open Positions:
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          {client.positions}
        </p>
      </div>
    </div>
  );

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Valued Clients
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            Building Partnerships Across the Globe
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-4">
        <CountryFilter />

        {/* Client Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayClients.map((client, index) => (
            <ClientCard
              key={index}
              client={client}
              country={
                activeCountry === "all"
                  ? Object.keys(clientsByCountry).find((country) =>
                      clientsByCountry[country].includes(client)
                    )
                  : activeCountry
              }
            />
          ))}
        </div>

        {/* Empty State */}
        {displayClients.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No clients found
            </h3>
            <p className="text-gray-500">
              Please select a different country filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDetails;
