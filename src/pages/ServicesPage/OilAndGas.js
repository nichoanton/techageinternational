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

        <p className="text-gray-700 leading-relaxed mb-6">
          We provide specialized expertise across all positions in installation,
          pre-commissioning, commissioning, operations, and maintenance
          throughout the oil and gas industry value chain.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              UPSTREAM OPERATIONS
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive drilling operations for both on-shore and off-shore
              environments, supported by expertise in 3 Phase Separator systems,
              advanced Saline Water Treatment facilities, and efficient Crude
              Pumping operations.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              DOWNSTREAM OPERATIONS
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Specialized refinery and process operations management, ensuring
              optimal performance and efficiency in downstream processing
              facilities.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              OPERATION & MAINTENANCE TEAMS
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive Electrical & Instrumentation (E&I), Rotary, and
              Static equipment maintenance teams supporting all process plants
              with technical excellence.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              SUPPORTIVE DEPARTMENTS
            </h4>
            <p className="text-gray-700 leading-relaxed">
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