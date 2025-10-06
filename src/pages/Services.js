import ServicesLinks from "../components/ServiceLinks";
import OilAndGas from "./ServicesPage/OilAndGas";
import EngineeringIndustries from "./ServicesPage/Engineering";
import CivilConstructionMEP from "./ServicesPage/Civil";
import FacilityManagement from "./ServicesPage/Facility";
import HealthCare from "./ServicesPage/Healthcare";

const Services = () => {
  return (
    <div className="pt-16">
      {/* Solid Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 py-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Recruitment Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            Comprehensive Manpower Solutions for Global Industries
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - 2/3 Column */}
          <div className="lg:col-span-2">
            {/* Existing Content - Scope of Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-3 h-8 bg-orange-600 mr-4"></div>
                Scope of Our Services
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Tech Age always renders the best of its services to our
                  Clients in all aspects starting from sourcing, short listing
                  and arranging for Telephone Interviews / Personal Interviews /
                  Practical trade tests and all coordination works between
                  Candidates and the Clients.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We provide comprehensive follow-up for the selected Candidates
                  including medical check-ups, emigration related formalities,
                  travel arrangements, and deployment coordination until
                  successful onboarding.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    We provide basic orientation to the selected Candidates
                    about the duties and responsibilities of their job, work
                    environment, and the rules and laws of the Company and
                    Country of Employment.
                  </p>
                </div>
              </div>
            </section>

            {/* Existing Content - Recruiting Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-3 h-8 bg-green-600 mr-4"></div>
                Recruiting Services
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We have an extensive database of interested candidates in each
                  field for different positions. Our robust network spans across
                  various professional portals and geographic regions, enabling
                  us to identify and attract the best talent nationwide.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Talent Sourcing
                    </h3>
                    <p className="text-gray-700">
                      Comprehensive candidate database and network across
                      multiple industries and regions
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Screening Process
                    </h3>
                    <p className="text-gray-700">
                      Rigorous screening including interviews and practical
                      trade tests
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Coordination
                    </h3>
                    <p className="text-gray-700">
                      End-to-end coordination between candidates and clients
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Deployment Support
                    </h3>
                    <p className="text-gray-700">
                      Medical, emigration, travel, and deployment assistance
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Existing Content - Process Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-3 h-8 bg-orange-600 mr-4"></div>
                Our Recruitment Process
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Requirement Analysis
                    </h4>
                    <p className="text-gray-700">
                      Understanding client needs and job specifications
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Candidate Sourcing
                    </h4>
                    <p className="text-gray-700">
                      Identifying potential candidates from our extensive
                      database
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Screening & Interviews
                    </h4>
                    <p className="text-gray-700">
                      Conducting thorough screening and assessment
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Deployment
                    </h4>
                    <p className="text-gray-700">
                      Managing all formalities until successful onboarding
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <OilAndGas />
            <EngineeringIndustries />
            <CivilConstructionMEP />
            <FacilityManagement />
            <HealthCare />
          </div>

          {/* Services Links - 1/3 Column - Fixed on scroll */}
          <div className="relative">
            <div className="sticky top-24 flex justify-center lg:justify-start">
              <ServicesLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
