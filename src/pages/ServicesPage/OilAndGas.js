import oilGasBg from "../../assets/services_bg/oil.jpg";

const OilAndGas = () => {
  return (
    <div>
      {/* Oil & Gas Section */}
      <section id="oil-gas" className="scroll-mt-24 mb-16">
        <div
          className="relative h-48 bg-cover bg-center bg-no-repeat rounded-lg mb-8 flex items-center justify-center"
          style={{
            backgroundImage: `url(${oilGasBg})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              OIL & GAS
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Comprehensive Oil & Gas Solutions
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6 text-justify">
          We provide specialized expertise across all positions in installation,
          pre-commissioning, commissioning, operations, and maintenance
          throughout the oil and gas industry value chain.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              UPSTREAM OPERATIONS
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              The crude excavated from the well head has to undergo preliminary
              process units to separate oil from water and natural gas. This
              process consists of three phase separators, gas handling units,
              sour water treatment unit, and sulphur recovery units and OM&S.
              Tech Age have a good network to source the Candidates across the
              country of Field operators, CRO, Engineers, Supdt. on process side
              and Technicians, Supervisors and other Higher Positions in
              Maintenance side.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              DOWNSTREAM - REFINERY AND PROCESS
            </h4>
            <p className="text-gray-700 leading-relaxed text-justify">
              The crude oil is processed in the refineries to get further
              products with required specification in various processing plants
              with diff. technologies. Consisting CDU, VDU, FCCU, LEB, OHU, HGU,
              Wax plant, SRU, Asphalt units, residue and delayed Coker units,
              Power Generation, WTP like Desalination (Sea Water), ETP, CWT, To
              operate these plants we can recruit Field Operators, CROs,
              Engineers, Supdts., and on the Maint. Part Technicians, Engineers
              for E&I., Static, Rotary, Fabrication, Instrument sections and
              Managers for each sections. Apart from these other supportive
              departments such as Inspection, technical services, Process
              Engineering, Fire & Safety
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              TURNAROUND / SHUTDOWN MAINTENANCE
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              Any continuous process plant needs to be stopped for carrying out
              the maintenance works like servicing, replacements, and revamps
              which can't be possible to do while the plant is in running
              condition. For these short duration shut down jobs we've the
              entire crew of technical team from Technician level to Higher
              Positions such as Static and Rotary, E&I Technicians, Fire and
              Hole Watchers, Permit Holders, Safety Officers, Planners,
              Schedulers, Document Controllers, Piping and Tank Foremen,
              Supervisors and Engineers with eligible qualification and enough
              experience to handle the task.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              OPERATION & MAINTENANCE TEAMS
            </h4>
            <p className="text-gray-700 leading-relaxed text-justify">
              Comprehensive Electrical & Instrumentation (E&I), Rotary, and
              Static equipment maintenance teams supporting all process plants
              with technical excellence.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              SUPPORTIVE DEPARTMENTS
            </h4>
            <p className="text-gray-700 leading-relaxed text-justify">
              Integrated support services including specialized Inspection
              teams, comprehensive Technical services, advanced Process
              Engineering capabilities, and rigorous HSE protocols.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilAndGas;
